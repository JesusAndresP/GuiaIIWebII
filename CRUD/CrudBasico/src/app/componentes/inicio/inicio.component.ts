import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ListarCliente: Cliente[] = [];

  
  constructor(private ClientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.ClientesService.getClientes().subscribe(
      res=>{
        console.log(res)
        this.ListarCliente=<any>res;
      },
      err => console.log(err)
    );
  }
  
  eliminar(id:any){
    this.ClientesService.deleteCliente(id).subscribe(
      res=>{
        console.log('cliente eliminado con exito')
        this.listarClientes();
      },
      err=>console.log(err)
    )
  }

  actualizar(id:any){
    id += '';
    this.router.navigate(['edit/'+id]);
  }

}
