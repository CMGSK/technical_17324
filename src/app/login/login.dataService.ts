import { Injectable } from "@angular/core";

//Como no he utilizado parenting, comunicamos de forma sencilla los datos a traves de 
//este servicio. Con parenting, podria utilizar @Input.

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private msg: string;

    constructor() { }

    //Asignamos datos
    dataIn(msg: string) {
        this.msg = msg;
    }

    //Recogemos datos
    dataOut(): string {
        return this.msg;
    }
}