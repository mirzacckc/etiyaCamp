import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //today: number = Date.now();

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  testAuth(){
    this.authService.test().subscribe(response =>{
      console.log(response)
    })
  }

}
