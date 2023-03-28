import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/interface/evento';
import { NavController } from '@ionic/angular';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  constructor(
    private formBuilder:  FormBuilder,
    private eventoService: EventoService,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
    this.validaForm();
  }

  evento: Evento = {
    id: 0,
    religiao: "",
    nome: "",
    endereco: "",
    data: 0,
    descricao: "",
    status: false
  }

  formevento!: FormGroup;

  validaForm(){
    this.formevento = this.formBuilder.group({
      religiao: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      data: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  cadastro(): void{
    const data = {
      religiao: this.evento.religiao,
      nome: this.evento.nome,
      endereco: this.evento.endereco,
      data: this.evento.data,
      descricao: this.evento.descricao
    };
    this.eventoService.create(data)
    .subscribe({
    next: (res) => {
    console.log(res);
    this.navCtrl.navigateForward('/mapa/todos');
    },
    error: (e) => console.error(e)
    });
  }
}
