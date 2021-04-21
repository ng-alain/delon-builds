import { EventEmitter, TemplateRef } from '@angular/core';
import { Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface G2PieData {
    x: any;
    y: number;
    [key: string]: any;
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
    subTitle: string | TemplateRef<void>;
    total: string | number | TemplateRef<void>;
    height: number;
    hasLegend: boolean;
    inner: number;
    padding: number | number[] | 'auto';
    percent: number;
    tooltip: boolean;
    lineWidth: number;
    blockMaxWidth: number;
    select: boolean;
    valueFormat: (y: number) => string;
    data: G2PieData[];
    colors: any[];
    interaction: G2InteractionType;
    ratio: G2PieRatio;
    clickItem: EventEmitter<G2PieClickItem>;
    get block(): boolean;
    private fixData;
    install(): void;
    changeData(): void;
    private genLegend;
    _click(i: number): void;
    onChanges(): void;
}
