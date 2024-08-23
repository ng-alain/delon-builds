import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';

/**
 * Filter array
 *
 * 过滤数组
 */
// eslint-disable-next-line @angular-eslint/no-pipe-impure
class FilterPipe {
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: FilterPipe, isStandalone: true, name: "filter", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter', standalone: true, pure: false }]
        }] });

const PIPES = [FilterPipe];
class FilterPipeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: FilterPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: FilterPipeModule, imports: [FilterPipe], exports: [FilterPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: FilterPipeModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: FilterPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: PIPES,
                    exports: PIPES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FilterPipe, FilterPipeModule };
//# sourceMappingURL=pipe-filter.mjs.map
