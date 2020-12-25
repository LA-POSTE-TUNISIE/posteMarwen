import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NouveauCoffreComponent } from '../nouveau-coffre/nouveau-coffre.component';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-coffre',
  templateUrl: './add-coffre.component.html',
  styleUrls: ['./add-coffre.component.css']
})
export class AddCoffreComponent implements OnInit {
  matriculeCoffre = new FormControl('');
  constructor(public dialog: MatDialog,  private receveurService:ReceveurService, private router: Router) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(NouveauCoffreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  connect(){

   if (this.receveurService.getCoffre(this.matriculeCoffre.value)===undefined) {
     alert("matricule incorect")
   } 
    else{
      this.router.navigate(['/receveur', this.matriculeCoffre.value]);
    }
  
    
  }
  ngOnInit(): void {
  }

}
