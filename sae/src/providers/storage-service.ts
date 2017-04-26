import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Usuario } from '../model/usuario';

@Injectable()
export class StorageService {

  constructor(public storage: Storage) {
  }

  public set(user: any) {

    this.storage.set('usuarioAtual', user)
      .then(() => {},
      error => alert('Erro ao carregar dados'));

  }

  public get(): Promise<any> {

    return this.storage.get('usuarioAtual')
      .then(
      data => data,
      error => {
        alert('Erro ao carregar dados');
        return new Usuario();
      }).catch(() => new Usuario());

  }

}
