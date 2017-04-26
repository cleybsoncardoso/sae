import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';
import { Usuario } from '../../model/usuario';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  private usuario: Usuario = new Usuario();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginService: LoginService,
    private menu : MenuController
    ) {
      this.menu.enable(false);
  }

  entrar(){
    this.loginService.logar(this.usuario).then(resposta=>{
      if(!resposta.erro){
        if(resposta.mensagem == "sucesso"){

        }else if(resposta.mensagem == "senha"){

        }else if(resposta.mensagem == "coren"){

        }
      } 
    });
  }

  esqueci(){

  }

}
