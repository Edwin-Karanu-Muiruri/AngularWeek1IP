import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfUpVotes:any =0;
  numberOfDownVotes:any=0;

 
  likeButtonClick(numberOfDownVote){
    this.numberOfUpVotes++;
  }
  dislikeButtonClick(){
    this.numberOfDownVotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
