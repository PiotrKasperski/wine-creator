import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {WineService} from "../services/wine.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-wine-list-detail',
  templateUrl: './wine-list-detail.component.html',
  styleUrls: ['./wine-list-detail.component.scss']
})
export class WineListDetailComponent implements OnInit {
  @Input() wineDetails: Observable<any>;
  wine: any;

  constructor(private wineService: WineService) {

  }
  getWineDetail():void{
   this.wineDetails.subscribe(wine => {
      this.wine = wine
    })
  }

  ngOnInit() {
    //console.log(this.wineId);
    this.getWineDetail();
    console.log(this.wineDetails);
  }

}
