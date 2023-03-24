import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  users!: Observable<any>;
  usuario: any;

  constructor(private usersService: UsuarioService) {}

  ngOnInit() {
    this.users = this.usersService.findAll();
    this.usuario = this.usersService.findID(1);
  }
}
