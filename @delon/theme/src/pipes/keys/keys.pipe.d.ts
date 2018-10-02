import { PipeTransform } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
export declare class KeysPipe implements PipeTransform {
    transform(value: any, keyIsNumber?: boolean): any[];
}
