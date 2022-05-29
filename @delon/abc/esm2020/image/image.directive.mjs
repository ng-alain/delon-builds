import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { Observable, of, Subject, throwError, filter, finalize, take, takeUntil } from 'rxjs';
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
ImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: ImageDirective, deps: [{ token: i0.ElementRef }, { token: i1.AlainConfigService }, { token: i2._HttpClient }, { token: i3.Platform }, { token: i4.NzModalService }], target: i0.ɵɵFactoryTarget.Directive });
ImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.10", type: ImageDirective, selector: "[_src]", inputs: { src: ["_src", "src"], size: "size", error: "error", useHttp: "useHttp", previewSrc: "previewSrc", previewModalOptions: "previewModalOptions" }, host: { listeners: { "click": "open($event)" }, properties: { "class.point": "previewSrc" } }, exportAs: ["_src"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber()
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean()
], ImageDirective.prototype, "useHttp", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: ImageDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQTZELE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXhHLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFHN0Y7O0dBRUc7QUFTSCxNQUFNLE9BQU8sY0FBYztJQWV6QixZQUNFLEVBQWdDLEVBQ2hDLFNBQTZCLEVBQ3JCLElBQWlCLEVBQ2pCLFFBQWtCLEVBQ2xCLEtBQXFCO1FBRnJCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWJOLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJakMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBU3JDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFD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Q0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNoQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLCtCQUErQixHQUFHLE1BQU07Z0JBQ25ELEdBQUcsSUFBSSxDQUFDLG1CQUFtQjthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzRHQXRJVSxjQUFjO2dHQUFkLGNBQWM7QUFLRDtJQUFkLFdBQVcsRUFBRTs0Q0FBZTtBQUViO0lBQWYsWUFBWSxFQUFFOytDQUFpQjs0RkFQOUIsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsY0FBYzt3QkFDekIsZUFBZSxFQUFFLFlBQVk7cUJBQzlCO2lCQUNGO2dOQUtnQixHQUFHO3NCQUFqQixLQUFLO3VCQUFDLE1BQU07Z0JBQ1csSUFBSTtzQkFBM0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiwgU3ViamVjdCwgdGhyb3dFcnJvciwgZmlsdGVyLCBmaW5hbGl6ZSwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucywgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTQuMC4wLCBQbHMgdXNlZCBbbnotaW1hZ2VdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ltYWdlL2VuKSBpbnN0ZWFkLCBmb3IgZXhhbXBsZXM6XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tfc3JjXScsXG4gIGV4cG9ydEFzOiAnX3NyYycsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvcGVuKCRldmVudCknLFxuICAgICdbY2xhc3MucG9pbnRdJzogYHByZXZpZXdTcmNgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdXNlSHR0cDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnX3NyYycpIHNyYyE6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZSE6IG51bWJlcjtcbiAgQElucHV0KCkgZXJyb3IhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VIdHRwID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByZXZpZXdTcmMhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpZXdNb2RhbE9wdGlvbnMhOiBNb2RhbE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbWdFbDogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4sXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZVxuICApIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdpbWFnZScsIHsgc2l6ZTogNjQsIGVycm9yOiBgLi9hc3NldHMvaW1nL2xvZ28uc3ZnYCB9KTtcbiAgICB0aGlzLmltZ0VsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNpemUsIGltZ0VsIH0gPSB0aGlzO1xuICAgIGltZ0VsLmhlaWdodCA9IHNpemU7XG4gICAgaW1nRWwud2lkdGggPSBzaXplO1xuXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0U3JjKHRoaXMuc3JjLCB0cnVlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IHNyYyA9PiAodGhpcy5pbWdFbC5zcmMgPSBzcmMpLFxuICAgICAgICBlcnJvcjogKCkgPT4gdGhpcy5zZXRFcnJvcigpXG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3JjKGRhdGE6IHN0cmluZywgaXNTaXplOiBib29sZWFuKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCB7IHNpemUsIHVzZUh0dHAgfSA9IHRoaXM7XG4gICAgaWYgKHVzZUh0dHApIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEJ5SHR0cChkYXRhKTtcbiAgICB9XG4gICAgaWYgKGlzU2l6ZSAmJiBkYXRhLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBpbWdTaXplID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPSBpbWdTaXplID09PSAnMCcgfHwgK2ltZ1NpemUgIT09IHNpemUgPyBzaXplLnRvU3RyaW5nKCkgOiBpbWdTaXplO1xuICAgICAgZGF0YSA9IGFyci5qb2luKCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKGRhdGEucmVwbGFjZSgvXig/Omh0dHBzPzopL2ksICcnKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gRXJyb3IoYE5vdCBzdXBwb3J0ZWRgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8c3RyaW5nPikgPT4ge1xuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5nZXQodXJsLCBudWxsLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gb2JzZXJ2ZXIubmV4dChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IG9ic2VydmVyLmVycm9yKGBDYW4ndCByZWFkZXIgaW1hZ2UgZGF0YSBieSAke3VybH1gKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6ICgpID0+IG9ic2VydmVyLmVycm9yKGBDYW4ndCBhY2Nlc3MgcmVtb3RlIHVybCAke3VybH1gKVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKTogdm9pZCB7XG4gICAgY29uc3QgeyBpbWdFbCwgZXJyb3IgfSA9IHRoaXM7XG4gICAgaW1nRWwub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNyYyA9IGVycm9yO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIGltZ0VsLnNyYyA9IGVycm9yO1xuICB9XG5cbiAgb3BlbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJldmlld1NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmdldFNyYyh0aGlzLnByZXZpZXdTcmMsIGZhbHNlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gISF3KSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShzcmMgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsLmNyZWF0ZSh7XG4gICAgICAgICAgbnpUaXRsZTogdW5kZWZpbmVkLFxuICAgICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgICAgIG56Q29udGVudDogYDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCIke3NyY31cIiAvPmAsXG4gICAgICAgICAgLi4udGhpcy5wcmV2aWV3TW9kYWxPcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==