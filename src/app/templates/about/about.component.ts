import { Component } from '@angular/core';
import { ModooscuroService } from 'src/app/services/modooscuro.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  constructor(private Modooscuro : ModooscuroService){
  }

  modooscuro(){
    this.Modooscuro
  }
}
