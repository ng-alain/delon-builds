import { __awaiter } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
export class DownFileDirective {
    constructor(el, _http) {
        this.el = el;
        this._http = _http;
        this.isFileSaverSupported = true;
        this.httpMethod = 'get';
        this.success = new EventEmitter();
        this.error = new EventEmitter();
        let isFileSaverSupported = false;
        try {
            isFileSaverSupported = !!new Blob();
        }
        catch (_a) { }
        this.isFileSaverSupported = isFileSaverSupported;
        if (!isFileSaverSupported) {
            el.nativeElement.classList.add(`down-file__not-support`);
        }
    }
    getDisposition(data) {
        const arr = (data || '')
            .split(';')
            .filter(i => i.includes('='))
            .map(v => {
            const strArr = v.split('=');
            const utfId = `UTF-8''`;
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((_o, item) => item, {});
    }
    setDisabled(status) {
        const el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    _click(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(yield this.pre(ev)))) {
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            this.setDisabled(true);
            this._http
                .request(this.httpMethod, this.httpUrl, {
                params: this.httpData || {},
                responseType: 'blob',
                observe: 'response',
                body: this.httpBody,
            })
                .subscribe((res) => {
                if (res.status !== 200 || res.body.size <= 0) {
                    this.error.emit(res);
                    return;
                }
                const disposition = this.getDisposition(res.headers.get('content-disposition'));
                let fileName = this.fileName;
                if (typeof fileName === 'function')
                    fileName = fileName(res);
                fileName =
                    fileName || disposition[`filename*`] || disposition[`filename`] || res.headers.get('filename') || res.headers.get('x-filename');
                saveAs(res.body, decodeURI(fileName));
                this.success.emit(res);
            }, err => this.error.emit(err), () => this.setDisabled(false));
        });
    }
}
/** @nocollapse */ DownFileDirective.ɵfac = function DownFileDirective_Factory(t) { return new (t || DownFileDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1._HttpClient)); };
/** @nocollapse */ DownFileDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: DownFileDirective, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownFileDirective, [{
        type: Directive,
        args: [{
                selector: '[down-file]',
                exportAs: 'downFile',
                host: {
                    '(click)': '_click($event)',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1._HttpClient }]; }, { httpData: [{
            type: Input,
            args: ['http-data']
        }], httpBody: [{
            type: Input,
            args: ['http-body']
        }], httpMethod: [{
            type: Input,
            args: ['http-method']
        }], httpUrl: [{
            type: Input,
            args: ['http-url']
        }], fileName: [{
            type: Input,
            args: ['file-name']
        }], pre: [{
            type: Input
        }], success: [{
            type: Output
        }], error: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFVcEMsTUFBTSxPQUFPLGlCQUFpQjtJQXlCNUIsWUFBb0IsRUFBaUMsRUFBVSxLQUFrQjtRQUE3RCxPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7UUF4QnpFLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUdkLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFJOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQ2pELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBaUJqRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJO1lBQ0Ysb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckM7UUFBQyxXQUFNLEdBQUU7UUFDVixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQXZCTyxjQUFjLENBQUMsSUFBbUI7UUFDeEMsTUFBTSxHQUFHLEdBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxH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QUFZLENBQUMsQ0FBQztnQkFDbEksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLEVBQUUsU0FBUyxDQUFDLFFBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDM0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztRQUNOLENBQUM7S0FBQTs7cUdBekVVLGlCQUFpQjsrRkFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FQN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCO2FBQ0Y7dUZBR3FCLFFBQVE7a0JBQTNCLEtBQUs7bUJBQUMsV0FBVztZQUNFLFFBQVE7a0JBQTNCLEtBQUs7bUJBQUMsV0FBVztZQUNJLFVBQVU7a0JBQS9CLEtBQUs7bUJBQUMsYUFBYTtZQUNELE9BQU87a0JBQXpCLEtBQUs7bUJBQUMsVUFBVTtZQUNHLFFBQVE7a0JBQTNCLEtBQUs7bUJBQUMsV0FBVztZQUNULEdBQUc7a0JBQVgsS0FBSztZQUNhLE9BQU87a0JBQXpCLE1BQU07WUFDWSxLQUFLO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBleHBvcnRBczogJ2Rvd25GaWxlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRG93bkZpbGVEaXJlY3RpdmUge1xuICBwcml2YXRlIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gdHJ1ZTtcbiAgQElucHV0KCdodHRwLWRhdGEnKSBodHRwRGF0YToge307XG4gIEBJbnB1dCgnaHR0cC1ib2R5JykgaHR0cEJvZHk6IHt9O1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIEBJbnB1dCgnaHR0cC11cmwnKSBodHRwVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgnZmlsZS1uYW1lJykgZmlsZU5hbWU6IHN0cmluZyB8ICgocmVwOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIHByZTogKGV2OiBNb3VzZUV2ZW50KSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGdldERpc3Bvc2l0aW9uKGRhdGE6IHN0cmluZyB8IG51bGwpOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IGFycjogQXJyYXk8e30+ID0gKGRhdGEgfHwgJycpXG4gICAgICAuc3BsaXQoJzsnKVxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cih1dGZJZC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoX28sIGl0ZW0pID0+IGl0ZW0sIHt9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCkge1xuICAgIGxldCBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9ICEhbmV3IEJsb2IoKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgdGhpcy5pc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGlzRmlsZVNhdmVyU3VwcG9ydGVkO1xuICAgIGlmICghaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgZG93bi1maWxlX19ub3Qtc3VwcG9ydGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWwuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgZWwuY2xhc3NMaXN0W3N0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSddKGBkb3duLWZpbGVfX2Rpc2FibGVkYCk7XG4gIH1cblxuICBhc3luYyBfY2xpY2soZXY6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgfHwgKHR5cGVvZiB0aGlzLnByZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhKGF3YWl0IHRoaXMucHJlKGV2KSkpKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgdGhpcy5faHR0cFxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgYm9keTogdGhpcy5odHRwQm9keSxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5IS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbiA9IHRoaXMuZ2V0RGlzcG9zaXRpb24ocmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJykpO1xuICAgICAgICAgIGxldCBmaWxlTmFtZSA9IHRoaXMuZmlsZU5hbWU7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlTmFtZSA9PT0gJ2Z1bmN0aW9uJykgZmlsZU5hbWUgPSBmaWxlTmFtZShyZXMpO1xuICAgICAgICAgIGZpbGVOYW1lID1cbiAgICAgICAgICAgIGZpbGVOYW1lIHx8IGRpc3Bvc2l0aW9uW2BmaWxlbmFtZSpgXSB8fCBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fCByZXMuaGVhZGVycy5nZXQoJ2ZpbGVuYW1lJykgfHwgcmVzLmhlYWRlcnMuZ2V0KCd4LWZpbGVuYW1lJyk7XG4gICAgICAgICAgc2F2ZUFzKHJlcy5ib2R5ISwgZGVjb2RlVVJJKGZpbGVOYW1lIGFzIHN0cmluZykpO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB0aGlzLmVycm9yLmVtaXQoZXJyKSxcbiAgICAgICAgKCkgPT4gdGhpcy5zZXREaXNhYmxlZChmYWxzZSksXG4gICAgICApO1xuICB9XG59XG4iXX0=