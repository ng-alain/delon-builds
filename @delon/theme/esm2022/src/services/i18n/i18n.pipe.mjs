import { Pipe, inject } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
export class I18nPipe {
    constructor() {
        this.i18n = inject(ALAIN_I18N_TOKEN);
    }
    transform(key, params) {
        return this.i18n.fanyi(key, params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: I18nPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: I18nPipe, isStandalone: true, name: "i18n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: I18nPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'i18n', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRzFDLE1BQU0sT0FBTyxRQUFRO0lBRHJCO1FBRW1CLFNBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUtsRDtJQUhDLFNBQVMsQ0FBQyxHQUFXLEVBQUUsTUFBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs4R0FMVSxRQUFROzRHQUFSLFFBQVE7OzJGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4vaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ2kxOG4nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSTE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBpMThuID0gaW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pO1xuXG4gIHRyYW5zZm9ybShrZXk6IHN0cmluZywgcGFyYW1zPzogdW5rbm93bik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mYW55aShrZXksIHBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==