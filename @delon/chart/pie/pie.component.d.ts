import { EventEmitter, TemplateRef } from '@angular/core';
import type { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface G2PieData {
    x: NzSafeAny;
    y: number;
    [key: string]: NzSafeAny;
}
export interface G2PieClickItem {
    item: G2PieData;
    ev: Event;
}
export interface G2PieRatio {
    /** 占比文本，默认：`占比` */
    text: string;
    /** 反比文本，默认：`反比` */
    inverse: string;
    /** 正比颜色，默认使用 `color` 值 */
    color: string;
    /** 反比颜色，默认：`#F0F2F5` */
    inverseColor: string;
}
export declare class G2PieComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_animate: BooleanInput;
    static ngAcceptInputType_hasLegend: BooleanInput;
    static ngAcceptInputType_percent: NumberInput;
    static ngAcceptInputType_tooltip: BooleanInput;
    static ngAcceptInputType_lineWidth: NumberInput;
    static ngAcceptInputType_blockMaxWidth: NumberInput;
    static ngAcceptInputType_select: BooleanInput;
    private percentColor;
    legendData: NzSafeAny[];
    isPercent: boolean;
    animate: boolean;
    color: string;
    subTitle?: string | TemplateRef<void> | null;
    total?: string | number | TemplateRef<void> | null;
    height: number;
    hasLegend: boolean;
    inner: number;
    padding: number | number[] | 'auto';
    percent?: number;
    tooltip: boolean;
    lineWidth: number;
    blockMaxWidth: number;
    select: boolean;
    valueFormat?: (y: number) => string;
    data: G2PieData[];
    colors?: string[];
    interaction: G2InteractionType;
    ratio: G2PieRatio;
    readonly clickItem: EventEmitter<G2PieClickItem>;
    block: boolean;
    private fixData;
    private updateBlock;
    install(): void;
    changeData(): void;
    private genLegend;
    _click(i: number): void;
    onChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2PieComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2PieComponent, "g2-pie", ["g2Pie"], { "animate": { "alias": "animate"; "required": false; }; "color": { "alias": "color"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; "total": { "alias": "total"; "required": false; }; "height": { "alias": "height"; "required": false; }; "hasLegend": { "alias": "hasLegend"; "required": false; }; "inner": { "alias": "inner"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "lineWidth": { "alias": "lineWidth"; "required": false; }; "blockMaxWidth": { "alias": "blockMaxWidth"; "required": false; }; "select": { "alias": "select"; "required": false; }; "valueFormat": { "alias": "valueFormat"; "required": false; }; "data": { "alias": "data"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "interaction": { "alias": "interaction"; "required": false; }; "ratio": { "alias": "ratio"; "required": false; }; }, { "clickItem": "clickItem"; }, never, never, true, never>;
}
