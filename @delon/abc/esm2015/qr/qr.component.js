/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
import { QR_DEFULAT_CONFIG } from './qr.config';
import { QRService } from './qr.service';
export class QRComponent {
    // #endregion
    /**
     * @param {?} srv
     * @param {?} cdr
     * @param {?} configSrv
     */
    constructor(srv, cdr, configSrv) {
        this.srv = srv;
        this.cdr = cdr;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        configSrv.attach(this, 'qr', QR_DEFULAT_CONFIG);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
}
QRComponent.decorators = [
    { type: Component, args: [{
                selector: 'qr',
                exportAs: 'qr',
                template: ` <img class="qr__img" src="{{ dataURL }}" /> `,
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
QRComponent.ctorParameters = () => [
    { type: QRService },
    { type: ChangeDetectorRef },
    { type: AlainConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBZXpDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBbUJ0QixZQUFvQixHQUFjLEVBQVUsR0FBc0IsRUFBRSxTQUE2QjtRQUE3RSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBSi9DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS3JELFNBQVMsQ0FBQyxNQUFNLENBQXNCLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsUUFBUSxFQUFFLCtDQUErQztnQkFDekQsSUFBSSxFQUFFO29CQUNKLFlBQVksRUFBRSxNQUFNO29CQUNwQixtQkFBbUIsRUFBRSxNQUFNO29CQUMzQixrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFkUSxTQUFTO1lBVmhCLGlCQUFpQjtZQVFWLGtCQUFrQjs7O3lCQXNCeEIsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBRUwsTUFBTTs7QUFKaUI7SUFBZCxXQUFXLEVBQUU7OzRDQUFpQjtBQUNoQjtJQUFkLFdBQVcsRUFBRTs7eUNBQWM7OztJQVhyQyw4QkFBZ0I7O0lBSWhCLGlDQUE0Qjs7SUFDNUIsc0NBQWlDOztJQUNqQyxpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsNEJBQXVCOztJQUN2QiwyQkFBc0I7O0lBQ3RCLDhCQUF3Qzs7SUFDeEMsMkJBQXFDOztJQUNyQyw0QkFBdUI7O0lBRXZCLDZCQUF1RDs7Ozs7SUFJM0MsMEJBQXNCOzs7OztJQUFFLDBCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblFSQ29uZmlnLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFFSX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICBleHBvcnRBczogJ3FyJyxcbiAgdGVtcGxhdGU6IGAgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7eyBkYXRhVVJMIH19XCIgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucXJdJzogJ3RydWUnLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdzaXplJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdzaXplJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGRhdGFVUkw6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcmVncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbWU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGFkZGluZzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFFSU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2g8QWxhaW5RUkNvbmZpZywgJ3FyJz4odGhpcywgJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5zcnYucmVmcmVzaCh7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIl19