/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';
import { getData, toBool } from '../../utils';
export class UploadWidget extends ControlWidget {
    /**
     * @param {?} cd
     * @param {?} modalSrv
     */
    constructor(cd, modalSrv) {
        super(cd);
        this.modalSrv = modalSrv;
        this.fileList = [];
        this.btnType = '';
        this.handlePreview = (file) => {
            this.modalSrv
                .create({
                nzContent: `<img src="${file.url ||
                    file.thumbUrl}" class="img-fluid" />`,
                nzFooter: null,
            })
                .afterClose.subscribe(() => this.detectChanges());
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            type: this.ui.type || 'select',
            text: this.ui["text"] || '点击上传',
            action: this.ui["action"] || '',
            accept: this.ui["accept"] || '',
            limit: this.ui["limit"] == null ? 0 : +this.ui["limit"],
            size: this.ui.size == null ? 0 : +this.ui.size,
            fileType: this.ui["fileType"] || '',
            listType: this.ui["listType"] || 'text',
            multiple: toBool(this.ui["multiple"], false),
            name: this.ui["name"] || 'file',
            showUploadList: toBool(this.ui["showUploadList"], true),
            withCredentials: toBool(this.ui["withCredentials"], false),
            resReName: (this.ui["resReName"] || '').split('.'),
        };
        if (this.i.listType === 'picture-card')
            this.btnType = 'plus';
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui["text"] || `单击或拖动文件到该区域上传`;
            this.i.hint =
                this.ui["hint"] || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
    }
    /**
     * @param {?} args
     * @return {?}
     */
    change(args) {
        if (this.ui["change"])
            this.ui["change"](args);
        if (args.type !== 'success')
            return;
        this.notify(args.fileList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.fileList = /** @type {?} */ (list);
            this.notify(this.fileList);
            this.detectChanges();
        });
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    notify(fileList) {
        /** @type {?} */
        const res = fileList.map(item => deepGet(item.response, this.i.resReName, item.response));
        this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-upload
      [nzType]="i.type"
      [nzFileList]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzRemove]="ui.remove"
      [nzPreview]="handlePreview"
      (nzChange)="change($event)">
      <ng-container [ngSwitch]="btnType">
        <ng-container *ngSwitchCase="'plus'">
          <i class="anticon anticon-plus"></i>
          <div class="ant-upload-text" [innerHTML]="i.text"></div>
        </ng-container>
        <ng-container *ngSwitchCase="'drag'">
          <p class="ant-upload-drag-icon"><i class="anticon anticon-inbox"></i></p>
          <p class="ant-upload-text" [innerHTML]="i.text"></p>
          <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <button type="button" nz-button>
            <i class="anticon anticon-upload"></i><span [innerHTML]="i.text"></span>
          </button>
        </ng-container>
      </ng-container>
    </nz-upload>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
UploadWidget.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService }
];
if (false) {
    /** @type {?} */
    UploadWidget.prototype.i;
    /** @type {?} */
    UploadWidget.prototype.fileList;
    /** @type {?} */
    UploadWidget.prototype.btnType;
    /** @type {?} */
    UploadWidget.prototype.handlePreview;
    /** @type {?} */
    UploadWidget.prototype.modalSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQWlDLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0Q5QyxNQUFNLG1CQUFvQixTQUFRLGFBQWE7Ozs7O0lBSzdDLFlBQVksRUFBcUIsRUFBVSxRQUF3QjtRQUNqRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEK0IsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7d0JBSDFDLEVBQUU7dUJBQ2pCLEVBQUU7NkJBMERJLENBQUMsSUFBZ0IsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsYUFBYSxJQUFJLENBQUMsR0FBRztvQkFDOUIsSUFBSSxDQUFDLFFBQVEsd0JBQXdCO2dCQUN2QyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7aUJBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNyRDtLQTlEQTs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFFBQVE7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVMsTUFBTTtZQUM1QixN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R0FBRyxDQUFDLEdBQUcsRUFBRSxFQUMxQyxLQUFLLENBQ04sQ0FBQzs7OztZQXhHTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQW5EMkIsaUJBQWlCO1lBRUwsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG56LXVwbG9hZFxyXG4gICAgICBbbnpUeXBlXT1cImkudHlwZVwiXHJcbiAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpBY3Rpb25dPVwiaS5hY3Rpb25cIlxyXG4gICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxyXG4gICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcclxuICAgICAgW256U2l6ZV09XCJpLnNpemVcIlxyXG4gICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcclxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcclxuICAgICAgW256RGF0YV09XCJ1aS5kYXRhXCJcclxuICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXHJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxyXG4gICAgICBbbnpOYW1lXT1cImkubmFtZVwiXHJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxyXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxyXG4gICAgICBbbnpSZW1vdmVdPVwidWkucmVtb3ZlXCJcclxuICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcclxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImJ0blR5cGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGx1cydcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZHJhZydcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1pbmJveFwiPjwvaT48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIiBbaW5uZXJIVE1MXT1cImkuaGludFwiPjwvcD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXVwbG9hZFwiPjwvaT48c3BhbiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotdXBsb2FkPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaTogYW55O1xyXG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcclxuICBidG5UeXBlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBtb2RhbFNydjogTnpNb2RhbFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICB0eXBlOiB0aGlzLnVpLnR5cGUgfHwgJ3NlbGVjdCcsXHJcbiAgICAgIHRleHQ6IHRoaXMudWkudGV4dCB8fCAn54K55Ye75LiK5LygJyxcclxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcclxuICAgICAgYWNjZXB0OiB0aGlzLnVpLmFjY2VwdCB8fCAnJyxcclxuICAgICAgbGltaXQ6IHRoaXMudWkubGltaXQgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5saW1pdCxcclxuICAgICAgc2l6ZTogdGhpcy51aS5zaXplID09IG51bGwgPyAwIDogK3RoaXMudWkuc2l6ZSxcclxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXHJcbiAgICAgIGxpc3RUeXBlOiB0aGlzLnVpLmxpc3RUeXBlIHx8ICd0ZXh0JyxcclxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh0aGlzLnVpLm11bHRpcGxlLCBmYWxzZSksXHJcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXHJcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2wodGhpcy51aS5zaG93VXBsb2FkTGlzdCwgdHJ1ZSksXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdG9Cb29sKHRoaXMudWkud2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXHJcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLmkubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XHJcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xyXG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmJ0blR5cGUgPSAnZHJhZyc7XHJcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xyXG4gICAgICB0aGlzLmkuaGludCA9XHJcbiAgICAgICAgdGhpcy51aS5oaW50IHx8IGDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XHJcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xyXG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XHJcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcclxuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmZpbGVMaXN0KTtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vdGlmeShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XHJcbiAgICBjb25zdCByZXMgPSBmaWxlTGlzdC5tYXAoaXRlbSA9PlxyXG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxyXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgdGhpcy5tb2RhbFNydlxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICBuekNvbnRlbnQ6IGA8aW1nIHNyYz1cIiR7ZmlsZS51cmwgfHxcclxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXHJcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgfTtcclxufVxyXG4iXX0=