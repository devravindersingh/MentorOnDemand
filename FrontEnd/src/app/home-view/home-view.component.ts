import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  technologyData:any [];
  selected = null;
  constructor(private event : EventService, private route : Router ) {
    this.event.getTecnologies().subscribe(data=>{
      this.technologyData = data as string[];
    });
    console.log(this.technologyData);
   }

  ngOnInit() {
  }

  guestSearch(d){
    console.log(d);
  }

}
