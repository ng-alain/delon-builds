import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * A set of validators for reactive forms
 *
 * 一套用于响应式表单的验证器
 */
declare class _Validators {
    /**
     * Wheter is number
     *
     * 是否为数字
     */
    static num(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is integer
     *
     * 是否为整数
     */
    static int(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is decimal
     *
     * 是否为小数点数值
     */
    static decimal(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is People's Republic of China identity card
     *
     * 是否为中华人民共和国居民身份证
     */
    static idCard(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is china mobile (China)
     *
     * 是否为手机号（中国）
     */
    static mobile(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is url address
     *
     * 是否URL地址
     */
    static url(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is IPv4 address (Support v4, v6)
     *
     * 是否IP4地址（支持v4、v6）
     */
    static ip(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is color
     *
     * 是否颜色代码值
     */
    static color(control: AbstractControl): ValidationErrors | null;
    /**
     * Wheter is chinese
     *
     * 是否中文
     */
    static chinese(control: AbstractControl): ValidationErrors | null;
}

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
declare function MatchControl(controlName: string, matchingControlName: string): ValidatorFn;

export { MatchControl, _Validators };
