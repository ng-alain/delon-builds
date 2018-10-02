import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, Optional, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { _HttpClient, AlainThemeModule } from '@delon/theme';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
class DownFileDirective {
    /**
     * @param {?} el
     * @param {?} http
     * @param {?} _http
     */
    constructor(el, http, _http) {
        this.el = el;
        this.http = http;
        this._http = _http;
        /**
         * 请求类型
         */
        this.httpMethod = 'get';
        /**
         * 成功回调
         */
        this.success = new EventEmitter();
        /**
         * 错误回调
         */
        this.error = new EventEmitter();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getDisposition(data) {
        /** @type {?} */
        const arr = (data || '')
            .split(';')
            .filter(i => i.includes('='))
            .map(v => {
            /** @type {?} */
            const strArr = v.split('=');
            /** @type {?} */
            const utfId = `UTF-8''`;
            /** @type {?} */
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((o, item) => item, {});
    }
    /**
     * @return {?}
     */
    _click() {
        this.el.nativeElement.disabled = true;
        (/** @type {?} */ ((this._http || this.http)))
            .request(this.httpMethod, this.httpUrl, {
            params: this.httpData || {},
            responseType: 'blob',
            observe: 'response',
        })
            .subscribe((res) => {
            if (res.status !== 200 || res.body.size <= 0) {
                this.error.emit(res);
                return;
            }
            /** @type {?} */
            const disposition = this.getDisposition(res.headers.get('content-disposition'));
            /** @type {?} */
            const fileName = this.fileName ||
                disposition[`filename*`] ||
                disposition[`filename`] ||
                res.headers.get('filename') ||
                res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            this.success.emit(res);
            this.el.nativeElement.disabled = false;
        }, err => {
            this.error.emit(err);
            this.el.nativeElement.disabled = false;
        });
    }
}
DownFileDirective.decorators = [
    { type: Directive, args: [{ selector: '[down-file]' },] }
];
/** @nocollapse */
DownFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HttpClient },
    { type: _HttpClient, decorators: [{ type: Optional }] }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: Input, args: ['http-data',] }],
    httpMethod: [{ type: Input, args: ['http-method',] }],
    httpUrl: [{ type: Input, args: ['http-url',] }],
    fileName: [{ type: Input, args: ['file-name',] }],
    success: [{ type: Output }],
    error: [{ type: Output }],
    _click: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DIRECTIVES = [DownFileDirective];
class DownFileModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DownFileModule, providers: [] };
    }
}
DownFileModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AlainThemeModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DownFileDirective, DownFileModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bkZpbGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlL2Rvd24tZmlsZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlL2Rvd24tZmlsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuLyoqXHJcbiAqIMOmwpbCh8OkwrvCtsOkwrjCi8Oowr3CvVxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gbnotYnV0dG9uIGRvd24tZmlsZSBodHRwLXVybD1cImFzc2V0cy9kZW1ve3tpfX1cIiBmaWxlLW5hbWU9XCJkZW1vw6TCuMKtw6bClsKHXCI+e3tpfX08L2J1dHRvbj5cclxuICogYGBgXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG93bi1maWxlXScgfSlcclxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcclxuICAvKiogVVJMw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwICovXHJcbiAgQElucHV0KCdodHRwLWRhdGEnKVxyXG4gIGh0dHBEYXRhOiBhbnk7XHJcbiAgLyoqIMOowq/Ct8OmwrHCgsOnwrHCu8Olwp7CiyAqL1xyXG4gIEBJbnB1dCgnaHR0cC1tZXRob2QnKVxyXG4gIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xyXG4gIC8qKiDDpMK4wovDqMK9wr3DpcKcwrDDpcKdwoAgKi9cclxuICBASW5wdXQoJ2h0dHAtdXJsJylcclxuICBodHRwVXJsOiBzdHJpbmc7XHJcbiAgLyoqIMOmwozCh8Olwq7CmsOmwpbCh8OkwrvCtsOlwpDCjcOvwrzCjMOowovCpcOkwrjCusOnwqnCusOkwrvCjsOmwpzCjcOlworCocOnwqvCr8Oowr/ClMOlwpvCnsOnwprChCBgaGVhZGVyYCDDpMK4wq3DqMKOwrfDpcKPwpYgYGZpbGVuYW1lYMOjwoDCgWB4LWZpbGVuYW1lYCAqL1xyXG4gIEBJbnB1dCgnZmlsZS1uYW1lJylcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gIC8qKiDDpsKIwpDDpcKKwp/DpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBzdWNjZXNzOiBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PiA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xyXG4gIC8qKiDDqcKUwpnDqMKvwq/DpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFycjogYW55ID0gKGRhdGEgfHwgJycpXHJcbiAgICAgIC5zcGxpdCgnOycpXHJcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCc9JykpXHJcbiAgICAgIC5tYXAodiA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xyXG4gICAgICAgIGNvbnN0IHV0ZklkID0gYFVURi04JydgO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcclxuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyKHV0ZklkLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHsgW3N0ckFyclswXS50cmltKCldOiB2YWx1ZSB9O1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKChvLCBpdGVtOiBhbnkpID0+IGl0ZW0sIHt9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50LFxyXG4gICkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIF9jbGljaygpIHtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAoKHRoaXMuX2h0dHAgfHwgdGhpcy5odHRwKSBhcyBhbnkpXHJcbiAgICAgIC5yZXF1ZXN0KHRoaXMuaHR0cE1ldGhvZCwgdGhpcy5odHRwVXJsLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5LnNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgZGlzcG9zaXRpb246IGFueSA9IHRoaXMuZ2V0RGlzcG9zaXRpb24oXHJcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1kaXNwb3NpdGlvbicpLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID1cclxuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSB8fFxyXG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWUqYF0gfHxcclxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHxcclxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8XHJcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgneC1maWxlbmFtZScpO1xyXG4gICAgICAgICAgc2F2ZUFzKHJlcy5ib2R5LCBkZWNvZGVVUkkoZmlsZU5hbWUpKTtcclxuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcclxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsYWluVGhlbWVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgRG93bkZpbGVEaXJlY3RpdmUgfSBmcm9tICcuL2Rvd24tZmlsZS5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgRElSRUNUSVZFUyA9IFtEb3duRmlsZURpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFsYWluVGhlbWVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVNdLFxyXG4gIGV4cG9ydHM6IFsuLi5ESVJFQ1RJVkVTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERvd25GaWxlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEb3duRmlsZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBcUJBOzs7Ozs7SUFrQ0UsWUFDVSxJQUNBLE1BQ1ksS0FBa0I7UUFGOUIsT0FBRSxHQUFGLEVBQUU7UUFDRixTQUFJLEdBQUosSUFBSTtRQUNRLFVBQUssR0FBTCxLQUFLLENBQWE7Ozs7MEJBL0JuQixLQUFLOzs7O3VCQVNrQixJQUFJLFlBQVksRUFBc0I7Ozs7cUJBR3ZELElBQUksWUFBWSxFQUFPO0tBb0I5Qzs7Ozs7SUFsQkksY0FBYyxDQUFDLElBQVk7O1FBQ2pDLE1BQU0sR0FBRyxHQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7YUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QixHQUFHLENBQUMsQ0FBQzs7WUFDSixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUM1QixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7O1lBQ3hCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVMsS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7O0lBVWhELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLG9CQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUk7YUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQzNCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7YUFDRCxTQUFTLENBQ1IsQ0FBQyxHQUF1QjtZQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjs7WUFDRCxNQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsY0FBYyxDQUMxQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUN2QyxDQUFDOztZQUNGLE1BQU0sUUFBUSxHQUNaLElBQUksQ0FBQyxRQUFRO2dCQUNiLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN4QyxFQUNELEdBQUc7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3hDLENBQ0YsQ0FBQztLQUNMOzs7WUExRUYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTs7OztZQWxCcEMsVUFBVTtZQU9XLFVBQVU7WUFFeEIsV0FBVyx1QkErQ2YsUUFBUTs7O3VCQW5DVixLQUFLLFNBQUMsV0FBVzt5QkFHakIsS0FBSyxTQUFDLGFBQWE7c0JBR25CLEtBQUssU0FBQyxVQUFVO3VCQUdoQixLQUFLLFNBQUMsV0FBVztzQkFHakIsTUFBTTtvQkFHTixNQUFNO3FCQXVCTixZQUFZLFNBQUMsT0FBTzs7Ozs7OztBQzdEdkI7QUFNQSxNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFPdkM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDcEQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9