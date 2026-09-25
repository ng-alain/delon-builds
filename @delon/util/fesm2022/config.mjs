import * as i0 from "@angular/core";
import { Injectable, InjectionToken, inject, makeEnvironmentProviders } from "@angular/core";
import { SIGNAL } from "@angular/core/primitives/signals";
import { deepMergeKey } from "@delon/util/other";
var AlainSVConfig = class {
	size;
	gutter;
	layout;
	col;
	default;
	labelWidth;
};
const ALAIN_CONFIG = new InjectionToken("alain-config", {
	providedIn: "root",
	factory: ALAIN_CONFIG_FACTORY
});
function ALAIN_CONFIG_FACTORY() {
	return {};
}
function provideAlainConfig(config) {
	return makeEnvironmentProviders([{
		provide: ALAIN_CONFIG,
		useValue: config
	}]);
}
var AlainConfigService = class AlainConfigService {
	config = { ...inject(ALAIN_CONFIG, { optional: true }) };
	get(componentName, key) {
		const res = this.config[componentName] ?? {};
		return key ? { [key]: res[key] } : res;
	}
	merge(componentName, ...defaultValues) {
		return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
	}
	attach(componentThis, componentName, defaultValues) {
		const data = this.merge(componentName, defaultValues);
		Object.entries(data).forEach(([key, value]) => {
			const t = componentThis;
			const s = t[key]?.[SIGNAL];
			if (s != null) s.value = value;
			else t[key] = value;
		});
	}
	set(componentName, value) {
		this.config[componentName] = {
			...this.config[componentName],
			...value
		};
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AlainConfigService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AlainConfigService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AlainConfigService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig, provideAlainConfig };

//# sourceMappingURL=config.mjs.map