import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  url='/api';
  constructor(private http: HttpClient) { }

  //get clientes
  getClientes()
  {
    return this.http.get(this.url);
  }

  //get un cliente
  getUnCliente(id: any){
    return this.http.get(this.url+'/'+id);
  }

  //Agregar cliente
  addCliente(cliente:Cliente){
    return this.http.post(this.url, cliente);
  }

  //Eliminar cliente
  deleteCliente(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //Actualizar Cliente
  editCliente(id:string, cliente:Cliente){
    return this.http.put(this.url+'/'+id, cliente);

  }

}

export interface Cliente{
  id:string;
  email:string;
  nombre:string;
  activo: string;
}
