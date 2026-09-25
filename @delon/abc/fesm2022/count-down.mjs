import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewChild, ViewEncapsulation, computed, input, output } from "@angular/core";
import { addSeconds, format } from "date-fns";
import { CountdownComponent } from "ngx-countdown";
import { CommonModule } from "@angular/common";
var CountDownComponent = class CountDownComponent {
	instance;
	config = input(...ngDevMode ? [void 0, { debugName: "config" }] : /* istanbul ignore next */ []);
	target = input(...ngDevMode ? [void 0, { debugName: "target" }] : /* istanbul ignore next */ []);
	event = output();
	cfg = computed(() => {
		const value = this.target();
		const config = this.config();
		if (config) return config;
		return {
			format: `HH:mm:ss`,
			stopTime: typeof value === "number" ? addSeconds(/* @__PURE__ */ new Date(), value).valueOf() : +format(value, "t")
		};
	}, ...ngDevMode ? [{ debugName: "cfg" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CountDownComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: CountDownComponent,
		isStandalone: true,
		selector: "count-down",
		inputs: {
			config: {
				classPropertyName: "config",
				publicName: "config",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			target: {
				classPropertyName: "target",
				publicName: "target",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { event: "event" },
		viewQueries: [{
			propertyName: "instance",
			first: true,
			predicate: ["cd"],
			descendants: true
		}],
		exportAs: ["countDown"],
		ngImport: i0,
		template: `@if (cfg()) {
    <countdown #cd [config]="cfg()" (event)="event.emit($event)" />
  }`,
		isInline: true,
		dependencies: [{
			kind: "component",
			type: CountdownComponent,
			selector: "countdown",
			inputs: ["config", "render"],
			outputs: ["event"]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CountDownComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "count-down",
			exportAs: "countDown",
			template: `@if (cfg()) {
    <countdown #cd [config]="cfg()" (event)="event.emit($event)" />
  }`,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [CountdownComponent]
		}]
	}],
	propDecorators: {
		instance: [{
			type: ViewChild,
			args: ["cd", { static: false }]
		}],
		config: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "config",
				required: false
			}]
		}],
		target: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "target",
				required: false
			}]
		}],
		event: [{
			type: i0.Output,
			args: ["event"]
		}]
	}
});
const COMPONENTS = [CountDownComponent];
var CountDownModule = class CountDownModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CountDownModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CountDownModule,
		imports: [
			CommonModule,
			CountdownComponent,
			CountDownComponent
		],
		exports: [CountDownComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CountDownModule,
		imports: [
			CommonModule,
			CountdownComponent,
			COMPONENTS
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CountDownModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				CountdownComponent,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { CountDownComponent, CountDownModule };

//# sourceMappingURL=count-down.mjs.map