import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Usuario } from '../../model/usuario';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http) {
  }

  public logar(usuario: Usuario): Promise<any> {
    return this.http
      .post('http://localhost/saeapi/login.php', JSON.stringify(usuario), { headers: this.headers })
      .toPromise()
      .then(response => this.extractLoginData(response))
      .catch(this.tratarError);
  }

  private extractLoginData(res: Response) {
    let retorno = { erro: false, mensagem: '', usuario: {} };
    let data = res.json();
    console.log(JSON.stringify(data));

    if (data) {
      retorno.mensagem = data.mensagem;
      if (data == 'sucesso') {
        retorno.usuario = data.usuario;
      }
    } else {
      retorno.erro = true;
    }
    return retorno;
  }

  private tratarError(error: any) {
    console.log(JSON.stringify(error));
    let retorno = { erro: true, mensagem: JSON.stringify(error) };
    return retorno;
  }

}
