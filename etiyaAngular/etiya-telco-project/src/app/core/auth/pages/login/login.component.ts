import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private messageService:MessageService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.primengConfig.ripple = true;
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response)
        setTimeout(() => {
          this.router.navigateByUrl('showcase')
        }, 1000);
      },error:(err) =>{
        console.log(err)
        this.messageService.add({detail:'Username and password cannot be left blank.',key:'etiya-warn'})
        // this.messageService.add({detail:'Please contact your system administrator'
        // ,severity:'info',summary:'Forgot password?',key:'etiya-custom-toast'})      
      }
    });
  }

}
