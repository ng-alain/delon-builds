import { Inject, Pipe } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
export class I18nPipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(key, params) {
        return this.i18n.fanyi(key, params);
    }
}
I18nPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: I18nPipe, deps: [{ token: ALAIN_I18N_TOKEN }], target: i0.ɵɵFactoryTarget.Pipe });
I18nPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: I18nPipe, name: "i18n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: I18nPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'i18n' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUc1RCxNQUFNLE9BQU8sUUFBUTtJQUNuQixZQUE4QyxJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjtJQUFHLENBQUM7SUFFeEUsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFnQztRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOztzR0FMVSxRQUFRLGtCQUNDLGdCQUFnQjtvR0FEekIsUUFBUTs0RkFBUixRQUFRO2tCQURwQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7MEJBRVAsTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4vaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ2kxOG4nIH0pXG5leHBvcnQgY2xhc3MgSTE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG46IEFsYWluSTE4TlNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mYW55aShrZXksIHBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==