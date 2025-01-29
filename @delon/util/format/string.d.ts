import type { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * String formatting
 *
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 */
export declare function format(str: string | null | undefined, obj: NzSafeAny | null | undefined, needDeepGet?: boolean): string;
export interface FormatMaskOption {
    mask: string;
    tokens?: Record<string, FormatMaskToken>;
}
export interface FormatMaskToken {
    pattern: RegExp;
    default?: NzSafeAny;
    transform?: (char: string) => string;
}
/**
 * Format mask
 *
 * 格式化掩码
 *
 * | 字符 | 描述 |
 * | --- | --- |
 * | `0` | 任意数字，若该位置字符不符合，则默认为 `0` 填充 |
 * | `9` | 任意数字 |
 * | `#` | 任意字符 |
 * | `U` | 转换大写 |
 * | `L` | 转换小写 |
 * | `*` | 转换为 `*` 字符 |
 *
 * ```ts
 * formatMask('123', '(###)') => (123)
 * formatMask('15900000000', '999****9999') => 159****0000
 * ```
 */
export declare function formatMask(value: string, option: string | FormatMaskOption): string;
