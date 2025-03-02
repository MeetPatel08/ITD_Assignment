import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee = {
    name: '',
    position: '',
    department: ''
  };

  employeesList: any[] = [];

  addEmployee() {
    if (this.employee.name && this.employee.position && this.employee.department) {
      this.employeesList.push({ ...this.employee });
      this.employee = { name: '', position: '', department: '' }; // Clear form after submission
    }
  }

  editEmployee(index: number) {
    this.employee = { ...this.employeesList[index] };
    this.employeesList.splice(index, 1);
  }

  deleteEmployee(index: number) {
    this.employeesList.splice(index, 1);
  }
}
