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
  @Input() wineDetails: number;
  wineDetails: any;
  constructor(private wineService: WineService) {
    this.wineDetails = this.wineService.getWine(1);
  }

  ngOnInit() {
    //console.log(this.wineId);

    console.log(this.wineDetails);
  }

}
