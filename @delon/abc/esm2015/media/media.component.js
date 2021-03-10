import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber, ZoneOutside } from '@delon/util/decorator';
import { MediaService } from './media.service';
export class MediaComponent {
    constructor(el, renderer, srv, ngZone, platform) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify().subscribe(() => this.initDelay());
    }
    get player() {
        return this._p;
    }
    initDelay() {
        this.time = setTimeout(() => this.init(), this.delay);
    }
    init() {
        if (!window.Plyr) {
            throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);
        }
        this.ensureElement();
        const player = (this._p = new Plyr(this.videoEl, Object.assign({}, this.srv.cog.options)));
        player.on('ready', () => this.ready.next(player));
        this.uploadSource();
    }
    ensureElement() {
        const { type } = this;
        let el = this.el.nativeElement.querySelector(type);
        if (!el) {
            el = this.renderer.createElement(type);
            el.controls = true;
            this.el.nativeElement.appendChild(el);
        }
        this.videoEl = el;
    }
    destroy() {
        if (this._p) {
            this._p.destroy();
        }
    }
    uploadSource() {
        const { source, type } = this;
        this._p.source = typeof source === 'string' ? { type, sources: [{ src: source }] } : source;
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv.load();
    }
    ngOnChanges(changes) {
        this.srv.cog = { options: this.options };
        if (changes.source && this._p) {
            this.uploadSource();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.time);
        this.destroy();
        this._p = null;
        this.notify$.unsubscribe();
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'media',
                exportAs: 'mediaComponent',
                template: `<ng-content></ng-content>`,
                host: {
                    '[style.display]': `'block'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
MediaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaService },
    { type: NgZone },
    { type: Platform }
];
MediaComponent.propDecorators = {
    type: [{ type: Input }],
    source: [{ type: Input }],
    options: [{ type: Input }],
    delay: [{ type: Input }],
    ready: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], MediaComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaComponent.prototype, "initDelay", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFlLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWdCL0MsTUFBTSxPQUFPLGNBQWM7SUFrQnpCLFlBQ1UsRUFBMkIsRUFDM0IsUUFBbUIsRUFDbkIsR0FBaUIsRUFDbEIsTUFBYyxFQUNiLFFBQWtCO1FBSmxCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWZuQixTQUFJLEdBQWtCLE9BQU8sQ0FBQztRQUdmLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQWF2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFaRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJ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TztnQkFDakIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLFNBQVM7aUJBQzdCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTdCQyxVQUFVO1lBT1YsU0FBUztZQU9GLFlBQVk7WUFYbkIsTUFBTTtZQVJDLFFBQVE7OzttQkEyQ2QsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxNQUFNOztBQURpQjtJQUFkLFdBQVcsRUFBRTs7NkNBQVc7QUFrQmxDO0lBREMsV0FBVyxFQUFFOzs7OytDQUdiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGx5ck1lZGlhU291cmNlLCBQbHlyTWVkaWFUeXBlIH0gZnJvbSAnLi9wbHlyLnR5cGVzJztcblxuZGVjbGFyZSBjb25zdCBQbHlyOiBOelNhZmVBbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lZGlhJyxcbiAgZXhwb3J0QXM6ICdtZWRpYUNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgX3A6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSB2aWRlb0VsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB0aW1lOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbm90aWZ5JDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpIHR5cGU6IFBseXJNZWRpYVR5cGUgPSAndmlkZW8nO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyB8IFBseXJNZWRpYVNvdXJjZTtcbiAgQElucHV0KCkgb3B0aW9uczogTnpTYWZlQW55O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuXG4gIGdldCBwbGF5ZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNydjogTWVkaWFTZXJ2aWNlLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5KCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuUGx5cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gd2luZG93LlBseXIgZm91bmQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCBjZG4gb3IgbG9jYWwgcGF0aCBleGlzdHMsIHRoZSBjdXJyZW50IHJlZmVyZW5jZWQgcGF0aCBpczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB0aGlzLnNydi5jb2cudXJscyxcbiAgICAgICAgKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBsYXllciA9ICh0aGlzLl9wID0gbmV3IFBseXIodGhpcy52aWRlb0VsLCB7XG4gICAgICAuLi50aGlzLnNydi5jb2cub3B0aW9ucyxcbiAgICB9KSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyB7IHR5cGUsIHNvdXJjZXM6IFt7IHNyYzogc291cmNlIH1dIH0gOiBzb3VyY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIE1lZGlhQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29nID0geyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfTtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UgJiYgdGhpcy5fcCkge1xuICAgICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9wID0gbnVsbDtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19