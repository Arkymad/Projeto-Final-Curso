import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interface/usuario'; 
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    public navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.validaForm();
  }

  usuario: Usuario = {
    id: 0,
    usuario: "",
    nome: "",
    telefone: "",
    email: "",
    senha: ""
  }

  formulario!: FormGroup;

  validaForm(){
    this.formulario = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  cadastro(): void{
    const data = {
    usuario: this.usuario.usuario,
    nome: this.usuario.nome,
    telefone: this.usuario.telefone,
    email: this.usuario.email,
    senha: this.usuario.senha
    };
    this.usersService.create(data)
    .subscribe({
    next: (res) => {
    console.log(res);
    this.navCtrl.navigateForward('/login');
    },
    error: (e) => console.error(e)
    });
  }
}