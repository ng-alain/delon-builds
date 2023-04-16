import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deepMerge } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/drawer";
/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * @example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
export class DrawerHelper {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     */
    create(title, comp, params, options) {
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 50,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: ''
            }
        }, options);
        return new Observable((observer) => {
            const { size, footer, footerHeight, drawerOptions } = options;
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title
            };
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else if (!drawerOptions.nzWidth) {
                defaultOptions.nzWrapClassName = `${drawerOptions.nzWrapClassName} drawer-${options.size}`.trim();
                delete drawerOptions.nzWrapClassName;
            }
            if (footer) {
                // The 24 value is @drawer-body-padding
                defaultOptions.nzBodyStyle = {
                    'padding-bottom.px': footerHeight + 24
                };
            }
            const subject = this.srv.create({ ...defaultOptions, ...drawerOptions });
            const afterClose$ = subject.afterClose.subscribe((res) => {
                if (options.exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            });
        });
    }
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    static(title, comp, params, options) {
        const drawerOptions = {
            nzMaskClosable: false,
            ...(options && options.drawerOptions)
        };
        return this.create(title, comp, params, { ...options, drawerOptions });
    }
}
DrawerHelper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DrawerHelper, deps: [{ token: i1.NzDrawerService }], target: i0.ɵɵFactoryTarget.Injectable });
DrawerHelper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DrawerHelper, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DrawerHelper, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.NzDrawerService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBZ0M5Qzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUU1Qzs7T0FFRztJQUNILE1BQU0sQ0FDSixLQUF5RCxFQUN6RCxJQUttQixFQUNuQixNQUFrQixFQUNsQixPQUE2QjtRQUU3QixPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBOEIsQ0FBQztZQUNyRixNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixPQUFPLEVBQUUsS0FBa0I7YUFDNUIsQ0FBQztZQUVGLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixjQUFjLENBQ1osYUFBYyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksYUFBYyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6RyxHQUFHLE9BQVEsQ0FBQyxJQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxDQUFDLGFBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxhQUFjLENBQUMsZUFBZSxXQUFXLE9BQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEcsT0FBTyxhQUFjLENBQUMsZUFBZSxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsdUNBQXVDO2dCQUN2QyxjQUFjLENBQUMsV0FBVyxHQUFHO29CQUMzQixtQkFBbUIsRUFBRSxZQUFhLEdBQUcsRUFBRTtpQkFDeEMsQ0FBQzthQUNIO1lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDekUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxPQUFRLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQ0osS0FBeUQsRUFDekQsSUFLbUIsRUFDbkIsTUFBa0IsRUFDbEIsT0FBNkI7UUFFN0IsTUFBTSxhQUFhLEdBQUc7WUFDcEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3RDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O3lHQXhGVSxZQUFZOzZHQUFaLFlBQVksY0FEQyxNQUFNOzJGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMsIE56RHJhd2VyUmVmLCBOekRyYXdlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvIzoi6XlgLzkuLrmlbDlgLznsbvlnovvvIzliJnmoLnmja4gYG56UGxhY2VtZW50YCDoh6rliqjovazljJbkuLogYG56SGVpZ2h0YCDmiJYgYG56V2lkdGhg77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAqXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIOaKveWxiei+heWKqeexu1xuICpcbiAqICoq5rOo5oSP77yaKiog5p6E5bu657uT5p6c6YO95Y+v6KKr6K6i6ZiF77yM5L2G5rC46L+c6YO95LiN5Lya6Kem5Y+RIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiBAZXhhbXBsZVxuICogdGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAqIC8vIOaIkOWKn1xuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XG4gKiAvLyDlhbPpl61cbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxiVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkIHwgbnVsbCxcbiAgICBjb21wOlxuICAgICAgfCBUZW1wbGF0ZVJlZjx7XG4gICAgICAgICAgJGltcGxpY2l0OiBOelNhZmVBbnk7XG4gICAgICAgICAgZHJhd2VyUmVmOiBOekRyYXdlclJlZjtcbiAgICAgICAgfT5cbiAgICAgIHwgVHlwZTxOelNhZmVBbnk+LFxuICAgIHBhcmFtcz86IE56U2FmZUFueSxcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdtZCcsXG4gICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgZm9vdGVySGVpZ2h0OiA1MCxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxOelNhZmVBbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zIGFzIERyYXdlckhlbHBlck9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelRpdGxlOiB0aXRsZSBhcyBOelNhZmVBbnlcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbXG4gICAgICAgICAgZHJhd2VyT3B0aW9ucyEubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICduekhlaWdodCcgOiAnbnpXaWR0aCdcbiAgICAgICAgXSA9IG9wdGlvbnMhLnNpemU7XG4gICAgICB9IGVsc2UgaWYgKCFkcmF3ZXJPcHRpb25zIS5ueldpZHRoKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IGAke2RyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZX0gZHJhd2VyLSR7b3B0aW9ucyEuc2l6ZX1gLnRyaW0oKTtcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAvLyBUaGUgMjQgdmFsdWUgaXMgQGRyYXdlci1ib2R5LXBhZGRpbmdcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tLnB4JzogZm9vdGVySGVpZ2h0ISArIDI0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4uZHJhd2VyT3B0aW9ucyB9KTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMhLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJ77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIGNvbXA6XG4gICAgICB8IFRlbXBsYXRlUmVmPHtcbiAgICAgICAgICAkaW1wbGljaXQ6IE56U2FmZUFueTtcbiAgICAgICAgICBkcmF3ZXJSZWY6IE56RHJhd2VyUmVmO1xuICAgICAgICB9PlxuICAgICAgfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8TnpTYWZlQW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucylcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCB7IC4uLm9wdGlvbnMsIGRyYXdlck9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==