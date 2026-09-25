import * as i0 from "@angular/core";
import { Directive, ElementRef, NgModule, afterNextRender, booleanAttribute, inject, input, numberAttribute, output } from "@angular/core";
import { take, timer } from "rxjs";
var AutoFocusDirective = class AutoFocusDirective {
	el = inject(ElementRef).nativeElement;
	enabled = input(true, {
		...ngDevMode ? { debugName: "enabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	delay = input(25, {
		...ngDevMode ? { debugName: "delay" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	focus = output();
	constructor() {
		afterNextRender(() => {
			if (this.enabled()) timer(this.delay()).pipe(take(1)).subscribe(() => {
				this.el.focus({ preventScroll: false });
				this.focus.emit();
			});
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoFocusDirective,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: AutoFocusDirective,
		isStandalone: true,
		selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]",
		inputs: {
			enabled: {
				classPropertyName: "enabled",
				publicName: "enabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			delay: {
				classPropertyName: "delay",
				publicName: "delay",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { focus: "focus" },
		exportAs: ["autoFocus"],
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AutoFocusDirective,
	decorators: [{
		type: Directive,
		args: [{
			selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]",
			exportAs: "autoFocus"
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		enabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "enabled",
				required: false
			}]
		}],
		delay: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "delay",
				required: false
			}]
		}],
		focus: [{
			type: i0.Output,
			args: ["focus"]
		}]
	}
});
const COMPONENTS = [AutoFocusDirective];
var AutoFocusModule = class AutoFocusModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoFocusModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoFocusModule,
		imports: [AutoFocusDirective],
		exports: [AutoFocusDirective]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoFocusModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AutoFocusModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: COMPONENTS,
			exports: COMPONENTS
		}]
	}]
});
export { AutoFocusDirective, AutoFocusModule };

//# sourceMappingURL=auto-focus.mjs.map