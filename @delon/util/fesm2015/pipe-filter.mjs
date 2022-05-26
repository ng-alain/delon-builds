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
}
FilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipe, name: "filter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter' }]
        }] });

const PIPES = [FilterPipe];
class FilterPipeModule {
}
FilterPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FilterPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipeModule, declarations: [FilterPipe], exports: [FilterPipe] });
FilterPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: FilterPipeModule, decorators: [{
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
