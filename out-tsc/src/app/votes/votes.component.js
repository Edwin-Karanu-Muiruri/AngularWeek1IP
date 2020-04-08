import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VotesComponent = class VotesComponent {
    constructor() {
        this.numberOfUpVotes = 0;
        this.numberOfDownVotes = 0;
    }
    likeButtonClick(numberOfDownVote) {
        this.numberOfUpVotes++;
    }
    dislikeButtonClick() {
        this.numberOfDownVotes++;
    }
    ngOnInit() {
    }
};
VotesComponent = __decorate([
    Component({
        selector: 'app-votes',
        templateUrl: './votes.component.html',
        styleUrls: ['./votes.component.css']
    })
], VotesComponent);
export { VotesComponent };
//# sourceMappingURL=votes.component.js.map