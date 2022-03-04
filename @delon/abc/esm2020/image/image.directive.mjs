import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { filter, finalize, take, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/modal";
/**
 * @deprecated Will be removed in 14.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
 */
export class ImageDirective {
    constructor(el, configSrv, http, platform, modal) {
        this.http = http;
        this.platform = platform;
        this.modal = modal;
        this.useHttp = false;
        this.inited = false;
        this.destroy$ = new Subject();
        configSrv.attach(this, 'image', { size: 64, error: `./assets/img/logo.svg` });
        this.imgEl = el.nativeElement;
    }
    ngOnInit() {
        this.update();
        this.updateError();
        this.inited = true;
    }
    ngOnChanges(changes) {
        const { size, imgEl } = this;
        imgEl.height = size;
        imgEl.width = size;
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            this.update();
        }
    }
    update() {
        this.getSrc(this.src, true)
            .pipe(takeUntil(this.destroy$), take(1))
            .subscribe({
            next: src => (this.imgEl.src = src),
            error: () => this.setError()
        });
    }
    getSrc(data, isSize) {
        const { size, useHttp } = this;
        if (useHttp) {
            return this.getByHttp(data);
        }
        if (isSize && data.includes('qlogo.cn')) {
            const arr = data.split('/');
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            data = arr.join('/');
        }
        return of(data.replace(/^(?:https?:)/i, ''));
    }
    getByHttp(url) {
        if (!this.platform.isBrowser) {
            return throwError(() => Error(`Not supported`));
        }
        return new Observable((observer) => {
            this.http
                .get(url, null, { responseType: 'blob' })
                .pipe(takeUntil(this.destroy$), take(1), finalize(() => observer.complete()))
                .subscribe({
                next: (blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => observer.next(reader.result);
                    reader.onerror = () => observer.error(`Can't reader image data by ${url}`);
                    reader.readAsDataURL(blob);
                },
                error: () => observer.error(`Can't access remote url ${url}`)
            });
        });
    }
    updateError() {
        const { imgEl, error } = this;
        imgEl.onerror = function () {
            this.onerror = null;
            this.src = error;
        };
    }
    setError() {
        const { imgEl, error } = this;
        imgEl.src = error;
    }
    open(ev) {
        if (!this.previewSrc) {
            return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        this.getSrc(this.previewSrc, false)
            .pipe(takeUntil(this.destroy$), filter(w => !!w), take(1))
            .subscribe(src => {
            this.modal.create({
                nzTitle: undefined,
                nzFooter: null,
                nzContent: `<img class="img-fluid" src="${src}" />`,
                ...this.previewModalOptions
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ImageDirective, deps: [{ token: i0.ElementRef }, { token: i1.AlainConfigService }, { token: i2._HttpClient }, { token: i3.Platform }, { token: i4.NzModalService }], target: i0.ɵɵFactoryTarget.Directive });
ImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.5", type: ImageDirective, selector: "[_src]", inputs: { src: ["_src", "src"], size: "size", error: "error", useHttp: "useHttp", previewSrc: "previewSrc", previewModalOptions: "previewModalOptions" }, host: { listeners: { "click": "open($event)" }, properties: { "class.point": "previewSrc" } }, exportAs: ["_src"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber()
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean()
], ImageDirective.prototype, "useHttp", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[_src]',
                    exportAs: '_src',
                    host: {
                        '(click)': 'open($event)',
                        '[class.point]': `previewSrc`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.AlainConfigService }, { type: i2._HttpClient }, { type: i3.Platform }, { type: i4.NzModalService }]; }, propDecorators: { src: [{
                type: Input,
                args: ['_src']
            }], size: [{
                type: Input
            }], error: [{
                type: Input
            }], useHttp: [{
                type: Input
            }], previewSrc: [{
                type: Input
            }], previewModalOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQTZELE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSW5FLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFHN0Y7O0dBRUc7QUFTSCxNQUFNLE9BQU8sY0FBYztJQWV6QixZQUNFLEVBQWdDLEVBQ2hDLFNBQTZCLEVBQ3JCLElBQWlCLEVBQ2pCLFFBQWtCLEVBQ2xCLEtBQXFCO1FBRnJCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWJOLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJakMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBU3JDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIs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QUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNoQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLCtCQUErQixHQUFHLE1BQU07Z0JBQ25ELEdBQUcsSUFBSSxDQUFDLG1CQUFtQjthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzJHQXRJVSxjQUFjOytGQUFkLGNBQWM7QUFLRDtJQUFkLFdBQVcsRUFBRTs0Q0FBZTtBQUViO0lBQWYsWUFBWSxFQUFFOytDQUFpQjsyRkFQOUIsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsY0FBYzt3QkFDekIsZUFBZSxFQUFFLFlBQVk7cUJBQzlCO2lCQUNGO2dOQUtnQixHQUFHO3NCQUFqQixLQUFLO3VCQUFDLE1BQU07Z0JBQ1csSUFBSTtzQkFBM0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiwgU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMsIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDE0LjAuMCwgUGxzIHVzZWQgW256LWltYWdlXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9pbWFnZS9lbikgaW5zdGVhZCwgZm9yIGV4YW1wbGVzOlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbX3NyY10nLFxuICBleHBvcnRBczogJ19zcmMnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb3BlbigkZXZlbnQpJyxcbiAgICAnW2NsYXNzLnBvaW50XSc6IGBwcmV2aWV3U3JjYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3VzZUh0dHA6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoJ19zcmMnKSBzcmMhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemUhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yITogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlSHR0cCA9IGZhbHNlO1xuICBASW5wdXQoKSBwcmV2aWV3U3JjITogc3RyaW5nO1xuICBASW5wdXQoKSBwcmV2aWV3TW9kYWxPcHRpb25zITogTW9kYWxPcHRpb25zO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW1nRWw6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmPEhUTUxJbWFnZUVsZW1lbnQ+LFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2VcbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnaW1hZ2UnLCB7IHNpemU6IDY0LCBlcnJvcjogYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2AgfSk7XG4gICAgdGhpcy5pbWdFbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzaXplLCBpbWdFbCB9ID0gdGhpcztcbiAgICBpbWdFbC5oZWlnaHQgPSBzaXplO1xuICAgIGltZ0VsLndpZHRoID0gc2l6ZTtcblxuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNyYyh0aGlzLnNyYywgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBzcmMgPT4gKHRoaXMuaW1nRWwuc3JjID0gc3JjKSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHRoaXMuc2V0RXJyb3IoKVxuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNyYyhkYXRhOiBzdHJpbmcsIGlzU2l6ZTogYm9vbGVhbik6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgeyBzaXplLCB1c2VIdHRwIH0gPSB0aGlzO1xuICAgIGlmICh1c2VIdHRwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRCeUh0dHAoZGF0YSk7XG4gICAgfVxuICAgIGlmIChpc1NpemUgJiYgZGF0YS5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgaW1nU2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID0gaW1nU2l6ZSA9PT0gJzAnIHx8ICtpbWdTaXplICE9PSBzaXplID8gc2l6ZS50b1N0cmluZygpIDogaW1nU2l6ZTtcbiAgICAgIGRhdGEgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIHJldHVybiBvZihkYXRhLnJlcGxhY2UoL14oPzpodHRwcz86KS9pLCAnJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IEVycm9yKGBOb3Qgc3VwcG9ydGVkYCkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPHN0cmluZz4pID0+IHtcbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KHVybCwgbnVsbCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChibG9iOiBCbG9iKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IG9ic2VydmVyLm5leHQocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiBvYnNlcnZlci5lcnJvcihgQ2FuJ3QgcmVhZGVyIGltYWdlIGRhdGEgYnkgJHt1cmx9YCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoKSA9PiBvYnNlcnZlci5lcnJvcihgQ2FuJ3QgYWNjZXNzIHJlbW90ZSB1cmwgJHt1cmx9YClcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIGltZ0VsLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5zcmMgPSBlcnJvcjtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICBpbWdFbC5zcmMgPSBlcnJvcjtcbiAgfVxuXG4gIG9wZW4oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByZXZpZXdTcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5nZXRTcmModGhpcy5wcmV2aWV3U3JjLCBmYWxzZSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih3ID0+ICEhdyksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoc3JjID0+IHtcbiAgICAgICAgdGhpcy5tb2RhbC5jcmVhdGUoe1xuICAgICAgICAgIG56VGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgICBuekNvbnRlbnQ6IGA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJHtzcmN9XCIgLz5gLFxuICAgICAgICAgIC4uLnRoaXMucHJldmlld01vZGFsT3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=