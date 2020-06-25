import { Platform } from '@angular/cdk/platform';
import { ElementRef, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
export declare class ImageDirective implements OnChanges, OnInit {
    private http;
    private platform;
    src: string;
    size: number;
    error: string;
    useHttp: boolean;
    private inited;
    private imgEl;
    constructor(el: ElementRef<HTMLImageElement>, configSrv: AlainConfigService, http: _HttpClient, platform: Platform);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    private update;
    private getByHttp;
    private updateError;
    private setError;
}
