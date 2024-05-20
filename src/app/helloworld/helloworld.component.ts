import { Component, OnInit } from '@angular/core';
import { DataService } from '../login/login.dataService';

@Component({
  selector: 'app-helloworld',
  providers: [DataService],
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  user: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    //cargamos los datos desde el login para que nos salude con nuestro nombre
    this.user = this.ds.dataOut();
  }

}
