import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Output, NgModule } from '@angular/core';
import { Observable, Subject } from 'rxjs';

class SizeObserver {
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
SizeObserver.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: SizeObserver, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SizeObserver.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: SizeObserver, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: SizeObserver, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
class ObserverSize {
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
ObserverSize.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ObserverSize, deps: [{ token: SizeObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ObserverSize.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.5", type: ObserverSize, selector: "[observeSize]", outputs: { event: "observeSize" }, exportAs: ["observeSize"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ObserverSize, decorators: [{
            type: Directive,
            args: [{
                    selector: '[observeSize]',
                    exportAs: 'observeSize'
                }]
        }], ctorParameters: function () { return [{ type: SizeObserver }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { event: [{
                type: Output,
                args: ['observeSize']
            }] } });
class ObserversModule {
}
ObserversModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ObserversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ObserversModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.5", ngImport: i0, type: ObserversModule, declarations: [ObserverSize], exports: [ObserverSize] });
ObserversModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ObserversModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ObserversModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ObserverSize],
                    declarations: [ObserverSize]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ObserverSize, ObserversModule, SizeObserver };
//# sourceMappingURL=chart-observer-size.mjs.map
