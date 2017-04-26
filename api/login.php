<?php
require 'mySQL.php';
?>
<?php
$the_request = &$_POST;
$postdata = file_get_contents("php://input");

if (isset($postdata)) {
    $request = json_decode($postdata);

    //recebe variaveis dos usuario coren e senha
    $login = $request->coren;
    $senha = $request->senha;

    //cria objeto usado para enviar resposta para usuario
    $reposta = (object) [
        'mensagem' => '',
        'usuario' => 42,
    ];


    //pesquisa pelo coren no bando de dados
    $sql = "SELECT * FROM auth_user WHERE username = '$login'";
    $result = $con->query($sql);

    //veirifica se o coren esta cadastrado
    if ($result->num_rows == 1) {
        $usuario = $result->fetch_assoc();
        //veirifca se a senha do usuario obtido é a mesma senha enviada pelo usuario
        if ($usuario['password'] == $senha) {
            $reposta->mensagem = "sucesso";
            $reposta->usuario = $usuario;
            echo json_encode($reposta);
        //se a senha estiver incorreta, retorna mensagem dizendo o que estava errado
        } else {
            $reposta->mensagem = "senha";
            $reposta->usuario = "";
            echo json_encode($reposta);
        }
    //se o coren nao existir, retorna mensagem dizendo o que estava errado
    } else {
        $reposta->mensagem = "coren";
        $reposta->usuario = "";
        echo json_encode($reposta);
    }
}
$con->close();
?>
