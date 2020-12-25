import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';


@Component({
  selector: 'app-nouveau-coffre',
  templateUrl: './nouveau-coffre.component.html',
  styleUrls: ['./nouveau-coffre.component.css']
})
export class NouveauCoffreComponent implements OnInit {

  demandeNormalForm;
  somme:number;
  guichitier;
    constructor( private receveurService: ReceveurService, private router: Router) { }
  
    ngOnInit(): void {
     
      this.demandeNormalForm= new FormGroup({
        matriculeCoffre: new FormControl(),
        details: new FormGroup({
        DT50: new FormControl(),
        DT20: new FormControl(),
        DT10: new FormControl(),
        DT5: new FormControl(),
        DT5P:new FormControl(),
        DT2: new FormControl(),
        DT1: new FormControl(),
        DT05: new FormControl(),
        DT02: new FormControl(),
        DT01: new FormControl(),
        DT005: new FormControl(),
        DT002: new FormControl(),
        DT001: new FormControl(),
      })
    })
      
    
      
    }
    demandeFondsForm() {
      if (this.demandeNormalForm.invalid) {
        return;
      }
      this.somme=(this.demandeNormalForm.value.details.DT50*50)+(this.demandeNormalForm.value.details.DT20*20)+(this.demandeNormalForm.value.details.DT10*10)+(this.demandeNormalForm.value.details.DT5*5)+(this.demandeNormalForm.value.details.DT5P*5)+(this.demandeNormalForm.value.details.DT1*1)+(this.demandeNormalForm.value.details.DT05*0.5)+(this.demandeNormalForm.value.details.DT02*0.2)+(this.demandeNormalForm.value.details.DT01*0.1)+(this.demandeNormalForm.value.details.DT005*0.05)+(this.demandeNormalForm.value.details.DT002*0.02)+(this.demandeNormalForm.value.details.DT001*0.01)
      this.demandeNormalForm.addControl('montant',new FormControl(this.somme));
  
      this.receveurService.addNewCoffre(this.demandeNormalForm.value);
      console.log(this.demandeNormalForm.value);
      this.router.navigateByUrl('/coffre/add');
      
    }

}
