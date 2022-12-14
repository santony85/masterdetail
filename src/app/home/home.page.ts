import { Component } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   lstfilm:any;
  constructor(private router: Router) {
    fetch('./assets/films-json.json').then(res => res.json())
    .then(json => {
      this.lstfilm = json;
    });
  }
  
  affDetail(item){
    let navigationExtras: NavigationExtras = {
      state : {
        param1: item
        }
      };
    this.router.navigate(['/detail'],navigationExtras);
    //ouvrir page detail
    //envoyer le param a la page detail 
  }
}
