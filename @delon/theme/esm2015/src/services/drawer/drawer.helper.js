import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Observable } from 'rxjs';
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
                nzWrapClassName: '',
            },
        }, options);
        return new Observable((observer) => {
            const { size, footer, footerHeight, drawerOptions } = options;
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else if (!drawerOptions.nzWidth) {
                defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + ` drawer-${options.size}`).trim();
                delete drawerOptions.nzWrapClassName;
            }
            if (footer) {
                // The 24 value is @drawer-body-padding
                defaultOptions.nzBodyStyle = {
                    'padding-bottom.px': footerHeight + 24,
                };
            }
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), drawerOptions));
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
        const drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, Object.assign(Object.assign({}, options), { drawerOptions }));
    }
}
/** @nocollapse */ DrawerHelper.ɵfac = function DrawerHelper_Factory(t) { return new (t || DrawerHelper)(i0.ɵɵinject(i1.NzDrawerService)); };
/** @nocollapse */ DrawerHelper.ɵprov = i0.ɵɵdefineInjectable({ token: DrawerHelper, factory: DrawerHelper.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerHelper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.NzDrawerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE9BQU8sRUFBZ0MsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7O0FBOEI1Qzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUU1Qzs7T0FFRztJQUNILE1BQU0sQ0FDSixLQUFrRCxFQUNsRCxJQUttQixFQUNuQixNQUFrQixFQUNsQixPQUE2QjtRQUU3QixPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBOEIsQ0FBQztZQUNyRixNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixPQUFPLEVBQUUsS0FBa0I7YUFDNUIsQ0FBQztZQUVGLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixjQUFjLENBQ1osYUFBYyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksYUFBYyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6RyxHQUFHLE9BQVEsQ0FBQyxJQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxDQUFDLGFBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxhQUFjLENBQUMsZUFBZSxHQUFHLFdBQVcsT0FBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RHLE9BQU8sYUFBYyxDQUFDLGVBQWUsQ0FBQzthQUN2QztZQUVELElBQUksTUFBTSxFQUFFO2dCQUNWLHVDQUF1QztnQkFDdkMsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsbUJBQW1CLEVBQUUsWUFBYSxHQUFHLEVBQUU7aUJBQ3hDLENBQUM7YUFDSDtZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxpQ0FBTSxjQUFjLEdBQUssYUFBYSxFQUFHLENBQUM7WUFDekUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxPQUFRLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQ0osS0FBa0QsRUFDbEQsSUFLbUIsRUFDbkIsTUFBa0IsRUFDbEIsT0FBNkI7UUFFN0IsTUFBTSxhQUFhLG1CQUNqQixjQUFjLEVBQUUsS0FBSyxJQUNsQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQ3RDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGtDQUFPLE9BQU8sS0FBRSxhQUFhLElBQUcsQ0FBQztJQUN6RSxDQUFDOzsyRkF4RlUsWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQyxNQUFNO3VGQUNuQixZQUFZO2NBRHhCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJSZWYsIE56RHJhd2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvIzoi6XlgLzkuLrmlbDlgLznsbvlnovvvIzliJnmoLnmja4gYG56UGxhY2VtZW50YCDoh6rliqjovazljJbkuLogYG56SGVpZ2h0YCDmiJYgYG56V2lkdGhg77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAqXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIOaKveWxiei+heWKqeexu1xuICpcbiAqICoq5rOo5oSP77yaKiog5p6E5bu657uT5p6c6YO95Y+v6KKr6K6i6ZiF77yM5L2G5rC46L+c6YO95LiN5Lya6Kem5Y+RIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiBAZXhhbXBsZVxuICogdGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAqIC8vIOaIkOWKn1xuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XG4gKiAvLyDlhbPpl61cbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxiVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIGNvbXA6XG4gICAgICB8IFRlbXBsYXRlUmVmPHtcbiAgICAgICAgICAkaW1wbGljaXQ6IE56U2FmZUFueTtcbiAgICAgICAgICBkcmF3ZXJSZWY6IE56RHJhd2VyUmVmO1xuICAgICAgICB9PlxuICAgICAgfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdtZCcsXG4gICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgZm9vdGVySGVpZ2h0OiA1MCxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zIGFzIERyYXdlckhlbHBlck9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelRpdGxlOiB0aXRsZSBhcyBOelNhZmVBbnksXG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW1xuICAgICAgICAgIGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXG4gICAgICAgIF0gPSBvcHRpb25zIS5zaXplO1xuICAgICAgfSBlbHNlIGlmICghZHJhd2VyT3B0aW9ucyEubnpXaWR0aCkge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucyEubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zIS5zaXplfWApLnRyaW0oKTtcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAvLyBUaGUgMjQgdmFsdWUgaXMgQGRyYXdlci1ib2R5LXBhZGRpbmdcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tLnB4JzogZm9vdGVySGVpZ2h0ISArIDI0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmRyYXdlck9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxie+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKi9cbiAgc3RhdGljKFxuICAgIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIGNvbXA6XG4gICAgICB8IFRlbXBsYXRlUmVmPHtcbiAgICAgICAgICAkaW1wbGljaXQ6IE56U2FmZUFueTtcbiAgICAgICAgICBkcmF3ZXJSZWY6IE56RHJhd2VyUmVmO1xuICAgICAgICB9PlxuICAgICAgfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSB7XG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAuLi4ob3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgZHJhd2VyT3B0aW9ucyB9KTtcbiAgfVxufVxuIl19