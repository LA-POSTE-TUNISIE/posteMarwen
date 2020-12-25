import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-index-r',
  templateUrl: './index-r.component.html',
  styleUrls: ['./index-r.component.css']
})
export class IndexRComponent implements OnInit {
 id;
coffres;
cof=[];
    
 
  constructor(private receveurService : ReceveurService,private router: ActivatedRoute) { }
  demandeNormalForm;

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
   
    
    this.coffres=this.receveurService.coffre(this.id);

    this.demandeNormalForm= new FormGroup({
      matriculeCoffre: new FormControl(this.coffres.matriculeCoffre),
      details: new FormGroup({
      DT50: new FormControl(this.coffres.details.DT50),
      DT20: new FormControl(this.coffres.details.DT20),
      DT10: new FormControl(this.coffres.details.DT10),
      DT5: new FormControl(this.coffres.details.DT5),
      DT5P:new FormControl(this.coffres.details.DT5p),
      DT2: new FormControl(this.coffres.details.DT2),
      DT1: new FormControl(this.coffres.details.DT1),
      DT05: new FormControl(this.coffres.details.DT05),
      DT02: new FormControl(this.coffres.details.DT02),
      DT01: new FormControl(this.coffres.details.DT01),
      DT005: new FormControl(this.coffres.details.DT005),
      DT002: new FormControl(this.coffres.details.DT002),
      DT001: new FormControl(this.coffres.details.DT001),
    })
  })
    

  

  console.log("ok",this.coffres);
  }

}
