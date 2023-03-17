import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
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
DownFileDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: DownFileDirective, deps: [{ token: i0.ElementRef }, { token: i1._HttpClient }], target: i0.ɵɵFactoryTarget.Directive });
DownFileDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: DownFileDirective, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: DownFileDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBWXBDLE1BQU0sT0FBTyxpQkFBaUI7SUFXcEIsY0FBYyxDQUFDLElBQW1CO1FBQ3hDLE1BQU0sR0FBRyxHQUFrQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1AsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxZQUFvQixFQUFpQyxFQUFVLEtBQWtCO1FBQTdELE9BQUUsR0FBRixFQUFFLENBQStCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQXhCekUseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBR2QsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUk5QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFpQnZELElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUk7WUFDRixvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUFDLE1BQU0sR0FBRTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQWU7UUFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsRUFBRSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFjO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNGLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSzthQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtZQUMzQixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUUsVUFBVTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQzthQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzdDLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLEdBQXVCLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixPQUFPO2lCQUNSO2dCQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM3QixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVU7b0JBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsUUFBUTtvQkFDTixRQUFRO3dCQUNSLFdBQVcsQ0FBQyxXQUFXLENBQUM7d0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUM7d0JBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSyxFQUFFLFNBQVMsQ0FBQyxRQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs4R0E3RVUsaUJBQWlCO2tHQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFQN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsZ0JBQWdCO3FCQUM1QjtpQkFDRjsySEFHcUIsUUFBUTtzQkFBM0IsS0FBSzt1QkFBQyxXQUFXO2dCQUNFLFFBQVE7c0JBQTNCLEtBQUs7dUJBQUMsV0FBVztnQkFDSSxVQUFVO3NCQUEvQixLQUFLO3VCQUFDLGFBQWE7Z0JBQ0QsT0FBTztzQkFBekIsS0FBSzt1QkFBQyxVQUFVO2dCQUNHLFFBQVE7c0JBQTNCLEtBQUs7dUJBQUMsV0FBVztnQkFDVCxHQUFHO3NCQUFYLEtBQUs7Z0JBQ2EsT0FBTztzQkFBekIsTUFBTTtnQkFDWSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyxcbiAgZXhwb3J0QXM6ICdkb3duRmlsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEb3duRmlsZURpcmVjdGl2ZSB7XG4gIHByaXZhdGUgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSB0cnVlO1xuICBASW5wdXQoJ2h0dHAtZGF0YScpIGh0dHBEYXRhOiBOelNhZmVBbnk7XG4gIEBJbnB1dCgnaHR0cC1ib2R5JykgaHR0cEJvZHk6IE56U2FmZUFueTtcbiAgQElucHV0KCdodHRwLW1ldGhvZCcpIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICBASW5wdXQoJ2h0dHAtdXJsJykgaHR0cFVybCE6IHN0cmluZztcbiAgQElucHV0KCdmaWxlLW5hbWUnKSBmaWxlTmFtZT86IHN0cmluZyB8ICgocmVwOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIHByZT86IChldjogTW91c2VFdmVudCkgPT4gUHJvbWlzZTxib29sZWFuPjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBSZXNwb25zZTxCbG9iPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBhcnI6IEFycmF5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0gKGRhdGEgfHwgJycpXG4gICAgICAuc3BsaXQoJzsnKVxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZyh1dGZJZC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoX28sIGl0ZW0pID0+IGl0ZW0sIHt9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCkge1xuICAgIGxldCBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9ICEhbmV3IEJsb2IoKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgdGhpcy5pc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGlzRmlsZVNhdmVyU3VwcG9ydGVkO1xuICAgIGlmICghaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgZG93bi1maWxlX19ub3Qtc3VwcG9ydGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWwuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgZWwuY2xhc3NMaXN0W3N0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSddKGBkb3duLWZpbGVfX2Rpc2FibGVkYCk7XG4gIH1cblxuICBhc3luYyBfY2xpY2soZXY6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgfHwgKHR5cGVvZiB0aGlzLnByZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhKGF3YWl0IHRoaXMucHJlKGV2KSkpKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgdGhpcy5faHR0cFxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgYm9keTogdGhpcy5odHRwQm9keVxuICAgICAgfSlcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMuc2V0RGlzYWJsZWQoZmFsc2UpKSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5IS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbiA9IHRoaXMuZ2V0RGlzcG9zaXRpb24ocmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJykpO1xuICAgICAgICAgIGxldCBmaWxlTmFtZSA9IHRoaXMuZmlsZU5hbWU7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlTmFtZSA9PT0gJ2Z1bmN0aW9uJykgZmlsZU5hbWUgPSBmaWxlTmFtZShyZXMpO1xuICAgICAgICAgIGZpbGVOYW1lID1cbiAgICAgICAgICAgIGZpbGVOYW1lIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWUqYF0gfHxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZWBdIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ2ZpbGVuYW1lJykgfHxcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgneC1maWxlbmFtZScpO1xuICAgICAgICAgIHNhdmVBcyhyZXMuYm9keSEsIGRlY29kZVVSSShmaWxlTmFtZSBhcyBzdHJpbmcpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZXJyID0+IHRoaXMuZXJyb3IuZW1pdChlcnIpXG4gICAgICB9KTtcbiAgfVxufVxuIl19