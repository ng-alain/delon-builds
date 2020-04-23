/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { InputNumber } from '@delon/util';
import { QR_DEFULAT_CONFIG } from './qr.config';
import { QRService } from './qr.service';
var QRComponent = /** @class */ (function () {
    // #endregion
    function QRComponent(srv, cdr, configSrv) {
        this.srv = srv;
        this.cdr = cdr;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        configSrv.attach(this, 'qr', QR_DEFULAT_CONFIG);
    }
    /**
     * @return {?}
     */
    QRComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.dataURL = this.srv.refresh({
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: this.value,
        });
        this.cdr.detectChanges();
        this.change.emit(this.dataURL);
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    exportAs: 'qr',
                    template: " <img class=\"qr__img\" src=\"{{ dataURL }}\" /> ",
                    host: {
                        '[class.qr]': 'true',
                        '[style.height.px]': 'size',
                        '[style.width.px]': 'size',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: QRService },
        { type: ChangeDetectorRef },
        { type: AlainConfigService }
    ]; };
    QRComponent.propDecorators = {
        background: [{ type: Input }],
        backgroundAlpha: [{ type: Input }],
        foreground: [{ type: Input }],
        foregroundAlpha: [{ type: Input }],
        level: [{ type: Input }],
        mime: [{ type: Input }],
        padding: [{ type: Input }],
        size: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], QRComponent.prototype, "padding", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], QRComponent.prototype, "size", void 0);
    return QRComponent;
}());
export { QRComponent };
if (false) {
    /** @type {?} */
    QRComponent.prototype.dataURL;
    /** @type {?} */
    QRComponent.prototype.background;
    /** @type {?} */
    QRComponent.prototype.backgroundAlpha;
    /** @type {?} */
    QRComponent.prototype.foreground;
    /** @type {?} */
    QRComponent.prototype.foregroundAlpha;
    /** @type {?} */
    QRComponent.prototype.level;
    /** @type {?} */
    QRComponent.prototype.mime;
    /** @type {?} */
    QRComponent.prototype.padding;
    /** @type {?} */
    QRComponent.prototype.size;
    /** @type {?} */
    QRComponent.prototype.value;
    /** @type {?} */
    QRComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQThCRSxhQUFhO0lBRWIscUJBQW9CLEdBQWMsRUFBVSxHQUFzQixFQUFFLFNBQTZCO1FBQTdFLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFKL0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFLckQsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJO29CQUNkLFFBQVEsRUFBRSxJQUFJO29CQUNkLFFBQVEsRUFBRSxtREFBK0M7b0JBQ3pELElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsTUFBTTt3QkFDcEIsbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0Isa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFkUSxTQUFTO2dCQVhoQixpQkFBaUI7Z0JBUVYsa0JBQWtCOzs7NkJBdUJ4QixLQUFLO2tDQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxNQUFNOztJQUppQjtRQUFkLFdBQVcsRUFBRTs7Z0RBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzs2Q0FBYztJQTBCdkMsa0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQXRDWSxXQUFXOzs7SUFDdEIsOEJBQWdCOztJQUloQixpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsaUNBQTRCOztJQUM1QixzQ0FBaUM7O0lBQ2pDLDRCQUF1Qjs7SUFDdkIsMkJBQXNCOztJQUN0Qiw4QkFBd0M7O0lBQ3hDLDJCQUFxQzs7SUFDckMsNEJBQXVCOztJQUV2Qiw2QkFBdUQ7Ozs7O0lBSTNDLDBCQUFzQjs7Ozs7SUFBRSwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5RUkNvbmZpZyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFFSX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICBleHBvcnRBczogJ3FyJyxcbiAgdGVtcGxhdGU6IGAgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7eyBkYXRhVVJMIH19XCIgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucXJdJzogJ3RydWUnLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdzaXplJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdzaXplJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGRhdGFVUkw6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcmVncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbWU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGFkZGluZzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFFSU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2g8QWxhaW5RUkNvbmZpZywgJ3FyJz4odGhpcywgJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5zcnYucmVmcmVzaCh7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIl19