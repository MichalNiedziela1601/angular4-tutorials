import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import 'rxjs/add/operator/publish';

const next$ = new ReplaySubject(1);
const prev$ = new ReplaySubject(1);

@Injectable()
export class CarouselService {

    next(numbers: number = 1, selector?: string): Observable<{selector: string, currentSlide: number}> {
        const listener = new BehaviorSubject<{selector: string, currentSlide: number}>(null);
        next$.next({selector, numbers, listener});
        return listener.asObservable();
    }

    prev(numbers: number = 1, selector?: string): Observable<{selector: string, currentSlide: number}> {
        const listener = new BehaviorSubject<{selector: string, currentSlide: number}>(null);
        prev$.next({selector, numbers, listener});
        return listener.asObservable();
    }

    onNext(): Observable<{selector: string, numbers: number}> {
        return next$.publish().refCount();
    }

    onPrev(): Observable<{selector: string, numbers: number}> {
        return prev$.publish().refCount();
    }
}
