// AuthComponent class is responsible for the login and register functionality.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authservice/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private formBuilder: FormBuilder , private authService:AuthService,private router: Router) {}

  register : boolean = false;

  form: FormGroup = this.formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });

  signUp(e: Event) {
    e.preventDefault();
    this.authService.signUp(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/cart']);
        this.form.reset();
        // this.register = false;


      },
      error: (error:HttpErrorResponse) => {
        console.error(error);
      }
    });
    }

    signIn(e: Event) {
      e.preventDefault();
      this.authService.signIn(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/cart']);
        },
        error: (error:HttpErrorResponse) => {
          console.error(error);
        }
      });
      }


  }


