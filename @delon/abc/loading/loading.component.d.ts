import { Direction } from '@angular/cdk/bidi';
import { LoadingCustom, LoadingIcon, LoadingShowOptions } from './loading.types';
export declare class LoadingDefaultComponent {
    options: LoadingShowOptions;
    dir: Direction;
    get icon(): LoadingIcon;
    get custom(): LoadingCustom;
}
