import { HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
import { EnvironmentProviders, InjectionToken, OnDestroy } from "@angular/core";
import { AlainMockConfig } from "@delon/util/config";
export type MockCallback = any | Observable<any> | Promise<any>;
export interface MockOptions {
  data?: any;
}
export interface MockCachedRule {
  [key: string]: any;
  method: string;
  url: string;
  martcher: RegExp | null;
  segments: string[];
  callback(req: MockRequest): MockCallback;
}
export interface MockRule {
  [key: string]: any;
  method: string;
  url: string;
  /** 路由参数 */
  params?: any;
  callback(req: MockRequest): MockCallback;
}
export interface MockRequest {
  /** 路由参数 */
  params?: any;
  /** URL参数 */
  queryString?: any;
  headers?: any;
  body?: any;
  /** 原始 `HttpRequest` */
  original: HttpRequest<any>;
}
export declare class MockStatusError {
  status: number;
  error?: any | undefined;
  statusText?: string;
  constructor(status: number, error?: any | undefined);
}
export declare class MockService implements OnDestroy {
  private readonly cogSrv;
  private readonly options;
  private cached;
  readonly config: AlainMockConfig;
  constructor();
  /**
   * Reset request data
   *
   * 重新设置请求数据
   */
  setData(data: any): void;
  private applyMock;
  private realApplyMock;
  private genRule;
  private outputError;
  getRule(method: string | null | undefined, url: string): MockRule | null;
  clearCache(): void;
  get rules(): MockCachedRule[];
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<MockService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare const mockInterceptor: HttpInterceptorFn;
export declare const DELON_MOCK_CONFIG: InjectionToken<MockOptions>;
export declare function provideMockConfig(config?: MockOptions): EnvironmentProviders;
/**
 * Used to simulate delays
 */
export declare function delay(ms: number): Promise<void>;
/**
 * Return a random number
 */
export declare function r(min?: number, max?: number): number;