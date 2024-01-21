import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { backendData } from './backendData';
import { Weather } from './weather';
import { DisplayData } from './display-data';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter,:leave', [animate(1000)]),
    ]),
  ],
})
export class WeatherCardComponent {
  searchString: string = '';

  weatherData: Weather[] = backendData;
  displayData: DisplayData = {
    city: '',
    country: '',
    temperature: 0,
    type: '',
  };

  search() {
    this.weatherData.find((v) => {
      if (this.searchString === v.city) {
        this.displayData = v;
      }
    });
  }
}
