import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, of, throwError } from 'rxjs';
import { filter, finalize, take } from 'rxjs/operators';
/**
 * @deprecated Will be removed in 13.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
 */
let ImageDirective = class ImageDirective {
    constructor(el, configSrv, http, platform, modal) {
        this.http = http;
        this.platform = platform;
        this.modal = modal;
        this.useHttp = false;
        this.inited = false;
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
            .pipe(untilDestroyed(this), take(1))
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
                .pipe(untilDestroyed(this), take(1), finalize(() => observer.complete()))
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
            .pipe(untilDestroyed(this), filter(w => !!w), take(1))
            .subscribe(src => {
            this.modal.create(Object.assign({ nzTitle: undefined, nzFooter: null, nzContent: `<img class="img-fluid" src="${src}" />` }, this.previewModalOptions));
        });
    }
};
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
ImageDirective = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [ElementRef,
        AlainConfigService,
        _HttpClient,
        Platform,
        NzModalService])
], ImageDirective);
export { ImageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBa0QsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhEOztHQUVHO0lBVVUsY0FBYyxTQUFkLGNBQWM7SUFjekIsWUFDRSxFQUFnQyxFQUNoQyxTQUE2QixFQUNyQixJQUFpQixFQUNqQixRQUFrQixFQUNsQixLQUFxQjtRQUZyQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFaTixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFVckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUs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SUFBSSxDQUFDLEVBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUNmLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLFFBQVEsRUFBRSxJQUFJLEVBQ2QsU0FBUyxFQUFFLCtCQUErQixHQUFHLE1BQU0sSUFDaEQsSUFBSSxDQUFDLG1CQUFtQixFQUMzQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTs7WUExSUEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxjQUFjO29CQUN6QixlQUFlLEVBQUUsWUFBWTtpQkFDOUI7YUFDRjs7OztZQXBCbUIsVUFBVTtZQUVyQixrQkFBa0I7WUFEbEIsV0FBVztZQUZYLFFBQVE7WUFNTSxjQUFjOzs7a0JBb0JsQyxLQUFLLFNBQUMsTUFBTTttQkFDWixLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7O0FBSmtCO0lBQWQsV0FBVyxFQUFFOzs0Q0FBYztBQUVaO0lBQWYsWUFBWSxFQUFFOzsrQ0FBaUI7QUFQOUIsY0FBYztJQVQxQixZQUFZLEVBQUU7cUNBd0JQLFVBQVU7UUFDSCxrQkFBa0I7UUFDZixXQUFXO1FBQ1AsUUFBUTtRQUNYLGNBQWM7R0FuQnBCLGNBQWMsQ0FrSTFCO1NBbElZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBVbnRpbERlc3Ryb3ksIHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQG5nbmVhdC91bnRpbC1kZXN0cm95JztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucywgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTMuMC4wLCBQbHMgdXNlZCBbbnotaW1hZ2VdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ltYWdlL2VuKSBpbnN0ZWFkLCBmb3IgZXhhbXBsZXM6XG4gKi9cbkBVbnRpbERlc3Ryb3koKVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW19zcmNdJyxcbiAgZXhwb3J0QXM6ICdfc3JjJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29wZW4oJGV2ZW50KScsXG4gICAgJ1tjbGFzcy5wb2ludF0nOiBgcHJldmlld1NyY2AsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91c2VIdHRwOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZUh0dHAgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJldmlld1NyYyE6IHN0cmluZztcbiAgQElucHV0KCkgcHJldmlld01vZGFsT3B0aW9ucyE6IE1vZGFsT3B0aW9ucztcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmPEhUTUxJbWFnZUVsZW1lbnQ+LFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsXG4gICkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ2ltYWdlJywgeyBzaXplOiA2NCwgZXJyb3I6IGAuL2Fzc2V0cy9pbWcvbG9nby5zdmdgIH0pO1xuICAgIHRoaXMuaW1nRWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2l6ZSwgaW1nRWwgfSA9IHRoaXM7XG4gICAgaW1nRWwuaGVpZ2h0ID0gc2l6ZTtcbiAgICBpbWdFbC53aWR0aCA9IHNpemU7XG5cbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTcmModGhpcy5zcmMsIHRydWUpXG4gICAgICAucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHNyYyA9PiAodGhpcy5pbWdFbC5zcmMgPSBzcmMpLFxuICAgICAgICAoKSA9PiB0aGlzLnNldEVycm9yKCksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTcmMoZGF0YTogc3RyaW5nLCBpc1NpemU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHsgc2l6ZSwgdXNlSHR0cCB9ID0gdGhpcztcbiAgICBpZiAodXNlSHR0cCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlIdHRwKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoaXNTaXplICYmIGRhdGEuaW5jbHVkZXMoJ3Fsb2dvLmNuJykpIHtcbiAgICAgIGNvbnN0IGFyciA9IGRhdGEuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGltZ1NpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IGltZ1NpemUgPT09ICcwJyB8fCAraW1nU2l6ZSAhPT0gc2l6ZSA/IHNpemUudG9TdHJpbmcoKSA6IGltZ1NpemU7XG4gICAgICBkYXRhID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YoZGF0YS5yZXBsYWNlKC9eKD86aHR0cHM/OikvaSwgJycpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihgTm90IHN1cHBvcnRlZGApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPHN0cmluZz4pID0+IHtcbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KHVybCwgbnVsbCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB1bnRpbERlc3Ryb3llZCh0aGlzKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IG9ic2VydmVyLmNvbXBsZXRlKCkpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gb2JzZXJ2ZXIubmV4dChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IG9ic2VydmVyLmVycm9yKGBDYW4ndCByZWFkZXIgaW1hZ2UgZGF0YSBieSAke3VybH1gKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4gb2JzZXJ2ZXIuZXJyb3IoYENhbid0IGFjY2VzcyByZW1vdGUgdXJsICR7dXJsfWApLFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zLCB0eXBlZGVmXG4gICAgaW1nRWwub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNyYyA9IGVycm9yO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIGltZ0VsLnNyYyA9IGVycm9yO1xuICB9XG5cbiAgb3BlbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJldmlld1NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmdldFNyYyh0aGlzLnByZXZpZXdTcmMsIGZhbHNlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHVudGlsRGVzdHJveWVkKHRoaXMpLFxuICAgICAgICBmaWx0ZXIodyA9PiAhIXcpLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShzcmMgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsLmNyZWF0ZSh7XG4gICAgICAgICAgbnpUaXRsZTogdW5kZWZpbmVkLFxuICAgICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgICAgIG56Q29udGVudDogYDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCIke3NyY31cIiAvPmAsXG4gICAgICAgICAgLi4udGhpcy5wcmV2aWV3TW9kYWxPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=