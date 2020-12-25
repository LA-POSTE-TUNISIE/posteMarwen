import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceveurService {
  constructor() { }
historique(){
  const historique = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
  return historique
};
  coffre(id){
    const coffre = JSON.parse(localStorage.getItem("coffres")) || [];
    
    return coffre.find(e =>e.matriculeCoffre===id);
  }
  addNewCoffre(demande) {
    const newCoffre = JSON.parse(localStorage.getItem("coffres")) || [];
    newCoffre.push(demande)
    localStorage.setItem("coffres", JSON.stringify(newCoffre))
  }
 getCoffre(matrcule){
  const newCoffre = JSON.parse(localStorage.getItem("coffres")) || [];
  
  return newCoffre.find(e => e.matriculeCoffre===matrcule);
 }
}
