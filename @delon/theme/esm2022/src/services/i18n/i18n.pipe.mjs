import { Inject, Pipe } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
class I18nPipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(key, params) {
        return this.i18n.fanyi(key, params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: I18nPipe, deps: [{ token: ALAIN_I18N_TOKEN }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.1", ngImport: i0, type: I18nPipe, name: "i18n" }); }
}
export { I18nPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: I18nPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'i18n' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUU1RCxNQUNhLFFBQVE7SUFDbkIsWUFBOEMsSUFBc0I7UUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7SUFBRyxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxHQUFXLEVBQUUsTUFBZ0M7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs4R0FMVSxRQUFRLGtCQUNDLGdCQUFnQjs0R0FEekIsUUFBUTs7U0FBUixRQUFROzJGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzswQkFFUCxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcbmV4cG9ydCBjbGFzcyBJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogQWxhaW5JMThOU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZhbnlpKGtleSwgcGFyYW1zKTtcbiAgfVxufVxuIl19