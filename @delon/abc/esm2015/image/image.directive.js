import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, of, Subject, throwError } from 'rxjs';
import { filter, finalize, take, takeUntil } from 'rxjs/operators';
/**
 * @deprecated Will be removed in 13.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
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
    InputNumber()
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean()
], ImageDirective.prototype, "useHttp", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBNkQsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQWdCLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FOztHQUVHO0FBU0gsTUFBTSxPQUFPLGNBQWM7SUFlekIsWUFDRSxFQUFnQyxFQUNoQyxTQUE2QixFQUNyQixJQUFpQixFQUNqQixRQUFrQixFQUNsQixLQUFxQjtRQUZyQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFiTixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVNyQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVB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Q0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0saUJBQ2YsT0FBTyxFQUFFLFNBQVMsRUFDbEIsUUFBUSxFQUFFLElBQUksRUFDZCxTQUFTLEVBQUUsK0JBQStCLEdBQUcsTUFBTSxJQUNoRCxJQUFJLENBQUMsbUJBQW1CLEVBQzNCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQS9JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLGNBQWM7b0JBQ3pCLGVBQWUsRUFBRSxZQUFZO2lCQUM5QjthQUNGOzs7WUFsQm1CLFVBQVU7WUFFckIsa0JBQWtCO1lBRGxCLFdBQVc7WUFGWCxRQUFRO1lBS00sY0FBYzs7O2tCQW1CbEMsS0FBSyxTQUFDLE1BQU07bUJBQ1osS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQ0FDTCxLQUFLOztBQUprQjtJQUFkLFdBQVcsRUFBRTs0Q0FBYztBQUVaO0lBQWYsWUFBWSxFQUFFOytDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpbmFsaXplLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEzLjAuMCwgUGxzIHVzZWQgW256LWltYWdlXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9pbWFnZS9lbikgaW5zdGVhZCwgZm9yIGV4YW1wbGVzOlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbX3NyY10nLFxuICBleHBvcnRBczogJ19zcmMnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb3BlbigkZXZlbnQpJyxcbiAgICAnW2NsYXNzLnBvaW50XSc6IGBwcmV2aWV3U3JjYCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdXNlSHR0cDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VIdHRwID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByZXZpZXdTcmMhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpZXdNb2RhbE9wdGlvbnMhOiBNb2RhbE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbWdFbDogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4sXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZSxcbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnaW1hZ2UnLCB7IHNpemU6IDY0LCBlcnJvcjogYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2AgfSk7XG4gICAgdGhpcy5pbWdFbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzaXplLCBpbWdFbCB9ID0gdGhpcztcbiAgICBpbWdFbC5oZWlnaHQgPSBzaXplO1xuICAgIGltZ0VsLndpZHRoID0gc2l6ZTtcblxuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNyYyh0aGlzLnNyYywgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHNyYyA9PiAodGhpcy5pbWdFbC5zcmMgPSBzcmMpLFxuICAgICAgICAoKSA9PiB0aGlzLnNldEVycm9yKCksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTcmMoZGF0YTogc3RyaW5nLCBpc1NpemU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHsgc2l6ZSwgdXNlSHR0cCB9ID0gdGhpcztcbiAgICBpZiAodXNlSHR0cCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlIdHRwKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoaXNTaXplICYmIGRhdGEuaW5jbHVkZXMoJ3Fsb2dvLmNuJykpIHtcbiAgICAgIGNvbnN0IGFyciA9IGRhdGEuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGltZ1NpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IGltZ1NpemUgPT09ICcwJyB8fCAraW1nU2l6ZSAhPT0gc2l6ZSA/IHNpemUudG9TdHJpbmcoKSA6IGltZ1NpemU7XG4gICAgICBkYXRhID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YoZGF0YS5yZXBsYWNlKC9eKD86aHR0cHM/OikvaSwgJycpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihgTm90IHN1cHBvcnRlZGApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPHN0cmluZz4pID0+IHtcbiAgICAgIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KHVybCwgbnVsbCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChibG9iOiBCbG9iKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IG9ic2VydmVyLm5leHQocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiBvYnNlcnZlci5lcnJvcihgQ2FuJ3QgcmVhZGVyIGltYWdlIGRhdGEgYnkgJHt1cmx9YCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IG9ic2VydmVyLmVycm9yKGBDYW4ndCBhY2Nlc3MgcmVtb3RlIHVybCAke3VybH1gKSxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKTogdm9pZCB7XG4gICAgY29uc3QgeyBpbWdFbCwgZXJyb3IgfSA9IHRoaXM7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9ucywgdHlwZWRlZlxuICAgIGltZ0VsLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5zcmMgPSBlcnJvcjtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICBpbWdFbC5zcmMgPSBlcnJvcjtcbiAgfVxuXG4gIG9wZW4oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByZXZpZXdTcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5nZXRTcmModGhpcy5wcmV2aWV3U3JjLCBmYWxzZSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih3ID0+ICEhdyksXG4gICAgICAgIHRha2UoMSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHNyYyA9PiB7XG4gICAgICAgIHRoaXMubW9kYWwuY3JlYXRlKHtcbiAgICAgICAgICBuelRpdGxlOiB1bmRlZmluZWQsXG4gICAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgICAgbnpDb250ZW50OiBgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cIiR7c3JjfVwiIC8+YCxcbiAgICAgICAgICAuLi50aGlzLnByZXZpZXdNb2RhbE9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==