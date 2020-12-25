import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-update-coffre',
  templateUrl: './update-coffre.component.html',
  styleUrls: ['./update-coffre.component.css']
})
export class UpdateCoffreComponent implements OnInit {
coffres;
coffreForm;
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    // this.coffres=this.receveurService.coffre();
    this.coffreForm=new FormGroup({
      

    })
  }


}
