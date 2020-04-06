import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quote('Edwin Karanu','All that glitters is not gold',40,2),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),
    new Quote('','',200,40),

  ]

  addNewQuote(quote){
    this.quotes.unshift(quote)
  }

  deleteQuote(quote){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
    if (toDelete){
      this.quotes.splice(quote.quote,1);
    }
  }
  upvoteButtonClick(i){
    this.quotes[i].numberOfUpVotes++;
  }
  downvoteButtonClick(i){
    this.quotes[i].numberOfDownVotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
