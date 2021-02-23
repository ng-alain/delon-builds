import { ValidatorFn } from '@angular/forms';
/**
 * Match two control values
 *
 * 匹配两个控件值
 * ```ts
 * this.form = new FormGroup({
 *  pwd: new FormControl(''),
 *  repwd: new FormControl(''),
 * }, {
 *  validators: MatchControl('pwd', 'repwd'),
 * });
 * ```
 */
export declare function MatchControl(controlName: string, matchingControlName: string): ValidatorFn;
