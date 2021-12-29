import { PipeTransform } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
/**
 * [Document](https://ng-alain.com/theme/keys)
 */
export declare class KeysPipe implements PipeTransform {
    transform(value: NzSafeAny, keyIsNumber?: boolean): NzSafeAny[];
    static ɵfac: i0.ɵɵFactoryDeclaration<KeysPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KeysPipe, "keys">;
}
