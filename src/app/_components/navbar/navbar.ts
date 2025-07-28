import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar  implements OnInit{
  ngOnInit(): void {
      this.mensagem();
  }


  mensagem () {
    console.log("Meu componente NavBar iniciou")
  }
}
