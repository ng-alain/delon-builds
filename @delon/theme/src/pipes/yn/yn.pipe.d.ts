import { PipeTransform } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
 */
export declare class YNPipe implements PipeTransform {
    transform(value: boolean, yes: string, no: string): string;
}
