import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/cdk/platform";
export class ImageDirective {
    constructor(el, configSrv, http, platform) {
        this.http = http;
        this.platform = platform;
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
        const { size, imgEl, useHttp } = this;
        if (useHttp) {
            this.getByHttp();
            return;
        }
        let newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            const arr = newSrc.split('/');
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
    }
    getByHttp() {
        if (!this.platform.isBrowser) {
            return;
        }
        const { imgEl } = this;
        this.http.get(this.src, null, { responseType: 'blob' }).subscribe((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => (imgEl.src = reader.result);
            reader.onerror = () => this.setError();
            reader.readAsDataURL(blob);
        }, () => this.setError());
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
}
/** @nocollapse */ ImageDirective.ɵfac = function ImageDirective_Factory(t) { return new (t || ImageDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AlainConfigService), i0.ɵɵdirectiveInject(i2._HttpClient), i0.ɵɵdirectiveInject(i3.Platform)); };
/** @nocollapse */ ImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ImageDirective, selector: "[_src]", inputs: { src: ["_src", "src"], size: "size", error: "error", useHttp: "useHttp" }, exportAs: ["_src"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ImageDirective.prototype, "useHttp", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageDirective, [{
        type: Directive,
        args: [{
                selector: '[_src]',
                exportAs: '_src',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AlainConfigService }, { type: i2._HttpClient }, { type: i3.Platform }]; }, { src: [{
            type: Input,
            args: ['_src']
        }], size: [{
            type: Input
        }], error: [{
            type: Input
        }], useHttp: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBa0QsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFNN0YsTUFBTSxPQUFPLGNBQWM7SUFZekIsWUFBWSxFQUFnQyxFQUFFLFNBQTZCLEVBQVUsSUFBaUIsRUFBVSxRQUFrQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUx6RyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZEO1FBQ3ZFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRU8sTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN2RixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUMvRCxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUNELEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzlCLDBEQUEwRDtRQUMxRCxLQUFLLENBQUMsT0FBTyxHQUFHO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLFFBQVE7UUFDZCxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzsrRkFyRlUsY0FBYzs0RkFBZCxjQUFjO0FBS0Q7SUFBZCxXQUFXLEVBQUU7OzRDQUFjO0FBRVo7SUFBZixZQUFZLEVBQUU7OytDQUFpQjt1RkFQOUIsY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2FBQ2pCOytJQUtnQixHQUFHO2tCQUFqQixLQUFLO21CQUFDLE1BQU07WUFDVyxJQUFJO2tCQUEzQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tfc3JjXScsXG4gIGV4cG9ydEFzOiAnX3NyYycsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91c2VIdHRwOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCdfc3JjJykgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZUh0dHAgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmPEhUTUxJbWFnZUVsZW1lbnQ+LCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdpbWFnZScsIHsgc2l6ZTogNjQsIGVycm9yOiBgLi9hc3NldHMvaW1nL2xvZ28uc3ZnYCB9KTtcbiAgICB0aGlzLmltZ0VsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNpemUsIGltZ0VsIH0gPSB0aGlzO1xuICAgIGltZ0VsLmhlaWdodCA9IHNpemU7XG4gICAgaW1nRWwud2lkdGggPSBzaXplO1xuXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2l6ZSwgaW1nRWwsIHVzZUh0dHAgfSA9IHRoaXM7XG4gICAgaWYgKHVzZUh0dHApIHtcbiAgICAgIHRoaXMuZ2V0QnlIdHRwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1NyYyA9IHRoaXMuc3JjO1xuICAgIGlmIChuZXdTcmMuaW5jbHVkZXMoJ3Fsb2dvLmNuJykpIHtcbiAgICAgIGNvbnN0IGFyciA9IG5ld1NyYy5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgaW1nU2l6ZSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdID0gaW1nU2l6ZSA9PT0gJzAnIHx8ICtpbWdTaXplICE9PSBzaXplID8gc2l6ZS50b1N0cmluZygpIDogaW1nU2l6ZTtcbiAgICAgIG5ld1NyYyA9IGFyci5qb2luKCcvJyk7XG4gICAgfVxuXG4gICAgbmV3U3JjID0gbmV3U3JjLnJlcGxhY2UoL14oPzpodHRwcz86KS9pLCAnJyk7XG5cbiAgICBpbWdFbC5zcmMgPSBuZXdTcmM7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbWdFbCB9ID0gdGhpcztcbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc3JjLCBudWxsLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pLnN1YnNjcmliZShcbiAgICAgIChibG9iOiBCbG9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiAoaW1nRWwuc3JjID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHRoaXMuc2V0RXJyb3IoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICB9LFxuICAgICAgKCkgPT4gdGhpcy5zZXRFcnJvcigpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb25seS1hcnJvdy1mdW5jdGlvbnMsIHR5cGVkZWZcbiAgICBpbWdFbC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5vbmVycm9yID0gbnVsbDtcbiAgICAgIHRoaXMuc3JjID0gZXJyb3I7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RXJyb3IoKTogdm9pZCB7XG4gICAgY29uc3QgeyBpbWdFbCwgZXJyb3IgfSA9IHRoaXM7XG4gICAgaW1nRWwuc3JjID0gZXJyb3I7XG4gIH1cbn1cbiJdfQ==