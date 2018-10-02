import { ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
export declare type ContextMenuType = TemplateRef<{}> | ComponentType<{}>;
export declare class ContextMenuService {
    private overlay;
    private ref;
    private type;
    private containerRef;
    constructor(overlay: Overlay);
    private create;
    open(event: MouseEvent, ref: ContextMenuType, containerRef: ViewContainerRef, options?: OverlayConfig): false;
    close(): void;
}
