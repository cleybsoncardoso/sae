import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Usuario } from '../model/usuario';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  constructor(public storage: Storage) {
    console.log('Hello StorageService Provider');
  }

  public set(user: Usuario) {

    this.storage.set('usuarioAtual', user)
      .then(() => {},
      error => alert('Erro ao carregar dados'));

  }

  public get(): Promise<Usuario> {

    return this.storage.get('usuarioAtual')
      .then(
      data => data,
      error => {
        return new Usuario();
      }).catch(() => new Usuario());

  }

}
