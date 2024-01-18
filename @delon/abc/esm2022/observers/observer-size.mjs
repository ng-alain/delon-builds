import { Directive, EventEmitter, Injectable, NgModule, Output } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SizeObserver, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SizeObserver, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SizeObserver, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
export class ObserverSize {
    constructor(_obs, el, ngZone) {
        this._obs = _obs;
        this.el = el;
        this.ngZone = ngZone;
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
        const stream = this._obs.observe(this.el.nativeElement);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ObserverSize, deps: [{ token: SizeObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: ObserverSize, isStandalone: true, selector: "[observeSize]", outputs: { event: "observeSize" }, exportAs: ["observeSize"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ObserverSize, decorators: [{
            type: Directive,
            args: [{
                    selector: '[observeSize]',
                    exportAs: 'observeSize',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: SizeObserver }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { event: [{
                type: Output,
                args: ['observeSize']
            }] } });
export class ObserversModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ObserversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: ObserversModule, imports: [ObserverSize], exports: [ObserverSize] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ObserversModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ObserversModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ObserverSize],
                    imports: [ObserverSize]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXItc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vYnNlcnZlcnMvb2JzZXJ2ZXItc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0FBR25FLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVUsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBT2hDLENBQUM7S0F3REw7SUF0REMsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFvQyxFQUFFLEVBQUU7WUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE9BQU8sR0FBRyxFQUFFO2dCQUNWLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lB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QUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzhHQTlCVSxZQUFZO2tHQUFaLFlBQVk7OzJGQUFaLFlBQVk7a0JBTHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7NEhBR2lDLEtBQUs7c0JBQXBDLE1BQU07dUJBQUMsYUFBYTs7QUFtQ3ZCLE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxZQXJDZixZQUFZLGFBQVosWUFBWTsrR0FxQ1osZUFBZTs7MkZBQWYsZUFBZTtrQkFKM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0YWJsZSxcbiAgTmdNb2R1bGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2l6ZU9ic2VydmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZWRFbGVtZW50cyA9IG5ldyBNYXA8XG4gICAgRWxlbWVudCxcbiAgICB7XG4gICAgICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGw7XG4gICAgICByZWFkb25seSBzdHJlYW06IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT47XG4gICAgICBjb3VudDogbnVtYmVyO1xuICAgIH1cbiAgPigpO1xuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5fY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudDogRWxlbWVudCk6IE9ic2VydmFibGU8TXV0YXRpb25SZWNvcmRbXT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE11dGF0aW9uUmVjb3JkW10+KSA9PiB7XG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN0cmVhbS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fdW5vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9vYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPiB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT4oKTtcbiAgICAgIGxldCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiBzdHJlYW0ubmV4dChtdXRhdGlvbnMpKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3N0eWxlJ11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7IG9ic2VydmVyLCBzdHJlYW0sIGNvdW50OiAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5zdHJlYW07XG4gIH1cblxuICBwcml2YXRlIF91bm9ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudC0tO1xuICAgICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFudXBPYnNlcnZlcihlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCB7IG9ic2VydmVyLCBzdHJlYW0gfSA9IHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpITtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBzdHJlYW0uY29tcGxldGUoKTtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbb2JzZXJ2ZVNpemVdJyxcbiAgZXhwb3J0QXM6ICdvYnNlcnZlU2l6ZScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXJTaXplIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3ViJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoJ29ic2VydmVTaXplJykgcmVhZG9ubHkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE11dGF0aW9uUmVjb3JkW10+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb2JzOiBTaXplT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc3ViJCkge1xuICAgICAgdGhpcy5fc3ViKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3ViKCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3ViKCk7XG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb2JzLm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9zdWIkID0gc3RyZWFtLnN1YnNjcmliZSh0aGlzLmV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3ViKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YiQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YigpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtPYnNlcnZlclNpemVdLFxuICBpbXBvcnRzOiBbT2JzZXJ2ZXJTaXplXVxufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZlcnNNb2R1bGUge31cbiJdfQ==