/**
 * @fileoverview added by tsickle
 * Generated from: filter.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     * @template T
     * @param {?} array
     * @param {?} matcher
     * @param {...?} args
     * @return {?}
     */
    transform(array, matcher, ...args) {
        return array.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => matcher(i, ...args)));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'filter' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxVQUFVOzs7Ozs7Ozs7OztJQU1yQixTQUFTLENBQUksS0FBdUIsRUFBRSxPQUE2QyxFQUFFLEdBQUcsSUFBVztRQUNqRyxPQUFPLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInIH0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRmlsdGVyIGFycmF5XG4gICAqXG4gICAqIOi/h+a7pOaVsOe7hFxuICAgKi9cbiAgdHJhbnNmb3JtPFQ+KGFycmF5OiBSZWFkb25seUFycmF5PFQ+LCBtYXRjaGVyOiAoaXRlbTogVCwgLi4uYXJnczogYW55W10pID0+IGJvb2xlYW4sIC4uLmFyZ3M6IGFueVtdKTogVFtdIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGkgPT4gbWF0Y2hlcihpLCAuLi5hcmdzKSk7XG4gIH1cbn1cbiJdfQ==