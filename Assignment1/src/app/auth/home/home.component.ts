import { Component } from '@angular/core';
import { EmployeeComponent } from "../../components/employee/employee.component";
import { AdminComponent } from "../../components/admin/admin.component";
import { UserComponent } from "../../components/user/user.component";

@Component({
  selector: 'app-home',
  imports: [EmployeeComponent, AdminComponent, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'assets/images/car1.jpg',
    'assets/images/car2.jpg',
    'assets/images/car3.jpg',
    'assets/images/car4.jpg',
    'assets/images/car5.jpg',
    'assets/images/car6.jpg',
    'assets/images/car7.jpg'
  ];
}
