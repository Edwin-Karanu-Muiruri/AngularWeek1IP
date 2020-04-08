import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Edwin Karanu','All that glitters is not gold.','Wise man',40,2),
    new Quote('Business Daily','Change is the natural state of business.','Business Daily',1200,40),
    new Quote('Willy Kamau','Act as if what you do makes a difference. It does','William James',210,4),
    new Quote('Fred Matiangi','Sometimes you will never know the value of a moment until it becomes a memory','Dr Seuss',200,0),
    new Quote('James Harden','You are never too old to set another goal or to dream a new dream','C.S. Lewis',3200,70),
    new Quote('Success.com','Your limitation-Its only your imagination','Unknown',100,9),
    new Quote('Derrick M','Be the change you wish to see in the world','Mahatma Gandhi',2200,15),
    new Quote('Mindfulness Daily','Sometimes we are tested, not to show our weakness, but to discover our strengths','F.R. Rishabh.S',68,0),
    new Quote('Foodliy.com','Take responsibility of your own happiness, never put it in other peoples hands','Roy T. Bennet',300,49),
    new Quote('Johnston Community School','The only person you are destined to be is the person you decide to be','Ralph Waldo Emerson',500,34)

  ]
  upvotes: number;
  downvotes: number;

  addNewQuote(quote){
    this.quotes.unshift(quote)
  }

  deleteQuote(quote){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
    if (toDelete){
      this.quotes.splice(quote.quote,1);
    }
  }
  
  likeButtonClick(upvotes){
    this.upvotes+1;
    return new upvotes;
  }
  dislikeButtonClick(downvotes){
    this.downvotes+1;
    return new downvotes;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
