import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes Guru';
  navbarComponent1 = 'All Quotes';
  navbarComponent2 = 'Recent Quotes';
  navbarComponent3 = 'Popular Quotes';
  navbarComponent4 = 'Add Quote';

  
  /*Hopefully have the navbar components here. This includes the add quotes icon,recent,popular and all quotes*/
}