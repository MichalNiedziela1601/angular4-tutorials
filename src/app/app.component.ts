import {
    Component, ViewChild, ElementRef, AfterViewInit, Renderer2, AfterViewChecked, QueryList, Input, ViewChildren, ContentChildren,
    AfterContentInit
} from '@angular/core';
import {NgxSiemaOptions} from 'ngx-siema';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked, AfterContentInit {
    title = 'app';
    @ViewChild('carouselbox') carouselbox;
    @ViewChild('content') content;
    amount: QueryList<HTMLElement>;
    current: ElementRef;
    numbers = [1, 2, 3, 4, 5];
    @ViewChildren('list') list: QueryList<ElementRef>;
    index = 0;

    options: NgxSiemaOptions = {
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true,
        onInit: () => {
            // runs immediately after first initialization
        },
        onChange: () => {
            // runs after slide change
        },
    };

    constructor(public renderer: Renderer2) {
    }

    ngAfterViewInit() {
    }

    ngAfterContentInit() {

    }

    ngAfterViewChecked() {

    }

    navigate() {
        this.amount = this.content.nativeElement.querySelectorAll("li");
        let length = this.amount.length;

        if(this.index < length-2){

            for(let i = 0; i < length; i++){
                if(this.amount[i].classList[0] === 'current') {
                    this.index = i;
                }
            }
            this.renderer.removeClass(this.amount[this.index],"current");
            this.renderer.addClass(this.amount[this.index+1],"current");

        } else {
            this.index = 0;
            this.renderer.removeClass(this.amount[3],"current");
            this.renderer.addClass(this.amount[0],"current");
        }

    }


}

@Component({
    selector: 'app-li',
    template: `
<li>{{val}}</li>`
})

export class AppListComponent {
    @Input() val;
}
