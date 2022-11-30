import { Observable } from 'rxjs';
import { SettingsService } from '@delon/theme';
import { LayoutDefaultOptions } from './types';
import * as i0 from "@angular/core";
export declare class LayoutDefaultService {
    private settings;
    private _options$;
    private _options;
    get options(): LayoutDefaultOptions;
    get options$(): Observable<LayoutDefaultOptions>;
    get collapsedIcon(): string;
    constructor(settings: SettingsService);
    private notify;
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options?: LayoutDefaultOptions | null): void;
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutDefaultService>;
}
