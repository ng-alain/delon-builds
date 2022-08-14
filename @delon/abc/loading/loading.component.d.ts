import { Direction } from '@angular/cdk/bidi';
import { LoadingCustom, LoadingIcon, LoadingShowOptions } from './loading.types';
import * as i0 from "@angular/core";
export declare class LoadingDefaultComponent {
    options: LoadingShowOptions;
    dir: Direction;
    get icon(): LoadingIcon;
    get custom(): LoadingCustom;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingDefaultComponent, "loading-default", never, {}, {}, never, never, false>;
}
