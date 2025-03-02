import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: String = ''
  password: String = ''

  onSubmit(){
    // Authenticate user here
    alert(`Logging in as ${this.username}`)
  }
}
