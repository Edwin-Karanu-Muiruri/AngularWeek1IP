import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('','','',0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    // create instance
    this.addQuote.emit(this.newQuote);
    // ngForm to reset
    this.newQuote = new Quote("","","",0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
