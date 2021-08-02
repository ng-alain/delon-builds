import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SettingsService } from '../settings/settings.service';
export declare const HTML_DIR = "dir";
export declare const RTL_DIRECTION = "direction";
export declare const RTL_NZ_COMPONENTS: string[];
export declare const RTL_DELON_COMPONENTS: string[];
export declare const LTR = "ltr";
export declare const RTL = "rtl";
export declare class RTLService {
    private d;
    private srv;
    private nz;
    private delon;
    private platform;
    private doc;
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
    constructor(d: Directionality, srv: SettingsService, nz: NzConfigService, delon: AlainConfigService, platform: Platform, doc: NzSafeAny);
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle(): void;
    private updateHtml;
    private updateLibConfig;
}
