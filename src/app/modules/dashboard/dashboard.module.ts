import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ListReceveursComponent } from '../../admin/list-receveurs/list-receveurs.component';
import { AddReceveurComponent } from '../../admin/add-receveur/add-receveur.component';
import { UpdateReceveurComponent } from '../../admin/update-receveur/update-receveur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from '../../dashboard/guichitier/index/index.component';
import { DemandeNormalComponent } from '../../dashboard/guichitier/fonds/demande/demande-normal/demande-normal.component';
import { DemandeClientComponent } from '../../dashboard/guichitier/fonds/demande/demande-client/demande-client.component';
import { VersementNormalComponent } from '../../dashboard/guichitier/fonds/versement/versement-normal/versement-normal.component';
import { VersementClientComponent } from '../../dashboard/guichitier/fonds/versement/versement-client/versement-client.component';
import { FermetureCaisseComponent } from '../../dashboard/guichitier/caisse/fermeture-caisse/fermeture-caisse.component';
import { AlimentationCaisseComponent } from '../../dashboard/guichitier/caisse/alimentation-caisse/alimentation-caisse.component';
import { GuichetsComponent } from '../../reveveur/guichets/guichets.component';
import { ChargementComponent } from '../../reveveur/DAB/chargement/chargement.component';
import { DechargementComponent } from '../../reveveur/DAB/dechargement/dechargement.component';
import { RecetteSupplimentaireComponent } from '../../reveveur/recette-supplimentaire/recette-supplimentaire.component';
import { DemandedeviseComponent } from '../../reveveur/devise/demandedevise/demandedevise.component';
import { EnvoiAutreBureauComponent } from '../../reveveur/devise/envoi-autre-bureau/envoi-autre-bureau.component';
import { IndexRComponent } from '../../reveveur/index-r/index-r.component';
import { DABComponent } from '../../reveveur/DAB/dab/dab.component';
import { UpdateCoffreComponent } from 'src/app/reveveur/coffre/update-coffre/update-coffre.component';
import { HistoriqueComponent } from 'src/app/reveveur/historique/historique/historique.component';
import { DetailsComponent } from 'src/app/reveveur/historique/details/details.component';
import { NotificationsComponent } from 'src/app/dashboard/shared/notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    ListReceveursComponent,
    AddReceveurComponent,
    UpdateReceveurComponent,
    IndexComponent,
    DemandeNormalComponent,
    DemandeClientComponent,
    VersementNormalComponent,
    VersementClientComponent,
    FermetureCaisseComponent,
    AlimentationCaisseComponent,
    GuichetsComponent,
    ChargementComponent,
    DechargementComponent,
    RecetteSupplimentaireComponent,
    DemandedeviseComponent,
    EnvoiAutreBureauComponent,
    IndexRComponent,
    DABComponent,
    UpdateCoffreComponent,
    HistoriqueComponent,
    DetailsComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
