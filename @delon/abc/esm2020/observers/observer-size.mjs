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
}
SizeObserver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: SizeObserver, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SizeObserver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: SizeObserver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: SizeObserver, decorators: [{
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
}
ObserverSize.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ObserverSize, deps: [{ token: SizeObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ObserverSize.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.9", type: ObserverSize, selector: "[observeSize]", outputs: { event: "observeSize" }, exportAs: ["observeSize"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ObserverSize, decorators: [{
            type: Directive,
            args: [{
                    selector: '[observeSize]',
                    exportAs: 'observeSize'
                }]
        }], ctorParameters: function () { return [{ type: SizeObserver }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { event: [{
                type: Output,
                args: ['observeSize']
            }] } });
export class ObserversModule {
}
ObserversModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ObserversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ObserversModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.9", ngImport: i0, type: ObserversModule, declarations: [ObserverSize], exports: [ObserverSize] });
ObserversModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ObserversModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ObserversModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ObserverSize],
                    declarations: [ObserverSize]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXItc2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vYnNlcnZlcnMvb2JzZXJ2ZXItc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0FBR25FLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVUsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBT2hDLENBQUM7S0F3REw7SUF0REMsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFvQyxFQUFFLEVBQUU7WUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE9BQU8sR0FBRyxFQUFFO2dCQUNWLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBNEIsSUFBSSxDQUFDO1lBQzdDLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxXQUFXLEVBQUU7Z0JBQzNDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO2lCQUM5QyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE9BQWdCO1FBQ3hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsT0FBZ0I7UUFDdkMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztZQUNsRSxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdkI7WUFDRCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7O3lHQS9EVSxZQUFZOzZHQUFaLFlBQVksY0FEQyxNQUFNOzJGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7QUF1RWxDLE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBQW9CLElBQWtCLEVBQVUsRUFBMkIsRUFBVSxNQUFjO1FBQS9FLFNBQUksR0FBSixJQUFJLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIM0YsVUFBSyxHQUF3QixJQUFJLENBQUM7UUFDVixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFFeUIsQ0FBQztJQUV2RyxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7O3lHQTFCVSxZQUFZOzZGQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzhJQUdpQyxLQUFLO3NCQUFwQyxNQUFNO3VCQUFDLGFBQWE7O0FBK0J2QixNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQWpDZixZQUFZLGFBQVosWUFBWTs2R0FpQ1osZUFBZTsyRkFBZixlQUFlO2tCQUozQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RhYmxlLFxuICBOZ01vZHVsZSxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTaXplT2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxcbiAgICBFbGVtZW50LFxuICAgIHtcbiAgICAgIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbDtcbiAgICAgIHJlYWRvbmx5IHN0cmVhbTogU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPjtcbiAgICAgIGNvdW50OiBudW1iZXI7XG4gICAgfVxuICA+KCk7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCkpO1xuICB9XG5cbiAgb2JzZXJ2ZShlbGVtZW50OiBFbGVtZW50KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TXV0YXRpb25SZWNvcmRbXT4pID0+IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX29ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3RyZWFtLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl91bm9ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+IHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPigpO1xuICAgICAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHN0cmVhbS5uZXh0KG11dGF0aW9ucykpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWyd3aWR0aCcsICdoZWlnaHQnLCAnc3R5bGUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHsgb2JzZXJ2ZXIsIHN0cmVhbSwgY291bnQ6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLnN0cmVhbTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50LS07XG4gICAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW51cE9ic2VydmVyKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHsgb2JzZXJ2ZXIsIHN0cmVhbSB9ID0gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIHN0cmVhbS5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tvYnNlcnZlU2l6ZV0nLFxuICBleHBvcnRBczogJ29ic2VydmVTaXplJ1xufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZlclNpemUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWIkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgQE91dHB1dCgnb2JzZXJ2ZVNpemUnKSByZWFkb25seSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TXV0YXRpb25SZWNvcmRbXT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYnM6IFNpemVPYnNlcnZlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc3ViJCkge1xuICAgICAgdGhpcy5fc3ViKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3ViKCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3ViKCk7XG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb2JzLm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9zdWIkID0gc3RyZWFtLnN1YnNjcmliZSh0aGlzLmV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3ViKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YiQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YigpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtPYnNlcnZlclNpemVdLFxuICBkZWNsYXJhdGlvbnM6IFtPYnNlcnZlclNpemVdXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmVyc01vZHVsZSB7fVxuIl19