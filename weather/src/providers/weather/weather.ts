import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherProvider {

  apiKey = 'b81851516f9388e7';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  } //end of constructor


  getWeather(city, state) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
                    .map(res => res.json());
  } //end of getWeather





} //end of export class
