import { __awaiter } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';
import { finalize } from 'rxjs/operators';
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
                .pipe(finalize(() => this.setDisabled(false)))
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
            }, err => this.error.emit(err));
        });
    }
}
DownFileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[down-file]',
                exportAs: 'downFile',
                host: {
                    '(click)': '_click($event)',
                },
            },] }
];
/** @nocollapse */
DownFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: _HttpClient }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: Input, args: ['http-data',] }],
    httpBody: [{ type: Input, args: ['http-body',] }],
    httpMethod: [{ type: Input, args: ['http-method',] }],
    httpUrl: [{ type: Input, args: ['http-url',] }],
    fileName: [{ type: Input, args: ['file-name',] }],
    pre: [{ type: Input }],
    success: [{ type: Output }],
    error: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVMxQyxNQUFNLE9BQU8saUJBQWlCO0lBeUI1QixZQUFvQixFQUFpQyxFQUFVLEtBQWtCO1FBQTdELE9BQUUsR0FBRixFQUFFLENBQStCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQXhCekUseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBR2QsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUk5QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFpQmpELElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUk7WUFDRixvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUFDLFdBQU0sR0FBRTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBdkJPLGNBQWMsQ0FBQyxJQUFtQjtRQUN4QyxNQUFNLEdBQUcsR0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1AsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFhTyxXQUFXLENBQUMsTUFBZTtRQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxFQUFFLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFSyxNQUFNLENBQUMsRUFBYzs7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNGLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDckIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLO2lCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUU7Z0JBQzNCLFlBQVksRUFBRSxNQUFNO2dCQUNwQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzdDLFNBQVMsQ0FDUixDQUFDLEdBQXVCLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixPQUFPO2lCQUNSO2dCQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM3QixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVU7b0JBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsUUFBUTtvQkFDTixRQUFRLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbEksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLEVBQUUsU0FBUyxDQUFDLFFBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDNUIsQ0FBQztRQUNOLENBQUM7S0FBQTs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjthQUNGOzs7O1lBWm1CLFVBQVU7WUFDckIsV0FBVzs7O3VCQWNqQixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLEtBQUssU0FBQyxhQUFhO3NCQUNuQixLQUFLLFNBQUMsVUFBVTt1QkFDaEIsS0FBSyxTQUFDLFdBQVc7a0JBQ2pCLEtBQUs7c0JBQ0wsTUFBTTtvQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG93bi1maWxlXScsXG4gIGV4cG9ydEFzOiAnZG93bkZpbGUnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBEb3duRmlsZURpcmVjdGl2ZSB7XG4gIHByaXZhdGUgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSB0cnVlO1xuICBASW5wdXQoJ2h0dHAtZGF0YScpIGh0dHBEYXRhOiBhbnk7XG4gIEBJbnB1dCgnaHR0cC1ib2R5JykgaHR0cEJvZHk6IGFueTtcbiAgQElucHV0KCdodHRwLW1ldGhvZCcpIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICBASW5wdXQoJ2h0dHAtdXJsJykgaHR0cFVybDogc3RyaW5nO1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lOiBzdHJpbmcgfCAoKHJlcDogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBwcmU6IChldjogTW91c2VFdmVudCkgPT4gUHJvbWlzZTxib29sZWFuPjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBSZXNwb25zZTxCbG9iPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBhcnI6IEFycmF5PHt9PiA9IChkYXRhIHx8ICcnKVxuICAgICAgLnNwbGl0KCc7JylcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCc9JykpXG4gICAgICAubWFwKHYgPT4ge1xuICAgICAgICBjb25zdCBzdHJBcnIgPSB2LnNwbGl0KCc9Jyk7XG4gICAgICAgIGNvbnN0IHV0ZklkID0gYFVURi04JydgO1xuICAgICAgICBsZXQgdmFsdWUgPSBzdHJBcnJbMV07XG4gICAgICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKHV0ZklkKSkgdmFsdWUgPSB2YWx1ZS5zdWJzdHIodXRmSWQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHsgW3N0ckFyclswXS50cmltKCldOiB2YWx1ZSB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKF9vLCBpdGVtKSA9PiBpdGVtLCB7fSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PiwgcHJpdmF0ZSBfaHR0cDogX0h0dHBDbGllbnQpIHtcbiAgICBsZXQgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSAhIW5ldyBCbG9iKCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSBpc0ZpbGVTYXZlclN1cHBvcnRlZDtcbiAgICBpZiAoIWlzRmlsZVNhdmVyU3VwcG9ydGVkKSB7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGRvd24tZmlsZV9fbm90LXN1cHBvcnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldERpc2FibGVkKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGVsLmRpc2FibGVkID0gc3RhdHVzO1xuICAgIGVsLmNsYXNzTGlzdFtzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnXShgZG93bi1maWxlX19kaXNhYmxlZGApO1xuICB9XG5cbiAgYXN5bmMgX2NsaWNrKGV2OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkIHx8ICh0eXBlb2YgdGhpcy5wcmUgPT09ICdmdW5jdGlvbicgJiYgIShhd2FpdCB0aGlzLnByZShldikpKSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldERpc2FibGVkKHRydWUpO1xuICAgIHRoaXMuX2h0dHBcbiAgICAgIC5yZXF1ZXN0KHRoaXMuaHR0cE1ldGhvZCwgdGhpcy5odHRwVXJsLCB7XG4gICAgICAgIHBhcmFtczogdGhpcy5odHRwRGF0YSB8fCB7fSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgICAgIGJvZHk6IHRoaXMuaHR0cEJvZHksXG4gICAgICB9KVxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gdGhpcy5zZXREaXNhYmxlZChmYWxzZSkpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCB8fCByZXMuYm9keSEuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQocmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGlzcG9zaXRpb24gPSB0aGlzLmdldERpc3Bvc2l0aW9uKHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1kaXNwb3NpdGlvbicpKTtcbiAgICAgICAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmZpbGVOYW1lO1xuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU5hbWUgPT09ICdmdW5jdGlvbicpIGZpbGVOYW1lID0gZmlsZU5hbWUocmVzKTtcbiAgICAgICAgICBmaWxlTmFtZSA9XG4gICAgICAgICAgICBmaWxlTmFtZSB8fCBkaXNwb3NpdGlvbltgZmlsZW5hbWUqYF0gfHwgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHwgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8IHJlcy5oZWFkZXJzLmdldCgneC1maWxlbmFtZScpO1xuICAgICAgICAgIHNhdmVBcyhyZXMuYm9keSEsIGRlY29kZVVSSShmaWxlTmFtZSBhcyBzdHJpbmcpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5lcnJvci5lbWl0KGVyciksXG4gICAgICApO1xuICB9XG59XG4iXX0=