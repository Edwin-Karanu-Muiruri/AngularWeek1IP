import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
let QuoteFormComponent = class QuoteFormComponent {
    constructor() {
        this.newQuote = new Quote('', '', '', 0, 0);
        this.addQuote = new EventEmitter();
    }
    submitQuote() {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new Quote("", "", "", 0, 0);
    }
    ngOnInit() {
    }
};
__decorate([
    Output()
], QuoteFormComponent.prototype, "addQuote", void 0);
QuoteFormComponent = __decorate([
    Component({
        selector: 'app-quote-form',
        templateUrl: './quote-form.component.html',
        styleUrls: ['./quote-form.component.css']
    })
], QuoteFormComponent);
export { QuoteFormComponent };
//# sourceMappingURL=quote-form.component.js.map