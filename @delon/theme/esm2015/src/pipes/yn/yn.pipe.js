/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
 */
export class YNPipe {
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @return {?}
     */
    transform(value, yes, no) {
        if (value) {
            return '<span class="badge badge-success">' + (yes || '是') + '</span>';
        }
        else {
            return '<span class="badge badge-error">' + (no || '否') + '</span>';
        }
    }
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU1wRCxNQUFNOzs7Ozs7O0lBQ0osU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsRUFBVTtRQUMvQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sb0NBQW9DLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxPQUFPLGtDQUFrQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNyRTtLQUNGOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlLXBpcGUjJUU1JUJFJUJEJUU3JUFCJUEwLXluXG4gKi9cbkBQaXBlKHsgbmFtZTogJ3luJyB9KVxuZXhwb3J0IGNsYXNzIFlOUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIHllczogc3RyaW5nLCBubzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+JyArICh5ZXMgfHwgJ+aYrycpICsgJzwvc3Bhbj4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZXJyb3JcIj4nICsgKG5vIHx8ICflkKYnKSArICc8L3NwYW4+JztcbiAgICB9XG4gIH1cbn1cbiJdfQ==