/**
 * @fileoverview added by tsickle
 * Generated from: commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { commasNumber } from '@delon/util/format';
export class CommasNumberPipe {
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * @param {?} value
     * @param {?=} separator
     * @return {?}
     */
    transform(value, separator = ',') {
        return commasNumber(value, separator);
    }
}
CommasNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'commasNumber' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2Zvcm1hdC1udW1iZXIvY29tbWFzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7O0lBTTNCLFNBQVMsQ0FBQyxLQUFzQixFQUFFLFlBQW9CLEdBQUc7UUFDdkQsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21tYXNOdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdjb21tYXNOdW1iZXInIH0pXG5leHBvcnQgY2xhc3MgQ29tbWFzTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gJywnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29tbWFzTnVtYmVyKHZhbHVlLCBzZXBhcmF0b3IpO1xuICB9XG59XG4iXX0=