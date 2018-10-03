/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
 */
var YNPipe = /** @class */ (function () {
    function YNPipe() {
    }
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @return {?}
     */
    YNPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @return {?}
     */
    function (value, yes, no) {
        if (value) {
            return '<span class="badge badge-success">' + (yes || '是') + '</span>';
        }
        else {
            return '<span class="badge badge-error">' + (no || '否') + '</span>';
        }
    };
    YNPipe.decorators = [
        { type: Pipe, args: [{ name: 'yn' },] }
    ];
    return YNPipe;
}());
export { YNPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQU9sRCwwQkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFjLEVBQUUsR0FBVyxFQUFFLEVBQVU7UUFDL0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLG9DQUFvQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsT0FBTyxrQ0FBa0MsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDckU7S0FDRjs7Z0JBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTs7aUJBTHBCOztTQU1hLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTUlQkUlQkQlRTclQUIlQTAteW5cbiAqL1xuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4nICsgKHllcyB8fCAn5pivJykgKyAnPC9zcGFuPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1lcnJvclwiPicgKyAobm8gfHwgJ+WQpicpICsgJzwvc3Bhbj4nO1xuICAgIH1cbiAgfVxufVxuIl19