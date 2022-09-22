import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs';
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
        catch { }
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
                value = value.substring(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((_o, item) => item, {});
    }
    setDisabled(status) {
        const el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    async _click(ev) {
        if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(await this.pre(ev)))) {
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
            body: this.httpBody
        })
            .pipe(finalize(() => this.setDisabled(false)))
            .subscribe({
            next: (res) => {
                if (res.status !== 200 || res.body.size <= 0) {
                    this.error.emit(res);
                    return;
                }
                const disposition = this.getDisposition(res.headers.get('content-disposition'));
                let fileName = this.fileName;
                if (typeof fileName === 'function')
                    fileName = fileName(res);
                fileName =
                    fileName ||
                        disposition[`filename*`] ||
                        disposition[`filename`] ||
                        res.headers.get('filename') ||
                        res.headers.get('x-filename');
                saveAs(res.body, decodeURI(fileName));
                this.success.emit(res);
            },
            error: err => this.error.emit(err)
        });
    }
}
DownFileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DownFileDirective, deps: [{ token: i0.ElementRef }, { token: i1._HttpClient }], target: i0.ɵɵFactoryTarget.Directive });
DownFileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: DownFileDirective, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DownFileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[down-file]',
                    exportAs: 'downFile',
                    host: {
                        '(click)': '_click($event)'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1._HttpClient }]; }, propDecorators: { httpData: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBWXBDLE1BQU0sT0FBTyxpQkFBaUI7SUF5QjVCLFlBQW9CLEVBQWlDLEVBQVUsS0FBa0I7UUFBN0QsT0FBRSxHQUFGLEVBQUUsQ0FBK0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBeEJ6RSx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHZCxlQUFVLEdBQVcsS0FBSyxDQUFDO1FBSTlCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNqRCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQWlCdkQsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSTtZQUNGLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3JDO1FBQUMsTUFBTSxHQUFFO1FBQ1YsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN6QixFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUF2Qk8sY0FBYyxDQUFDLElBQW1CO1FBQ3hDLE1BQU0sR0FBRyxHQUFrQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQzth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QVUsQ0FBQzt3QkFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO3dCQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLEVBQUUsU0FBUyxDQUFDLFFBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ25DLENBQUMsQ0FBQztJQUNQLENBQUM7OzhHQTdFVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQVA3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxnQkFBZ0I7cUJBQzVCO2lCQUNGOzJIQUdxQixRQUFRO3NCQUEzQixLQUFLO3VCQUFDLFdBQVc7Z0JBQ0UsUUFBUTtzQkFBM0IsS0FBSzt1QkFBQyxXQUFXO2dCQUNJLFVBQVU7c0JBQS9CLEtBQUs7dUJBQUMsYUFBYTtnQkFDRCxPQUFPO3NCQUF6QixLQUFLO3VCQUFDLFVBQVU7Z0JBQ0csUUFBUTtzQkFBM0IsS0FBSzt1QkFBQyxXQUFXO2dCQUNULEdBQUc7c0JBQVgsS0FBSztnQkFDYSxPQUFPO3NCQUF6QixNQUFNO2dCQUNZLEtBQUs7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBleHBvcnRBczogJ2Rvd25GaWxlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IHRydWU7XG4gIEBJbnB1dCgnaHR0cC1kYXRhJykgaHR0cERhdGE6IE56U2FmZUFueTtcbiAgQElucHV0KCdodHRwLWJvZHknKSBodHRwQm9keTogTnpTYWZlQW55O1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIEBJbnB1dCgnaHR0cC11cmwnKSBodHRwVXJsITogc3RyaW5nO1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lPzogc3RyaW5nIHwgKChyZXA6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgcHJlPzogKGV2OiBNb3VzZUV2ZW50KSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBwcml2YXRlIGdldERpc3Bvc2l0aW9uKGRhdGE6IHN0cmluZyB8IG51bGwpOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IGFycjogQXJyYXk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChfbywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD4sIHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50KSB7XG4gICAgbGV0IGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gISFuZXcgQmxvYigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkID0gaXNGaWxlU2F2ZXJTdXBwb3J0ZWQ7XG4gICAgaWYgKCFpc0ZpbGVTYXZlclN1cHBvcnRlZCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkb3duLWZpbGVfX25vdC1zdXBwb3J0YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICBlbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oYGRvd24tZmlsZV9fZGlzYWJsZWRgKTtcbiAgfVxuXG4gIGFzeW5jIF9jbGljayhldjogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pc0ZpbGVTYXZlclN1cHBvcnRlZCB8fCAodHlwZW9mIHRoaXMucHJlID09PSAnZnVuY3Rpb24nICYmICEoYXdhaXQgdGhpcy5wcmUoZXYpKSkpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICB0aGlzLl9odHRwXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgICBib2R5OiB0aGlzLmh0dHBCb2R5XG4gICAgICB9KVxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gdGhpcy5zZXREaXNhYmxlZChmYWxzZSkpKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkhLnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uID0gdGhpcy5nZXREaXNwb3NpdGlvbihyZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSk7XG4gICAgICAgICAgbGV0IGZpbGVOYW1lID0gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVOYW1lID09PSAnZnVuY3Rpb24nKSBmaWxlTmFtZSA9IGZpbGVOYW1lKHJlcyk7XG4gICAgICAgICAgZmlsZU5hbWUgPVxuICAgICAgICAgICAgZmlsZU5hbWUgfHxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZSpgXSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHxcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCd4LWZpbGVuYW1lJyk7XG4gICAgICAgICAgc2F2ZUFzKHJlcy5ib2R5ISwgZGVjb2RlVVJJKGZpbGVOYW1lIGFzIHN0cmluZykpO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBlcnIgPT4gdGhpcy5lcnJvci5lbWl0KGVycilcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=