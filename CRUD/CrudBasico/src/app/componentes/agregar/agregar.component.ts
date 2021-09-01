import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService, Cliente } from '../../services/clientes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cliente: Cliente={
    id:'',
    nombre:'',
    email:'',
    activo:''
  };

  constructor(  private ClientesService: ClientesService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.ClientesService.addCliente(this.cliente).subscribe();
    this.router.navigate(['/inicio'])
  }

}
