import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ITokenModel } from '../interface';
export declare class SimpleTokenModel implements ITokenModel {
    [key: string]: NzSafeAny;
    token: string | null | undefined;
    expired?: number;
}
