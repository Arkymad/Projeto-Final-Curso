import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const usuarioURL = 'http://localhost:3000/usuario/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any>{
    return this.httpClient.post(usuarioURL+'cadastrar',data)
  }
  
  edit(data:any, id:number): Observable<any>{
    return this.httpClient.put(usuarioURL+`${id}`,data)
  }

  findID(id: number): Observable<any> {
    return this.httpClient.get(usuarioURL+`${id}`)
  }

  findEmail(email:string){
    return this.httpClient.get(usuarioURL+'email/'+`${email}`)
  }

  findAll() {
    return this.httpClient.get(usuarioURL+'listar');
  }

  login(body: any): Observable<any> {
    return this.httpClient.post(usuarioURL+'login', body);
  }

}
