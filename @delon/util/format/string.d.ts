import { NzSafeAny } from 'ng-zorro-antd/core/types';
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
