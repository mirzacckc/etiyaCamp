import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.createLoginForm();
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
        this.messageService.add({severity:'warn',detail:'Giriş bilgileri uyuşmuyor',key:'etiya-warn'})
      }
    });
  }

}
