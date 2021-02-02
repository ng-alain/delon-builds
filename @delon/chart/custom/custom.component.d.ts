import { ElementRef, EventEmitter } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class G2CustomComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_resizeTime: NumberInput;
    height: number;
    resizeTime: number;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    install(): void;
    attachChart(): void;
    private installResizeEvent;
    static ɵfac: i0.ɵɵFactoryDef<G2CustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<G2CustomComponent, "g2,g2-custom", ["g2Custom"], { "height": "height"; "resizeTime": "resizeTime"; }, { "render": "render"; "resize": "resize"; "destroy": "destroy"; }, never, ["*"]>;
}
