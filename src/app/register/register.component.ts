import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: String = ''
  password: String = ''

  onSubmit() {
    alert(`Username: ${this.username}, Password: ${this.password}`)
  }
}
