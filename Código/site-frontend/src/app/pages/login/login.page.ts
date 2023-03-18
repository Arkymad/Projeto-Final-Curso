import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login'; 
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    public navCtrl: NavController,
  ) { }

  login: Login = {
    usuario: "",
    senha: ""
  }

  ngOnInit(): void {
    this.validaForm();
  }
  
  formulariologin!: FormGroup;

  validaForm(){
    this.formulariologin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  
    onSubmit() {
    const body = {
      username: this.login.usuario,
      password: this.login.senha
    };
    this.usersService.login(body)
    .subscribe({
    next: (res) => {
    console.log(res);
    console.log('Usuário autenticado.')
    this.navCtrl.navigateForward('/inicio');
    },
    error: (e) => {
      console.error(e)
      console.log("Dados Enviados", body);
    }
    });
  }
}