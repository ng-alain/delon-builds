import { TemplateRef } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
export declare class SVContainerComponent {
    title: string | TemplateRef<void>;
    size: 'small' | 'large';
    /** 列表项间距，单位为 `px` */
    gutter: number;
    layout: 'horizontal' | 'vertical';
    labelWidth: number;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col: number;
    default: boolean;
    constructor(configSrv: AlainConfigService);
}
