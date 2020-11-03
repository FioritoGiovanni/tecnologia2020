import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obs : Observable<object>;
  title = 'client-angular';
  results: string[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.obs=this.http.get('https://3000-f2e067ca-7ade-4f94-8d35-5f7488d1383f.ws-eu01.gitpod.io/api');
      this.obs.subscribe(this.getData);
    }
    getData = data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      }

}
