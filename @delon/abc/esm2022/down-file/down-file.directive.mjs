import { Directive, ElementRef, EventEmitter, Input, Output, inject } from '@angular/core';
import { finalize } from 'rxjs';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@delon/theme';
import * as i0 from "@angular/core";
let isFileSaverSupported = false;
try {
    isFileSaverSupported = !!new Blob();
}
catch { }
export class DownFileDirective {
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
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this._http = inject(_HttpClient);
        this.httpMethod = 'get';
        this.success = new EventEmitter();
        this.error = new EventEmitter();
        if (!isFileSaverSupported) {
            this.el.classList.add(`down-file__not-support`);
        }
    }
    setDisabled(status) {
        const el = this.el;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    async _click(ev) {
        if (!isFileSaverSupported || (typeof this.pre === 'function' && !(await this.pre(ev)))) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DownFileDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: DownFileDirective, isStandalone: true, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DownFileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[down-file]',
                    exportAs: 'downFile',
                    host: {
                        '(click)': '_click($event)'
                    },
                    standalone: true
                }]
        }], ctorParameters: () => [], propDecorators: { httpData: [{
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
                args: [{ alias: 'http-url', required: true }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVoQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRzNDLElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLElBQUksQ0FBQztJQUNILG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3RDLENBQUM7QUFBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO0FBVVYsTUFBTSxPQUFPLGlCQUFpQjtJQVlwQixjQUFjLENBQUMsSUFBbUI7UUFDeEMsTUFBTSxHQUFHLEdBQWtDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNwRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFB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bW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxubGV0IGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gZmFsc2U7XG50cnkge1xuICBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9ICEhbmV3IEJsb2IoKTtcbn0gY2F0Y2gge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBleHBvcnRBczogJ2Rvd25GaWxlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygkZXZlbnQpJ1xuICB9LFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBfaHR0cCA9IGluamVjdChfSHR0cENsaWVudCk7XG4gIEBJbnB1dCgnaHR0cC1kYXRhJykgaHR0cERhdGE6IE56U2FmZUFueTtcbiAgQElucHV0KCdodHRwLWJvZHknKSBodHRwQm9keTogTnpTYWZlQW55O1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIEBJbnB1dCh7IGFsaWFzOiAnaHR0cC11cmwnLCByZXF1aXJlZDogdHJ1ZSB9KSBodHRwVXJsITogc3RyaW5nO1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lPzogc3RyaW5nIHwgKChyZXA6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgcHJlPzogKGV2OiBNb3VzZUV2ZW50KSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBwcml2YXRlIGdldERpc3Bvc2l0aW9uKGRhdGE6IHN0cmluZyB8IG51bGwpOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IGFycjogQXJyYXk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChfbywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFpc0ZpbGVTYXZlclN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKGBkb3duLWZpbGVfX25vdC1zdXBwb3J0YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgZWwuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgZWwuY2xhc3NMaXN0W3N0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSddKGBkb3duLWZpbGVfX2Rpc2FibGVkYCk7XG4gIH1cblxuICBhc3luYyBfY2xpY2soZXY6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWlzRmlsZVNhdmVyU3VwcG9ydGVkIHx8ICh0eXBlb2YgdGhpcy5wcmUgPT09ICdmdW5jdGlvbicgJiYgIShhd2FpdCB0aGlzLnByZShldikpKSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldERpc2FibGVkKHRydWUpO1xuICAgIHRoaXMuX2h0dHBcbiAgICAgIC5yZXF1ZXN0KHRoaXMuaHR0cE1ldGhvZCwgdGhpcy5odHRwVXJsLCB7XG4gICAgICAgIHBhcmFtczogdGhpcy5odHRwRGF0YSB8fCB7fSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgICAgIGJvZHk6IHRoaXMuaHR0cEJvZHlcbiAgICAgIH0pXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB0aGlzLnNldERpc2FibGVkKGZhbHNlKSkpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCB8fCByZXMuYm9keSEuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQocmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGlzcG9zaXRpb24gPSB0aGlzLmdldERpc3Bvc2l0aW9uKHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1kaXNwb3NpdGlvbicpKTtcbiAgICAgICAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmZpbGVOYW1lO1xuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU5hbWUgPT09ICdmdW5jdGlvbicpIGZpbGVOYW1lID0gZmlsZU5hbWUocmVzKTtcbiAgICAgICAgICBmaWxlTmFtZSA9XG4gICAgICAgICAgICBmaWxlTmFtZSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHkhLCBkZWNvZGVVUkkoZmlsZU5hbWUgYXMgc3RyaW5nKSk7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQocmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGVyciA9PiB0aGlzLmVycm9yLmVtaXQoZXJyKVxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==