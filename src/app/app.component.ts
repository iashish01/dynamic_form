import { Component } from '@angular/core';
import { JsonformService } from './jsonform/jsonform.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonformService],
})
export class AppComponent {
  title = 'jsonForm';
}
