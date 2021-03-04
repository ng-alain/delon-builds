import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Optional, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, SettingsService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';
const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
let LayoutDefaultNavComponent = class LayoutDefaultNavComponent {
    constructor(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, directionality) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.sanitizer = sanitizer;
        this.doc = doc;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.openStrictly = false;
        this.maxLevelIcon = 3;
        this.select = new EventEmitter();
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    getLinkNode(node) {
        node = node.nodeName === 'A' ? node : node.parentNode;
        return node.nodeName !== 'A' ? null : node;
    }
    floatingClickHandle(e) {
        e.stopPropagation();
        const linkNode = this.getLinkNode(e.target);
        if (linkNode == null) {
            return false;
        }
        const id = +linkNode.dataset.id;
        // Should be ingore children title trigger event
        if (isNaN(id)) {
            return false;
        }
        let item;
        this.menuSrv.visit(this.list, (i) => {
            if (!item && i._id === id) {
                item = i;
            }
        });
        this.to(item);
        this.hideAll();
        e.preventDefault();
        return false;
    }
    clearFloating() {
        if (!this.floatingEl)
            return;
        this.floatingEl.removeEventListener('click', this.floatingClickHandle.bind(this));
        // fix ie: https://github.com/ng-alain/delon/issues/52
        if (this.floatingEl.hasOwnProperty('remove')) {
            this.floatingEl.remove();
        }
        else if (this.floatingEl.parentNode) {
            this.floatingEl.parentNode.removeChild(this.floatingEl);
        }
    }
    genFloating() {
        this.clearFloating();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    }
    genSubNode(linkNode, item) {
        const id = `_sidebar-nav-${item._id}`;
        const childNode = item.badge ? linkNode.nextElementSibling.nextElementSibling : linkNode.nextElementSibling;
        const node = childNode.cloneNode(true);
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', () => {
            node.classList.remove(SHOWCLS);
        }, false);
        this.floatingEl.appendChild(node);
        return node;
    }
    hideAll() {
        const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    }
    // calculate the node position values.
    calPos(linkNode, node) {
        const rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        const scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        const docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
        const spacing = 5;
        let offsetHeight = -spacing;
        if (docHeight < rect.top + node.clientHeight) {
            offsetHeight = rect.top + node.clientHeight - docHeight + spacing;
        }
        node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
        if (this.dir === 'rtl') {
            node.style.right = `${rect.width + spacing}px`;
        }
        else {
            node.style.left = `${rect.right + spacing}px`;
        }
    }
    showSubMenu(e, item) {
        if (this.collapsed !== true) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            e.preventDefault();
            const linkNode = e.target;
            this.genFloating();
            const subNode = this.genSubNode(linkNode, item);
            this.hideAll();
            subNode.classList.add(SHOWCLS);
            this.calPos(linkNode, subNode);
        });
    }
    to(item) {
        this.select.emit(item);
        if (item.disabled)
            return;
        if (item.externalLink) {
            const { defaultView } = this.doc;
            if (item.target === '_blank') {
                defaultView.open(item.externalLink);
            }
            else {
                defaultView.location.href = item.externalLink;
            }
            return;
        }
        this.ngZone.run(() => this.router.navigateByUrl(item.link));
    }
    toggleOpen(item) {
        if (!this.openStrictly) {
            this.menuSrv.visit(this.list, (i) => {
                if (i !== item)
                    i._open = false;
            });
            let pItem = item._parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem._parent;
            }
        }
        item._open = !item._open;
        this.cdr.markForCheck();
    }
    _click() {
        if (this.isPad && this.collapsed) {
            this.openAside(false);
            this.hideAll();
        }
    }
    _docClick() {
        if (this.collapsed) {
            this.hideAll();
        }
    }
    openedByUrl(url) {
        const { menuSrv, recursivePath, openStrictly } = this;
        let findItem = menuSrv.getHit(this.menuSrv.menus, url, recursivePath, (i) => {
            i._selected = false;
            if (!openStrictly) {
                i._open = false;
            }
        });
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            if (!openStrictly) {
                findItem._open = true;
            }
            findItem = findItem._parent;
        } while (findItem);
    }
    ngOnInit() {
        var _a;
        const { doc, router, menuSrv, settings, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        this.openedByUrl(router.url);
        this.ngZone.runOutsideAngular(() => this.genFloating());
        menuSrv.change.pipe(untilDestroyed(this)).subscribe(data => {
            menuSrv.visit(data, (i, _p, depth) => {
                i._text = this.sanitizer.bypassSecurityTrustHtml(i.text);
                i._needIcon = depth <= this.maxLevelIcon && !!i.icon;
                if (!i._aclResult) {
                    if (this.disabledAcl) {
                        i.disabled = true;
                    }
                    else {
                        i._hidden = true;
                    }
                }
                if (this.openStrictly) {
                    i._open = i.open != null ? i.open : false;
                }
            });
            this.list = menuSrv.menus.filter((w) => w._hidden !== true);
            cdr.detectChanges();
        });
        router.events.pipe(untilDestroyed(this)).subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.openedByUrl(e.urlAfterRedirects);
                this.underPad();
                this.cdr.detectChanges();
            }
        });
        settings.notify
            .pipe(untilDestroyed(this), filter(t => t.type === 'layout' && t.name === 'collapsed'))
            .subscribe(() => this.clearFloating());
        this.underPad();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(untilDestroyed(this)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.clearFloating();
    }
    // #region Under pad
    get isPad() {
        return this.doc.defaultView.innerWidth < 768;
    }
    underPad() {
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout(() => this.openAside(true));
        }
    }
    openAside(status) {
        this.settings.setLayout('collapsed', status);
    }
};
LayoutDefaultNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-nav',
                template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li *ngIf=\"i._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i._open\">\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a *ngIf=\"i.children.length > 0\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{ i.badgeStatus }}\" [class.badge-dot]=\"i.badgeDot\">\n        <em>{{ i.badge }}</em>\n      </div>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n",
                host: {
                    '(click)': '_click()',
                    '(document:click)': '_docClick()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
LayoutDefaultNavComponent.ctorParameters = () => [
    { type: MenuService },
    { type: SettingsService },
    { type: Router },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
LayoutDefaultNavComponent.propDecorators = {
    disabledAcl: [{ type: Input }],
    autoCloseUnderPad: [{ type: Input }],
    recursivePath: [{ type: Input }],
    openStrictly: [{ type: Input }],
    maxLevelIcon: [{ type: Input }],
    select: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "disabledAcl", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "autoCloseUnderPad", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "recursivePath", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "openStrictly", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
LayoutDefaultNavComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [MenuService,
        SettingsService,
        Router,
        Renderer2,
        ChangeDetectorRef,
        NgZone,
        DomSanitizer, Object, Directionality])
], LayoutDefaultNavComponent);
export { LayoutDefaultNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQW1CLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEMsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7QUFDN0MsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7SUFjL0IseUJBQXlCLFNBQXpCLHlCQUF5QjtJQXVCcEMsWUFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLFNBQXVCLEVBQ0wsR0FBUSxFQUNkLGNBQThC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ekMseUJBQXlCLENBOFFyQztTQTlRWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudSwgTWVudUlubmVyLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2IGV4dGVuZHMgTWVudUlubmVyIHtcbiAgX25lZWRJY29uPzogYm9vbGVhbjtcbiAgX3RleHQ/OiBTYWZlSHRtbDtcbn1cblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdfZG9jQ2xpY2soKScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkQWNsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQ2xvc2VVbmRlclBhZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVjdXJzaXZlUGF0aDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3BlblN0cmljdGx5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXhMZXZlbEljb246IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgYm9keUVsOiBIVE1MQm9keUVsZW1lbnQ7XG4gIHByaXZhdGUgZmxvYXRpbmdFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5TdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhMZXZlbEljb24gPSAzO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xuXG4gIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICkge31cblxuICBwcml2YXRlIGdldExpbmtOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBub2RlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0EnID8gbm9kZSA6IChub2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lICE9PSAnQScgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IHRoaXMuZ2V0TGlua05vZGUoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChsaW5rTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gK2xpbmtOb2RlLmRhdGFzZXQhLmlkITtcbiAgICAvLyBTaG91bGQgYmUgaW5nb3JlIGNoaWxkcmVuIHRpdGxlIHRyaWdnZXIgZXZlbnRcbiAgICBpZiAoaXNOYU4oaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGl0ZW06IE5hdjtcbiAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCAoaTogTmF2KSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gJiYgaS5faWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG8oaXRlbSEpO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsb2F0aW5nRWwpIHJldHVybjtcbiAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9pZH1gO1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGl0ZW0uYmFkZ2UgPyBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchLm5leHRFbGVtZW50U2libGluZyEgOiBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGwoKTogdm9pZCB7XG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEZMT0FUSU5HQ0xTKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCB0aGlzLmJvZHlFbC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgc3BhY2luZyA9IDU7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IC1zcGFjaW5nO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0ICsgc3BhY2luZztcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgbm9kZS5zdHlsZS5yaWdodCA9IGAke3JlY3Qud2lkdGggKyBzcGFjaW5nfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIHNwYWNpbmd9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICB0aGlzLmdlbkZsb2F0aW5nKCk7XG4gICAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcbiAgICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB0byhpdGVtOiBNZW51KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGl0ZW0uZXh0ZXJuYWxMaW5rKSB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRWaWV3IH0gPSB0aGlzLmRvYztcbiAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgZGVmYXVsdFZpZXcub3BlbihpdGVtLmV4dGVybmFsTGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0Vmlldy5sb2NhdGlvbi5ocmVmID0gaXRlbS5leHRlcm5hbExpbms7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ubGluayEpKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oaXRlbTogTmF2KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMubGlzdCwgKGk6IE5hdikgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9wYXJlbnQgYXMgTmF2O1xuICAgICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgICAgcEl0ZW0gPSBwSXRlbS5fcGFyZW50ITtcbiAgICAgIH1cbiAgICB9XG4gICAgaXRlbS5fb3BlbiA9ICFpdGVtLl9vcGVuO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBfZG9jQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWVudVNydiwgcmVjdXJzaXZlUGF0aCwgb3BlblN0cmljdGx5IH0gPSB0aGlzO1xuICAgIGxldCBmaW5kSXRlbTogTmF2IHwgbnVsbCA9IG1lbnVTcnYuZ2V0SGl0KHRoaXMubWVudVNydi5tZW51cywgdXJsISwgcmVjdXJzaXZlUGF0aCwgKGk6IE5hdikgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghb3BlblN0cmljdGx5KSB7XG4gICAgICAgIGkuX29wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmluZEl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghb3BlblN0cmljdGx5KSB7XG4gICAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX3BhcmVudCE7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBkb2MsIHJvdXRlciwgbWVudVNydiwgc2V0dGluZ3MsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5vcGVuZWRCeVVybChyb3V0ZXIudXJsKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmdlbkZsb2F0aW5nKCkpO1xuICAgIG1lbnVTcnYuY2hhbmdlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIG1lbnVTcnYudmlzaXQoZGF0YSwgKGk6IE5hdiwgX3AsIGRlcHRoKSA9PiB7XG4gICAgICAgIGkuX3RleHQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQhKTtcbiAgICAgICAgaS5fbmVlZEljb24gPSBkZXB0aCEgPD0gdGhpcy5tYXhMZXZlbEljb24gJiYgISFpLmljb247XG4gICAgICAgIGlmICghaS5fYWNsUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRBY2wpIHtcbiAgICAgICAgICAgIGkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcGVuU3RyaWN0bHkpIHtcbiAgICAgICAgICBpLl9vcGVuID0gaS5vcGVuICE9IG51bGwgPyBpLm9wZW4gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBtZW51U3J2Lm1lbnVzLmZpbHRlcigodzogTmF2KSA9PiB3Ll9oaWRkZW4gIT09IHRydWUpO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLm9wZW5lZEJ5VXJsKGUudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgICAgICB0aGlzLnVuZGVyUGFkKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXR0aW5ncy5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB1bnRpbERlc3Ryb3llZCh0aGlzKSxcbiAgICAgICAgZmlsdGVyKHQgPT4gdC50eXBlID09PSAnbGF5b3V0JyAmJiB0Lm5hbWUgPT09ICdjb2xsYXBzZWQnKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhckZsb2F0aW5nKCkpO1xuICAgIHRoaXMudW5kZXJQYWQoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IS5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=