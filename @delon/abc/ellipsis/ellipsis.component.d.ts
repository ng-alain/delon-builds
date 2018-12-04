import { Renderer2, ElementRef } from '@angular/core';
export declare class EllipsisComponent {
    /** 在按照行数截取下最大的行数，超过则截取省略 */
    lines: number;
    constructor(el: ElementRef, render: Renderer2);
}
