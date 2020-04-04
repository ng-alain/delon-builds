import { NzSafeAny } from 'ng-zorro-antd/core/types/any';
import { ITokenModel } from '../interface';
export declare class JWTTokenModel implements ITokenModel {
    [key: string]: NzSafeAny;
    token: string | null | undefined;
    /**
     * 获取载荷信息
     */
    get payload(): NzSafeAny;
    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param offsetSeconds 偏移量
     */
    isExpired(offsetSeconds?: number): boolean | null;
}
