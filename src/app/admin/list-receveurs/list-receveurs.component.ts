import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-receveurs',
  templateUrl: './list-receveurs.component.html',
  styleUrls: ['./list-receveurs.component.css']
})
export class ListReceveursComponent implements OnInit {
  users;
  poste:String;
  nom:String;
  matricule:String;
  password:String;
  email:String;
  displayedColumns: string[] ;
 dataSource;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.users=this.adminService.listUsers();

    this.users.subscribe((response:any) => {
      console.log("ok",response.user);
      this.displayedColumns= ['poste','nom', 'matricule','email', 'password']
      this.dataSource = new MatTableDataSource(response.user)
    });  


 
 
    
  }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

}
}