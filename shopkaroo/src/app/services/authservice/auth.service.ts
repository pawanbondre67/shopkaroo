// Auth Service
import { Injectable } from '@angular/core';
import { ApiService } from '../apiservice/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService , private router : Router) { }

  signIn(credentials: {username: string, password: string}) {
    return this.apiService.post('/sign-in', credentials);
  }
  signUp(credentials: {username: string, password: string}) {
    return this.apiService.post('/sign-up', credentials);
  }

  logout() {
    return this.apiService.post('/logout', {}).subscribe({
      next: () => {
        console.log('Logged out successfully');
        this.router.navigate(['/auth']);
        // Perform any additional actions after logout (redirect, etc.)
      },
      error: (err) => {
        console.error('Logout failed:', err);
        alert('Logout failed. Please try again.');
      }
    });
  }

  isAuthenticated() {
    return this.apiService.get('/is-authenticated');
  }

}
