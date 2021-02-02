import { Inject, Pipe } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
export class I18nPipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    }
}
/** @nocollapse */ I18nPipe.ɵfac = function I18nPipe_Factory(t) { return new (t || I18nPipe)(i0.ɵɵdirectiveInject(ALAIN_I18N_TOKEN)); };
/** @nocollapse */ I18nPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "i18n", type: I18nPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(I18nPipe, [{
        type: Pipe,
        args: [{ name: 'i18n' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUc1RCxNQUFNLE9BQU8sUUFBUTtJQUNuQixZQUE4QyxJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjtJQUFHLENBQUM7SUFFeEUsU0FBUyxDQUFDLEdBQVcsRUFBRSxpQkFBc0IsRUFBRSxNQUFnQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzttRkFMVSxRQUFRLHVCQUNDLGdCQUFnQjswRUFEekIsUUFBUTt1RkFBUixRQUFRO2NBRHBCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O3NCQUVQLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcbmV4cG9ydCBjbGFzcyBJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogQWxhaW5JMThOU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzoge30sIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZmFueWkoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgaXNTYWZlKTtcbiAgfVxufVxuIl19