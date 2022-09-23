import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiclienteService } from "src/app/services/apicliente.service";
import { cliente } from "src/app/models/cliente";
import { createInjectableType } from "@angular/compiler";

@Component({
    templateUrl: 'dialogcliente.component.html'
})

export class DialogClienteComponent{
    public nombre!: string;

    constructor(
        public dialogRef: MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente: cliente
    ) {
        if(this.cliente !== null){
            this.nombre=cliente.nombre;
        }
    }

    close(){
        this.dialogRef.close();
    }

    addCliente(){
        const cliente: cliente = { nombre: this.nombre, id: 0 };
        this.apiCliente.addClientes(cliente).subscribe(response => {
            if(response.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente insertado con exito.','',{
                    duration:2000
                });
            }
        })
    }

    editCliente(){
        const cliente: cliente = {nombre: this.nombre, id:this.cliente.id};
        this.apiCliente.editClientes(cliente).subscribe(response => {
            if(response.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente editado con exito.','',{
                    duration:2000
                });
            }
        })
    }
}