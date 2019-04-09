import {Component, OnInit} from '@angular/core';
import {WineService} from "../services/wine.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent implements OnInit {
  wines: Observable<any>;

  constructor(private wineService: WineService,) {
    this.wines = this.wineService.getWineList();
  }

  ngOnInit() {
  }
  setDetail(id: number){
    //console.log('id',id);
    return this.wineService.getWine(id);
  }

  onAdded(wine) {
    this.wines = this.wineService.getWineList();
  }

}
