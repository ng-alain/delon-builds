import { AbstractControl, ValidationErrors } from '@angular/forms';
/**
 * A set of validators for reactive forms
 *
 * 一套用于响应式表单的验证器
 */
export declare class _Validators {
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
}
