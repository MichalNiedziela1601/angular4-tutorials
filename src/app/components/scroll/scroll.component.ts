import {Component, Inject, HostListener, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {trigger, transition, style, animate} from '@angular/animations';
@Component({
    selector: 'app-scroll',
    template: `<div *ngIf="show" [@show] id="scrollTo">text</div>`,
    animations: [
        trigger(
            'show',[
                transition(
                    ':enter', [
                        style({opacity: 0}),
                        animate('1s', style({opacity: 1}))
                    ]
                )
            ]
        )
    ]
})

export class ScrollComponent {
    show = false;
    constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) {}

    @HostListener("window:scroll")
    onWindowScroll() {
        let number = this.document.body.scrollTop;
        let scrollTo = this.el.nativeElement;
        console.log(scrollTo);
        if(number > 50){
            this.show = true;
        }
    }
}
