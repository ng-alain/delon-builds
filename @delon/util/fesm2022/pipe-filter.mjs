import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';

class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.4", ngImport: i0, type: FilterPipe, name: "filter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter' }]
        }] });

const PIPES = [FilterPipe];
class FilterPipeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: FilterPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.4", ngImport: i0, type: FilterPipeModule, declarations: [FilterPipe], exports: [FilterPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: FilterPipeModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: FilterPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: PIPES,
                    exports: PIPES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FilterPipe, FilterPipeModule };
//# sourceMappingURL=pipe-filter.mjs.map
