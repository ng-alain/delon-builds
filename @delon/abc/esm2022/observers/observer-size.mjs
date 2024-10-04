import { Directive, ElementRef, EventEmitter, Injectable, NgModule, NgZone, Output, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SizeObserver {
    constructor() {
        this._observedElements = new Map();
    }
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(element) {
        return new Observable((observer) => {
            const stream = this._observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            };
        });
    }
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            const stream = new Subject();
            let observer = null;
            if (typeof MutationObserver !== 'undefined') {
                observer = new MutationObserver(mutations => stream.next(mutations));
                observer.observe(element, {
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: ['width', 'height', 'style']
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
    }
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    }
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = this._observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SizeObserver, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SizeObserver, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SizeObserver, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
export class ObserverSize {
    constructor() {
        this._obs = inject(SizeObserver);
        this.el = inject(ElementRef).nativeElement;
        this.ngZone = inject(NgZone);
        this._sub$ = null;
        this.event = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!this._sub$) {
            this._sub();
        }
    }
    _sub() {
        this._unsub();
        const stream = this._obs.observe(this.el);
        this.ngZone.runOutsideAngular(() => {
            this._sub$ = stream.subscribe(this.event);
        });
    }
    _unsub() {
        this._sub$?.unsubscribe();
    }
    ngOnDestroy() {
        this._unsub();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ObserverSize, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.7", type: ObserverSize, isStandalone: true, selector: "[observeSize]", outputs: { event: "observeSize" }, exportAs: ["observeSize"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ObserverSize, decorators: [{
            type: Directive,
            args: [{
                    selector: '[observeSize]',
                    exportAs: 'observeSize',
                    standalone: true
                }]
        }], propDecorators: { event: [{
                type: Output,
                args: ['observeSize']
            }] } });
export class ObserversModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ObserversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.7", ngImport: i0, type: ObserversModule, imports: [ObserverSize], exports: [ObserverSize] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ObserversModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ObserversModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ObserverSize],
                    imports: [ObserverSize]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXItc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vYnNlcnZlcnMvb2JzZXJ2ZXItc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixNQUFNLEVBRU4sTUFBTSxFQUNOLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0FBR25FLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVUsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBT2hDLENBQUM7S0F3REw7SUF0REMsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFvQyxFQUFFLEVBQUU7WUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE9BQU8sR0FBRyxFQUFFO2dCQUNWLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdB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ZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzhHQTVCVSxZQUFZO2tHQUFaLFlBQVk7OzJGQUFaLFlBQVk7a0JBTHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT2lDLEtBQUs7c0JBQXBDLE1BQU07dUJBQUMsYUFBYTs7QUE2QnZCLE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxZQW5DZixZQUFZLGFBQVosWUFBWTsrR0FtQ1osZUFBZTs7MkZBQWYsZUFBZTtrQkFKM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0YWJsZSxcbiAgTmdNb2R1bGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTaXplT2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxcbiAgICBFbGVtZW50LFxuICAgIHtcbiAgICAgIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbDtcbiAgICAgIHJlYWRvbmx5IHN0cmVhbTogU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPjtcbiAgICAgIGNvdW50OiBudW1iZXI7XG4gICAgfVxuICA+KCk7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCkpO1xuICB9XG5cbiAgb2JzZXJ2ZShlbGVtZW50OiBFbGVtZW50KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TXV0YXRpb25SZWNvcmRbXT4pID0+IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX29ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3RyZWFtLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl91bm9ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+IHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPigpO1xuICAgICAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHN0cmVhbS5uZXh0KG11dGF0aW9ucykpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWyd3aWR0aCcsICdoZWlnaHQnLCAnc3R5bGUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHsgb2JzZXJ2ZXIsIHN0cmVhbSwgY291bnQ6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLnN0cmVhbTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50LS07XG4gICAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW51cE9ic2VydmVyKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHsgb2JzZXJ2ZXIsIHN0cmVhbSB9ID0gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIHN0cmVhbS5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tvYnNlcnZlU2l6ZV0nLFxuICBleHBvcnRBczogJ29ic2VydmVTaXplJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZlclNpemUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9vYnMgPSBpbmplY3QoU2l6ZU9ic2VydmVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBuZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuICBwcml2YXRlIF9zdWIkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgQE91dHB1dCgnb2JzZXJ2ZVNpemUnKSByZWFkb25seSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TXV0YXRpb25SZWNvcmRbXT4oKTtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zdWIkKSB7XG4gICAgICB0aGlzLl9zdWIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdWIoKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWIoKTtcbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vYnMub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9zdWIkID0gc3RyZWFtLnN1YnNjcmliZSh0aGlzLmV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3ViKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YiQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YigpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtPYnNlcnZlclNpemVdLFxuICBpbXBvcnRzOiBbT2JzZXJ2ZXJTaXplXVxufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZlcnNNb2R1bGUge31cbiJdfQ==