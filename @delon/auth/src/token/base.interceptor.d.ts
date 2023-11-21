import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlainAuthConfig } from '@delon/util/config';
export declare function isAnonymous(req: HttpRequest<unknown>, options: AlainAuthConfig): boolean;
export declare function throwErr(req: HttpRequest<unknown>, options: AlainAuthConfig): Observable<HttpEvent<unknown>>;
