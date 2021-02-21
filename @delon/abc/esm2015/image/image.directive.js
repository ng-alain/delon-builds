import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, of, Subject, throwError } from 'rxjs';
import { filter, finalize, take, takeUntil } from 'rxjs/operators';
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
            .subscribe(src => (this.imgEl.src = src), () => this.setError());
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
            return throwError(`Not supported`);
        }
        return new Observable((observer) => {
            this.http
                .get(url, null, { responseType: 'blob' })
                .pipe(takeUntil(this.destroy$), take(1), finalize(() => observer.complete()))
                .subscribe((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => observer.next(reader.result);
                reader.onerror = () => observer.error(`Can't reader image data by ${url}`);
                reader.readAsDataURL(blob);
            }, () => observer.error(`Can't access remote url ${url}`));
        });
    }
    updateError() {
        const { imgEl, error } = this;
        // tslint:disable-next-line: only-arrow-functions, typedef
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
            this.modal.create(Object.assign({ nzTitle: undefined, nzFooter: null, nzContent: `<img class="img-fluid" src="${src}" />` }, this.previewModalOptions));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: '_src',
                host: {
                    '(click)': 'open($event)',
                    '[class.point]': `previewSrc`,
                },
            },] }
];
/** @nocollapse */
ImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AlainConfigService },
    { type: _HttpClient },
    { type: Platform },
    { type: NzModalService }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }],
    useHttp: [{ type: Input }],
    previewSrc: [{ type: Input }],
    previewModalOptions: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ImageDirective.prototype, "useHttp", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNkQsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVW5FLE1BQU0sT0FBTyxjQUFjO0lBZXpCLFlBQ0UsRUFBZ0MsRUFDaEMsU0FBNkIsRUFDckIsSUFBaUIsRUFDakIsUUFBa0IsRUFDbEIsS0FBcUI7UUFGckIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBYk4sWUFBTyxHQUFHLEtBQUssQ0FBQztRQUlqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFTckMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFF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LFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUNmLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLFFBQVEsRUFBRSxJQUFJLEVBQ2QsU0FBUyxFQUFFLCtCQUErQixHQUFHLE1BQU0sSUFDaEQsSUFBSSxDQUFDLG1CQUFtQixFQUMzQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUEvSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxjQUFjO29CQUN6QixlQUFlLEVBQUUsWUFBWTtpQkFDOUI7YUFDRjs7OztZQWZtQixVQUFVO1lBRXJCLGtCQUFrQjtZQURsQixXQUFXO1lBRlgsUUFBUTtZQUtNLGNBQWM7OztrQkFnQmxDLEtBQUssU0FBQyxNQUFNO21CQUNaLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7QUFKa0I7SUFBZCxXQUFXLEVBQUU7OzRDQUFjO0FBRVo7SUFBZixZQUFZLEVBQUU7OytDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpbmFsaXplLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tfc3JjXScsXG4gIGV4cG9ydEFzOiAnX3NyYycsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvcGVuKCRldmVudCknLFxuICAgICdbY2xhc3MucG9pbnRdJzogYHByZXZpZXdTcmNgLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91c2VIdHRwOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZUh0dHAgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJldmlld1NyYyE6IHN0cmluZztcbiAgQElucHV0KCkgcHJldmlld01vZGFsT3B0aW9ucyE6IE1vZGFsT3B0aW9ucztcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZjxIVE1MSW1hZ2VFbGVtZW50PixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbW9kYWw6IE56TW9kYWxTZXJ2aWNlLFxuICApIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdpbWFnZScsIHsgc2l6ZTogNjQsIGVycm9yOiBgLi9hc3NldHMvaW1nL2xvZ28uc3ZnYCB9KTtcbiAgICB0aGlzLmltZ0VsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNpemUsIGltZ0VsIH0gPSB0aGlzO1xuICAgIGltZ0VsLmhlaWdodCA9IHNpemU7XG4gICAgaW1nRWwud2lkdGggPSBzaXplO1xuXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0U3JjKHRoaXMuc3JjLCB0cnVlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgc3JjID0+ICh0aGlzLmltZ0VsLnNyYyA9IHNyYyksXG4gICAgICAgICgpID0+IHRoaXMuc2V0RXJyb3IoKSxcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFNyYyhkYXRhOiBzdHJpbmcsIGlzU2l6ZTogYm9vbGVhbik6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgeyBzaXplLCB1c2VIdHRwIH0gPSB0aGlzO1xuICAgIGlmICh1c2VIdHRwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRCeUh0dHAoZGF0YSk7XG4gICAgfVxuICAgIGlmIChpc1NpemUgJiYgZGF0YS5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgaW1nU2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID0gaW1nU2l6ZSA9PT0gJzAnIHx8ICtpbWdTaXplICE9PSBzaXplID8gc2l6ZS50b1N0cmluZygpIDogaW1nU2l6ZTtcbiAgICAgIGRhdGEgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIHJldHVybiBvZihkYXRhLnJlcGxhY2UoL14oPzpodHRwcz86KS9pLCAnJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGBOb3Qgc3VwcG9ydGVkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8c3RyaW5nPikgPT4ge1xuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5nZXQodXJsLCBudWxsLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKCkpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gb2JzZXJ2ZXIubmV4dChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IG9ic2VydmVyLmVycm9yKGBDYW4ndCByZWFkZXIgaW1hZ2UgZGF0YSBieSAke3VybH1gKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4gb2JzZXJ2ZXIuZXJyb3IoYENhbid0IGFjY2VzcyByZW1vdGUgdXJsICR7dXJsfWApLFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zLCB0eXBlZGVmXG4gICAgaW1nRWwub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNyYyA9IGVycm9yO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIGltZ0VsLnNyYyA9IGVycm9yO1xuICB9XG5cbiAgb3BlbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJldmlld1NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmdldFNyYyh0aGlzLnByZXZpZXdTcmMsIGZhbHNlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gISF3KSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoc3JjID0+IHtcbiAgICAgICAgdGhpcy5tb2RhbC5jcmVhdGUoe1xuICAgICAgICAgIG56VGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgICBuekNvbnRlbnQ6IGA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJHtzcmN9XCIgLz5gLFxuICAgICAgICAgIC4uLnRoaXMucHJldmlld01vZGFsT3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19