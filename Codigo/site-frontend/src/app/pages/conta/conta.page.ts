import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  
  constructor(
    private storage: Storage,
    private userService: UsuarioService
    ) {}

  usuario: any = null;

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.storage.get('email').then((email) => {
      this.userService.findEmail(email).subscribe((usuario) => {
        this.usuario = usuario;
        console.log('Dados do Usuário', usuario);
      });
    },
    (error) => {
      console.log(error);
    }
    );
  }
  
}
