import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenModel } from '../token/interface';
import * as i0 from "@angular/core";
export type SocialOpenType = 'href' | 'window';
export declare class SocialService implements OnDestroy {
    private readonly tokenService;
    private readonly doc;
    private readonly router;
    private _win;
    private _winTime;
    private observer;
    /**
     * 使用窗体打开授权页，返回值是 `Observable<ITokenModel>` 用于订阅授权后返回的结果
     *
     * @param url 获取授权地址
     * @param callback 回调路由地址
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    login(url: string, callback?: string, options?: {
        type?: 'window';
        windowFeatures?: string;
    }): Observable<ITokenModel>;
    /**
     * 跳转至授权页
     *
     * @param url 获取授权地址
     * @param callback 回调路由地址
     */
    login(url: string, callback?: string, options?: {
        type?: 'href';
    }): void;
    /**
     * 授权成功后的回调处理
     *
     * @param rawData 指定回调认证信息，为空时从根据当前URL解析
     */
    callback(rawData?: ITokenModel | string | null): ITokenModel;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocialService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SocialService>;
}
