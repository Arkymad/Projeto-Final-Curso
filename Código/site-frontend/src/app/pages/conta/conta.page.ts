import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  users!: Observable<any>;
  usuario: any;

  email!: string;
  userInfo: any;

  constructor(
    private usersService: UsuarioService,
    private storage: Storage
    ) {
      this.storage.get('email').then((email) => {
      this.userInfo =this.usersService.findEmail(email);
    });
    }

  ngOnInit() {
    this.users = this.usersService.findAll();
  }
}
