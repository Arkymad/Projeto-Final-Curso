import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login'; 
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    private storage: Storage,
    public navCtrl: NavController
  ) { }

  login: Login = {
    email: "",
    senha: ""
  }

  ngOnInit(): void {
    this.validaForm();
  }
  
  formulariologin!: FormGroup;

  validaForm(){
    this.formulariologin = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  
    onSubmit() {
    const body = {
      username: this.login.email,
      password: this.login.senha
    };
    this.usersService.login(body)
    .subscribe({
    next: (res) => {
    console.log(res);
    this.storage.set('email', this.login.email);
    this.navCtrl.navigateForward('/inicio');
    },
    error: (e) => {
      console.error(e)
      console.log("Dados Enviados", body);
    }
    });
  }
}