import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-receveur',
  templateUrl: './add-receveur.component.html',
  styleUrls: ['./add-receveur.component.css']
})
export class AddReceveurComponent implements OnInit {
  poste='Poste dAgent :';
  submitted=false;
  userForm;
  notifications=[];
  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.userForm= new FormGroup({
      poste: new FormControl('',Validators.required),
      nom:new FormControl('',Validators.required),
      matricule: new FormControl('',[Validators.required,Validators.min(1000000)]),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    })
  }

  submitForm() {
    this.submitted=true;
    if (this.userForm.invalid) {
      return ;  
    }
    this.userForm.addControl('notifications',new FormControl(this.notifications));
    this.adminService.addUser(this.userForm.value);
     this.router.navigateByUrl('/admin')
  }
}
