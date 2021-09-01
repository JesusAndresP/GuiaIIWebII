import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService, Cliente } from '../../services/clientes.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  cliente: any={};
  clientes: Cliente={
    id:'',
    nombre:'',
    email:'',
    activo:''

  };

  constructor(  private ClientesService: ClientesService, 
    private router:Router, 
    private ActivateRoute:ActivatedRoute) { }


  ngOnInit(): void {
    const id_entrada = this.ActivateRoute.snapshot.params.id;
    console.log('id de entrada'+id_entrada);

    if(id_entrada){
      this.ClientesService.getUnCliente(id_entrada)
      .subscribe(
        res=>{
          this.cliente = res;
          console.log(res)
        },
        err=>console.log(err)
      );
    }
  }

  actualizar(){
    this.ClientesService.editCliente(this.clientes.id, this.clientes).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);

  }

}
