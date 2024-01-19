import { Direction } from '@angular/cdk/bidi';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare const HTML_DIR = "dir";
export declare const RTL_DIRECTION = "direction";
export declare const RTL_NZ_COMPONENTS: string[];
export declare const RTL_DELON_COMPONENTS: string[];
export declare const LTR = "ltr";
export declare const RTL = "rtl";
export declare class RTLService {
    private readonly d;
    private readonly nz;
    private readonly delon;
    private readonly platform;
    private readonly doc;
    private readonly srv;
    private _dir;
    /**
     * Get or Set the current text direction
     *
     * 获取或设置当前文字方向
     */
    get dir(): Direction;
    set dir(value: Direction);
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     */
    get nextDir(): Direction;
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     */
    get change(): Observable<Direction>;
    constructor();
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle(): void;
    private updateHtml;
    private updateLibConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<RTLService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RTLService>;
}
