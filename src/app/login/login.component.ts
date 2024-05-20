import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './login.dataService';

// La hardcodeamos porque en este caso no la vamos a usar mucho.
// En otro caso tendriamos que enviarla por HTTPS al backend para que se 
// valide correctamente contra su hash
const pwd = "veosat";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Como es solo una prueba para comunicar componentes, lo estoy haciendo de una forma rapida,
  // idealmente esto tendria que pasar por OAuth, tendriamos que redirigir a home cuando
  // tenemos el token de login y evitar que se pueda cargar esta pagina, etc. y lo hariamos 
  // con un form de autenticacion de la libreria de primeng

  user: string;
  fail: boolean;

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void { }

  validate(user:string, password:string) {
    //Si la contrasena valida, redirigimos al home guardandonos el username
    if (password == pwd) {
      this.user = user;
      this.ds.dataIn(this.user);
      console.log(this.ds.dataOut())
      this.router.navigate(['/home']);
    }
    else this.fail = true;
  }

}
