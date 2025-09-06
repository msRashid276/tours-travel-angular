import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterCity(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
        <app-housing-location
        *ngFor="let housingLocation of filterHousingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
    
    housingLocationList : HousingLocation[]=[];
    filterHousingLocationList: HousingLocation[]=[];
    housingService : HousingService= inject(HousingService);

    constructor(){
      this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[]) =>{
        this.housingLocationList = housingLocationList;
        this.filterHousingLocationList = housingLocationList;
      })
    }

    filterCity(values: string) {
    if(!values){
      this.filterHousingLocationList = this.housingLocationList;
    }else{
      this.filterHousingLocationList = this.housingLocationList.filter((filteredHousingLocation => filteredHousingLocation?.city.toLowerCase().includes(values?.toLowerCase())))
    }
    }
}
