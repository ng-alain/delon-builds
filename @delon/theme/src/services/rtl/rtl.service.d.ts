import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { SettingsService } from '../settings/settings.service';
export declare const HTML_DIR = "dir";
export declare const RTL_DIRECTION = "direction";
export declare const RTL_NZ_COMPONENTS: string[];
export declare const RTL_DELON_COMPONENTS: string[];
export declare const LTR = "ltr";
export declare const RTL = "rtl";
export declare class RTLService {
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
    constructor(srv: SettingsService, nz: NzConfigService, delon: AlainConfigService, platform: Platform, doc: any);
    private updateHtml;
    private updateLibConfig;
}
