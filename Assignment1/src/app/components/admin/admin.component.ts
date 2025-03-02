import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-admin',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  admin = {
    name: '',
    email: '',
    accessLevel: ''
  };

  adminsList: any[] = [];

  addAdmin() {
    if (this.admin.name && this.admin.email && this.admin.accessLevel) {
      this.adminsList.push({ ...this.admin });
      this.admin = { name: '', email: '', accessLevel: '' }; // Clear input fields after submission
    }
  }

  editAdmin(index: number) {
    this.admin = { ...this.adminsList[index] };
    this.adminsList.splice(index, 1);
  }

  deleteAdmin(index: number) {
    this.adminsList.splice(index, 1);
  }
}
