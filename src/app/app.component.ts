import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { company } from './company';
import { capsule } from './capsule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  capsule: capsule[] = [];
  company : company = new company;

  constructor(
    private http: HttpClient
  ) { };
  ngOnInit() {
    this.getCapsules();
    this.getCompany();

  }
  
  getCapsules() {
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((data: any) => {
      this.capsule = data;
      
    });
  }

  getCompany() {
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((data2: any) => {
      this.company = data2;

    });
  }
}
