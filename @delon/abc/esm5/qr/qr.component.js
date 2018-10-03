/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRService } from './qr.service';
import { QRConfig } from './qr.config';
var QRComponent = /** @class */ (function () {
    // endregion
    function QRComponent(cog, srv, cd) {
        this.srv = srv;
        this.cd = cd;
        /**
         * 变更时回调
         */
        this.change = new EventEmitter();
        Object.assign(this, cog);
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
        this.cd.detectChanges();
        this.change.emit(this.dataURL);
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    template: "\n  <img class=\"qr__img\" src=\"{{dataURL}}\">\n  ",
                    preserveWhitespaces: false,
                    host: { '[class.qr]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: QRConfig },
        { type: QRService },
        { type: ChangeDetectorRef }
    ]; };
    QRComponent.propDecorators = {
        background: [{ type: Input }],
        backgroundAlpha: [{ type: Input }],
        foreground: [{ type: Input }],
        foregroundAlpha: [{ type: Input }],
        level: [{ type: Input }],
        mime: [{ type: Input }],
        padding: [{ type: Input }],
        size: [{ type: HostBinding, args: ['style.height.px',] }, { type: HostBinding, args: ['style.width.px',] }, { type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], QRComponent.prototype, "padding", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], QRComponent.prototype, "size", void 0);
    return QRComponent;
}());
export { QRComponent };
if (false) {
    /** @type {?} */
    QRComponent.prototype.dataURL;
    /**
     * 背景
     * @type {?}
     */
    QRComponent.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRComponent.prototype.backgroundAlpha;
    /**
     * 前景
     * @type {?}
     */
    QRComponent.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRComponent.prototype.foregroundAlpha;
    /**
     * 误差校正级别
     * @type {?}
     */
    QRComponent.prototype.level;
    /**
     * 二维码输出图片MIME类型
     * @type {?}
     */
    QRComponent.prototype.mime;
    /**
     * 内边距（单位：px）
     * @type {?}
     */
    QRComponent.prototype.padding;
    /**
     * 大小（单位：px）
     * @type {?}
     */
    QRComponent.prototype.size;
    /**
     * 值
     * @type {?}
     */
    QRComponent.prototype.value;
    /**
     * 变更时回调
     * @type {?}
     */
    QRComponent.prototype.change;
    /** @type {?} */
    QRComponent.prototype.srv;
    /** @type {?} */
    QRComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUV2QixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBa0RyQyxZQUFZO0lBRVoscUJBQ0UsR0FBYSxFQUNMLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFOzs7O3NCQVBILElBQUksWUFBWSxFQUFVO1FBU2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLHFEQUVUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7b0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFWUSxRQUFRO2dCQURSLFNBQVM7Z0JBUGhCLGlCQUFpQjs7OzZCQXdCaEIsS0FBSztrQ0FHTCxLQUFLOzZCQUdMLEtBQUs7a0NBR0wsS0FBSzt3QkFHTCxLQUFLO3VCQUdMLEtBQUs7MEJBR0wsS0FBSzt1QkFJTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSzt3QkFJTCxLQUFLO3lCQUdMLE1BQU07OztRQVpOLFdBQVcsRUFBRTs7OztRQU1iLFdBQVcsRUFBRTs7O3NCQXREaEI7O1NBd0JhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3FyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7e2RhdGFVUkx9fVwiPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDogeyAnW2NsYXNzLnFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBkYXRhVVJMOiBzdHJpbmc7XG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgLyoqIOiDjOaZryAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgQElucHV0KClcbiAgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDliY3mma8gKi9cbiAgQElucHV0KClcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIEBJbnB1dCgpXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5YirICovXG4gIEBJbnB1dCgpXG4gIGxldmVsOiBzdHJpbmc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6LICovXG4gIEBJbnB1dCgpXG4gIG1pbWU6IHN0cmluZztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqIOWAvCAqL1xuICBASW5wdXQoKVxuICB2YWx1ZTogc3RyaW5nO1xuICAvKiog5Y+Y5pu05pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFFSQ29uZmlnLFxuICAgIHByaXZhdGUgc3J2OiBRUlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIl19