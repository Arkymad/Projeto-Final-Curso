import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const eventoURL = 'http://localhost:3000/evento/';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any>{
    return this.httpClient.post(eventoURL+'cadastrar',data)
  }
  
  edit(data:any, id:number): Observable<any>{
    return this.httpClient.put(eventoURL+`${id}`,data)
  }

  findID(id: number): Observable<any> {
    return this.httpClient.get(eventoURL+`${id}`)
  }

  findAll() {
    return this.httpClient.get(eventoURL+'listar');
  }


}
