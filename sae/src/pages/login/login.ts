import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';
import { Usuario } from '../../model/usuario';
import { StorageService } from '../../providers/storage-service';
import { Pacientes } from '../pacientes/pacientes';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
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
    private menu: MenuController,
    private toastCtrl: ToastController,
    private storageService: StorageService
  ) {
    this.menu.enable(false);
  }

  entrar() {
    this.loginService.logar(this.usuario).then(resposta => {
      if (!resposta.erro) {
        if (resposta.mensagem == "sucesso") {
          this.exibirMsg("Login efetuado com sucesso");
          this.storageService.set(resposta.usuario);
          this.navCtrl.setRoot(Pacientes);
        } else if (resposta.mensagem == "senha") {
          this.exibirMsg("Senha incorreta");
        } else if (resposta.mensagem == "coren") {
          this.exibirMsg("Este coren não esta cadastrado no sistema");
        }
      }
    });
  }

  esqueci() {

  }

  exibirMsg(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
