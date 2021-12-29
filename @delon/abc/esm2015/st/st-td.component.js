import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DrawerHelper, ModalHelper } from '@delon/theme';
import { deepMergeKey } from '@delon/util/other';
import { STComponent } from './st.component';
export class STTdComponent {
    constructor(stComp, router, modalHelper, drawerHelper) {
        this.stComp = stComp;
        this.router = router;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.n = new EventEmitter();
    }
    get routerState() {
        const { pi, ps, total } = this.stComp;
        return { pi, ps, total };
    }
    report(type) {
        this.n.emit({ type, item: this.i, col: this.c });
    }
    _checkbox(value) {
        this.i.checked = value;
        this.report('checkbox');
    }
    _radio() {
        this.data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        this.i.checked = true;
        this.report('radio');
    }
    _link(e) {
        this._stopPropagation(e);
        const res = this.c.click(this.i, this.stComp);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res, { state: this.routerState });
        }
        return false;
    }
    _stopPropagation(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    _btn(btn, ev) {
        if (ev) {
            ev.stopPropagation();
        }
        const record = this.i;
        if (btn.type === 'modal' || btn.type === 'static') {
            const { modal } = btn;
            const obj = { [modal.paramsName]: record };
            this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'](modal.component, Object.assign(Object.assign({}, obj), (modal.params && modal.params(record))), deepMergeKey({}, true, this.stComp['cog'].modal, modal))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe((res) => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            const { drawer } = btn;
            const obj = { [drawer.paramsName]: record };
            this.drawerHelper
                .create(drawer.title, drawer.component, Object.assign(Object.assign({}, obj), (drawer.params && drawer.params(record))), deepMergeKey({}, true, this.stComp['cog'].drawer, drawer))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'link') {
            const clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes, { state: this.routerState });
            }
            return;
        }
        this.btnCallback(record, btn);
    }
    btnCallback(record, btn, modal) {
        if (!btn.click)
            return;
        if (typeof btn.click === 'string') {
            switch (btn.click) {
                case 'load':
                    this.stComp.load();
                    break;
                case 'reload':
                    this.stComp.reload();
                    break;
            }
        }
        else {
            return btn.click(record, modal, this.stComp);
        }
    }
}
STTdComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-td',
                template: `
    <ng-template #btnTpl let-i>
      <ng-container *ngIf="!i.tooltip">
        <ng-template [ngTemplateOutlet]="btnItemTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </ng-container>
      <span *ngIf="i.tooltip" nz-tooltip [nzTooltipTitle]="i.tooltip">
        <ng-template [ngTemplateOutlet]="btnItemTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </span>
    </ng-template>
    <ng-template #btnItemTpl let-i>
      <a
        *ngIf="i.pop"
        nz-popconfirm
        [nzPopconfirmTitle]="i.pop.title"
        [nzIcon]="i.pop.icon"
        [nzCondition]="i.pop.condition(i)"
        [nzCancelText]="i.pop.cancelText"
        [nzOkText]="i.pop.okText"
        [nzOkType]="i.pop.okType"
        (nzOnConfirm)="_btn(i)"
        class="st__btn-text"
        [ngClass]="i.className"
        (click)="_stopPropagation($event)"
      >
        <ng-template [ngTemplateOutlet]="btnTextTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </a>
      <a *ngIf="!i.pop" (click)="_btn(i, $event)" class="st__btn-text" [ngClass]="i.className">
        <ng-template [ngTemplateOutlet]="btnTextTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </a>
    </ng-template>
    <ng-template #btnTextTpl let-i>
      <ng-container *ngIf="i.icon">
        <i
          *ngIf="!i.icon.iconfont"
          nz-icon
          [nzType]="i.icon.type"
          [nzTheme]="i.icon.theme"
          [nzSpin]="i.icon.spin"
          [nzTwotoneColor]="i.icon.twoToneColor"
        ></i>
        <i *ngIf="i.icon.iconfont" nz-icon [nzIconfont]="i.icon.iconfont"></i>
      </ng-container>
      <span [innerHTML]="i._text" [ngClass]="{ 'pl-xs': i.icon }"></span>
    </ng-template>
    <ng-template
      #render
      [ngTemplateOutlet]="c.__render!"
      [ngTemplateOutletContext]="{ $implicit: i, index: index, column: c }"
    ></ng-template>
    <ng-container *ngIf="!c.__render; else render">
      <ng-container [ngSwitch]="c.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="i.disabled"
          [ngModel]="i.checked"
          (ngModelChange)="_checkbox($event)"
        ></label>
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="i.disabled"
          [ngModel]="i.checked"
          (ngModelChange)="_radio()"
        ></label>
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [innerHTML]="i._values[cIdx]._text"
          [attr.title]="i._values[cIdx].text"
        ></a>
        <ng-container *ngIf="i._values[cIdx].text">
          <nz-tag *ngSwitchCase="'tag'" [nzColor]="i._values[cIdx].color">
            <span [innerHTML]="i._values[cIdx]._text"></span>
          </nz-tag>
          <nz-badge
            *ngSwitchCase="'badge'"
            [nzStatus]="i._values[cIdx].color"
            [nzText]="i._values[cIdx].text"
          ></nz-badge>
        </ng-container>
        <ng-template *ngSwitchCase="'widget'" st-widget-host [record]="i" [column]="c"></ng-template
        ><ng-container *ngSwitchDefault>
          <span
            *ngIf="c.safeType !== 'text'"
            [innerHTML]="i._values[cIdx]._text"
            [attr.title]="c._isTruncate ? i._values[cIdx].text : null"
          ></span>
          <span
            *ngIf="c.safeType === 'text'"
            [innerText]="i._values[cIdx]._text"
            [attr.title]="c._isTruncate ? i._values[cIdx].text : null"
          ></span>
        </ng-container>
      </ng-container>
      <ng-container *ngFor="let btn of i._values[cIdx].buttons; let last = last">
        <a *ngIf="btn.children!.length > 0" nz-dropdown [nzDropdownMenu]="btnMenu" nzOverlayClassName="st__btn-sub">
          <span [innerHTML]="btn._text"></span>
          <i nz-icon nzType="down"></i>
        </a>
        <nz-dropdown-menu #btnMenu="nzDropdownMenu">
          <ul nz-menu>
            <ng-container *ngFor="let subBtn of btn.children!">
              <li *ngIf="subBtn.type !== 'divider'" nz-menu-item [class.st__btn-disabled]="subBtn._disabled">
                <ng-template [ngTemplateOutlet]="btnTpl" [ngTemplateOutletContext]="{ $implicit: subBtn }">
                </ng-template>
              </li>
              <li *ngIf="subBtn.type === 'divider'" nz-menu-divider></li>
            </ng-container>
          </ul>
        </nz-dropdown-menu>
        <span *ngIf="btn.children!.length === 0" [class.st__btn-disabled]="btn._disabled">
          <ng-template [ngTemplateOutlet]="btnTpl" [ngTemplateOutletContext]="{ $implicit: btn }"> </ng-template>
        </span>
        <nz-divider *ngIf="!last" nzType="vertical"></nz-divider>
      </ng-container>
    </ng-container>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
STTdComponent.ctorParameters = () => [
    { type: STComponent, decorators: [{ type: Host }] },
    { type: Router },
    { type: ModalHelper },
    { type: DrawerHelper }
];
STTdComponent.propDecorators = {
    c: [{ type: Input }],
    cIdx: [{ type: Input }],
    data: [{ type: Input }],
    i: [{ type: Input }],
    index: [{ type: Input }],
    n: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdJN0MsTUFBTSxPQUFPLGFBQWE7SUFheEIsWUFDa0IsTUFBbUIsRUFDM0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLFlBQTBCO1FBSGxCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBWGpCLE1BQUMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBWXBELENBQUM7SUFWSixJQUFZLFdBQVc7UUFDckIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBU08sTUFBTSxDQUFDLElBQXFCO1FBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxD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QUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2pDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDakIsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07YUFDVDtTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7WUFsT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFIVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQS9IUSxXQUFXLHVCQThJZixJQUFJO1lBckpBLE1BQU07WUFHUSxXQUFXO1lBQXpCLFlBQVk7OztnQkFxSWxCLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO2dCQUNMLEtBQUs7b0JBQ0wsS0FBSztnQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERyYXdlckhlbHBlciwgTW9kYWxIZWxwZXIgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3N0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVENvbHVtbkJ1dHRvbiwgU1REYXRhIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUVGROb3RpZnksIF9TVFRkTm90aWZ5VHlwZSB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC10ZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNidG5UcGwgbGV0LWk+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWkudG9vbHRpcFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuSXRlbVRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPHNwYW4gKm5nSWY9XCJpLnRvb2x0aXBcIiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpLnRvb2x0aXBcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0bkl0ZW1UcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2J0bkl0ZW1UcGwgbGV0LWk+XG4gICAgICA8YVxuICAgICAgICAqbmdJZj1cImkucG9wXCJcbiAgICAgICAgbnotcG9wY29uZmlybVxuICAgICAgICBbbnpQb3Bjb25maXJtVGl0bGVdPVwiaS5wb3AudGl0bGVcIlxuICAgICAgICBbbnpJY29uXT1cImkucG9wLmljb25cIlxuICAgICAgICBbbnpDb25kaXRpb25dPVwiaS5wb3AuY29uZGl0aW9uKGkpXCJcbiAgICAgICAgW256Q2FuY2VsVGV4dF09XCJpLnBvcC5jYW5jZWxUZXh0XCJcbiAgICAgICAgW256T2tUZXh0XT1cImkucG9wLm9rVGV4dFwiXG4gICAgICAgIFtuek9rVHlwZV09XCJpLnBvcC5va1R5cGVcIlxuICAgICAgICAobnpPbkNvbmZpcm0pPVwiX2J0bihpKVwiXG4gICAgICAgIGNsYXNzPVwic3RfX2J0bi10ZXh0XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaS5jbGFzc05hbWVcIlxuICAgICAgICAoY2xpY2spPVwiX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRleHRUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2E+XG4gICAgICA8YSAqbmdJZj1cIiFpLnBvcFwiIChjbGljayk9XCJfYnRuKGksICRldmVudClcIiBjbGFzcz1cInN0X19idG4tdGV4dFwiIFtuZ0NsYXNzXT1cImkuY2xhc3NOYW1lXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UZXh0VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNidG5UZXh0VHBsIGxldC1pPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuaWNvblwiPlxuICAgICAgICA8aVxuICAgICAgICAgICpuZ0lmPVwiIWkuaWNvbi5pY29uZm9udFwiXG4gICAgICAgICAgbnotaWNvblxuICAgICAgICAgIFtuelR5cGVdPVwiaS5pY29uLnR5cGVcIlxuICAgICAgICAgIFtuelRoZW1lXT1cImkuaWNvbi50aGVtZVwiXG4gICAgICAgICAgW256U3Bpbl09XCJpLmljb24uc3BpblwiXG4gICAgICAgICAgW256VHdvdG9uZUNvbG9yXT1cImkuaWNvbi50d29Ub25lQ29sb3JcIlxuICAgICAgICA+PC9pPlxuICAgICAgICA8aSAqbmdJZj1cImkuaWNvbi5pY29uZm9udFwiIG56LWljb24gW256SWNvbmZvbnRdPVwiaS5pY29uLmljb25mb250XCI+PC9pPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbbmdDbGFzc109XCJ7ICdwbC14cyc6IGkuaWNvbiB9XCI+PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjcmVuZGVyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjLl9fcmVuZGVyIVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCwgY29sdW1uOiBjIH1cIlxuICAgID48L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYy5fX3JlbmRlcjsgZWxzZSByZW5kZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImMudHlwZVwiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiXG4gICAgICAgICAgbnotY2hlY2tib3hcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGVja2JveCgkZXZlbnQpXCJcbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCJcbiAgICAgICAgICBuei1yYWRpb1xuICAgICAgICAgIFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3JhZGlvKClcIlxuICAgICAgICA+PC9sYWJlbD5cbiAgICAgICAgPGFcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcbiAgICAgICAgICAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiXG4gICAgICAgICAgW2lubmVySFRNTF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIlxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCJcbiAgICAgICAgPjwvYT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCI+XG4gICAgICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJpLl92YWx1ZXNbY0lkeF0uY29sb3JcIj5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvbnotdGFnPlxuICAgICAgICAgIDxuei1iYWRnZVxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidiYWRnZSdcIlxuICAgICAgICAgICAgW256U3RhdHVzXT1cImkuX3ZhbHVlc1tjSWR4XS5jb2xvclwiXG4gICAgICAgICAgICBbbnpUZXh0XT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCJcbiAgICAgICAgICA+PC9uei1iYWRnZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ3dpZGdldCdcIiBzdC13aWRnZXQtaG9zdCBbcmVjb3JkXT1cImlcIiBbY29sdW1uXT1cImNcIj48L25nLXRlbXBsYXRlXG4gICAgICAgID48bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiYy5zYWZlVHlwZSAhPT0gJ3RleHQnXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCJcbiAgICAgICAgICAgIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIlxuICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiYy5zYWZlVHlwZSA9PT0gJ3RleHQnXCJcbiAgICAgICAgICAgIFtpbm5lclRleHRdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCJcbiAgICAgICAgICAgIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIlxuICAgICAgICAgID48L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidG4gb2YgaS5fdmFsdWVzW2NJZHhdLmJ1dHRvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgICA8YSAqbmdJZj1cImJ0bi5jaGlsZHJlbiEubGVuZ3RoID4gMFwiIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJidG5NZW51XCIgbnpPdmVybGF5Q2xhc3NOYW1lPVwic3RfX2J0bi1zdWJcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImJ0bi5fdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPG56LWRyb3Bkb3duLW1lbnUgI2J0bk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgIDx1bCBuei1tZW51PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViQnRuIG9mIGJ0bi5jaGlsZHJlbiFcIj5cbiAgICAgICAgICAgICAgPGxpICpuZ0lmPVwic3ViQnRuLnR5cGUgIT09ICdkaXZpZGVyJ1wiIG56LW1lbnUtaXRlbSBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJzdWJCdG4uX2Rpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc3ViQnRuIH1cIj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJzdWJCdG4udHlwZSA9PT0gJ2RpdmlkZXInXCIgbnotbWVudS1kaXZpZGVyPjwvbGk+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiYnRuLmNoaWxkcmVuIS5sZW5ndGggPT09IDBcIiBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJidG4uX2Rpc2FibGVkXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogYnRuIH1cIj4gPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bnotZGl2aWRlciAqbmdJZj1cIiFsYXN0XCIgbnpUeXBlPVwidmVydGljYWxcIj48L256LWRpdmlkZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNUVGRDb21wb25lbnQge1xuICBASW5wdXQoKSBjOiBfU1RDb2x1bW47XG4gIEBJbnB1dCgpIGNJZHg6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YTogU1REYXRhW107XG4gIEBJbnB1dCgpIGk6IFNURGF0YTtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPF9TVFRkTm90aWZ5PigpO1xuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXMuc3RDb21wO1xuICAgIHJldHVybiB7IHBpLCBwcywgdG90YWwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzdENvbXA6IFNUQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZXBvcnQodHlwZTogX1NUVGROb3RpZnlUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5uLmVtaXQoeyB0eXBlLCBpdGVtOiB0aGlzLmksIGNvbDogdGhpcy5jIH0pO1xuICB9XG5cbiAgX2NoZWNrYm94KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlcG9ydCgnY2hlY2tib3gnKTtcbiAgfVxuXG4gIF9yYWRpbygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmkuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yZXBvcnQoJ3JhZGlvJyk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICBjb25zdCByZXMgPSB0aGlzLmMuY2xpY2shKHRoaXMuaSwgdGhpcy5zdENvbXApO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIF9idG4oYnRuOiBTVENvbHVtbkJ1dHRvbiwgZXY/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldikge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuaTtcbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbCEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgTnpTYWZlQW55KShcbiAgICAgICAgbW9kYWwhLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbCEucGFyYW1zICYmIG1vZGFsIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5zdENvbXBbJ2NvZyddLm1vZGFsLCBtb2RhbClcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIhLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIhLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlciEucGFyYW1zICYmIGRyYXdlciEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5zdENvbXBbJ2NvZyddLmRyYXdlciwgZHJhd2VyKVxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBOelNhZmVBbnkpOiBOelNhZmVBbnkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLnN0Q29tcC5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5zdENvbXAucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcy5zdENvbXApO1xuICAgIH1cbiAgfVxufVxuIl19