import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    name: '',
    email: '',
    role: ''
  };

  usersList: any[] = [];

  addUser() {
    if (this.user.name && this.user.email && this.user.role) {
      this.usersList.push({ ...this.user });
      this.user = { name: '', email: '', role: '' }; // Clear form fields after submission
    }
  }

  editUser(index: number) {
    this.user = { ...this.usersList[index] };
    this.usersList.splice(index, 1);
  }

  deleteUser(index: number) {
    this.usersList.splice(index, 1);
  }
}
