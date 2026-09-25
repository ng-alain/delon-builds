import { deepGet } from "@delon/util/other";
import { CurrencyPipe, formatNumber } from "@angular/common";
import * as i0 from "@angular/core";
import { DEFAULT_CURRENCY_CODE, Injectable, LOCALE_ID, inject } from "@angular/core";
import { AlainConfigService } from "@delon/util/config";
function format(str, obj, needDeepGet = false) {
	return (str ?? "").replace(/\${([^}]+)}/g, (_work, key) => needDeepGet ? deepGet(obj, key.split("."), "") : (obj ?? {})[key] ?? "");
}
function formatMask(value, option) {
	if (!value) return "";
	const opt = { ...typeof option === "string" ? { mask: option } : option };
	const tokens = {
		"0": {
			pattern: /\d/,
			default: "0"
		},
		"9": { pattern: /\d/ },
		"#": { pattern: /[a-zA-Z0-9]/ },
		U: {
			pattern: /[a-zA-Z]/,
			transform: (char) => char.toLocaleUpperCase()
		},
		L: {
			pattern: /[a-zA-Z]/,
			transform: (char) => char.toLocaleLowerCase()
		},
		"*": {
			pattern: /.*/,
			transform: () => `*`
		},
		...opt.tokens
	};
	const splitValue = value.split("");
	return opt.mask.split("").reduce((res, cur) => {
		const token = tokens[cur];
		if (!token) {
			res.push(cur);
			return res;
		}
		const value = splitValue.shift() ?? "";
		if (!token.pattern.test(value)) {
			if (token.default) res.push(token.default);
			return res;
		}
		if (typeof token.transform === "function") res.push(token.transform(value));
		else res.push(value);
		return res;
	}, []).join("");
}
const REGEX_STR = {
	num: `(([-+]?\\d+\\.\\d+)|([-+]?\\d+)|([-+]?\\.\\d+))(?:[eE]([-+]?\\d+))?`,
	idCard: `(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)`,
	mobile: `^(0|\\+?86|17951)?1[0-9]{10}$`,
	url: `(((^https?:(?:\\/\\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)`,
	ip: `(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)`,
	color: `(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)`,
	chinese: `[\u4e00-\u9fa5]+`
};
function genRegex(str, flags) {
	return new RegExp(`^${str}$`, flags);
}
const REGEX = {
	num: genRegex(REGEX_STR.num),
	idCard: genRegex(REGEX_STR.idCard, "i"),
	mobile: genRegex(REGEX_STR.mobile),
	url: genRegex(REGEX_STR.url),
	ip: genRegex(REGEX_STR.ip),
	color: genRegex(REGEX_STR.color),
	chinese: genRegex(REGEX_STR.chinese)
};
function isNum(value) {
	return REGEX.num.test(value.toString());
}
function isInt(value) {
	return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
function isDecimal(value) {
	return isNum(value) && !isInt(value);
}
function isIdCard(value) {
	return REGEX.idCard.test(value);
}
function isMobile(value) {
	return REGEX.mobile.test(value);
}
function isUrl(url) {
	return REGEX.url.test(url);
}
function isIp(ip) {
	return REGEX.ip.test(ip);
}
function isColor(color) {
	return REGEX.color.test(color);
}
function isChinese(value) {
	return REGEX.chinese.test(value);
}
const CurrencyMega_Powers = [
	{
		unit: "Q",
		value: Math.pow(10, 15)
	},
	{
		unit: "T",
		value: Math.pow(10, 12)
	},
	{
		unit: "B",
		value: Math.pow(10, 9)
	},
	{
		unit: "M",
		value: Math.pow(10, 6)
	},
	{
		unit: "K",
		value: 1e3
	}
];
var CurrencyService = class CurrencyService {
	locale = inject(LOCALE_ID);
	defCurrencyCode = inject(DEFAULT_CURRENCY_CODE, { optional: true }) ?? "USD";
	cogSrv = inject(AlainConfigService);
	c;
	currencyPipe;
	constructor() {
		this.currencyPipe = new CurrencyPipe(this.locale, this.defCurrencyCode);
		this.c = this.cogSrv.merge("utilCurrency", {
			startingUnit: "yuan",
			megaUnit: {
				Q: "京",
				T: "兆",
				B: "亿",
				M: "万",
				K: "千"
			},
			precision: 2,
			ingoreZeroPrecision: true
		});
	}
	format(value, options) {
		options = {
			startingUnit: this.c.startingUnit,
			precision: this.c.precision,
			ingoreZeroPrecision: this.c.ingoreZeroPrecision,
			ngCurrency: this.c.ngCurrency,
			...options
		};
		let truthValue = Number(value);
		if (value == null || isNaN(truthValue)) return "";
		if (options.startingUnit === "cent") truthValue = truthValue / 100;
		if (options.ngCurrency != null) {
			const cur = options.ngCurrency;
			return this.currencyPipe.transform(truthValue, cur.currencyCode, cur.display, cur.digitsInfo, cur.locale ?? this.locale);
		}
		const res = formatNumber(truthValue, this.locale, `.${options.ingoreZeroPrecision ? 1 : options.precision}-${options.precision}`);
		return options.ingoreZeroPrecision ? res.replace(/(?:\.[0]+)$/g, "") : res;
	}
	mega(value, options) {
		options = {
			precision: this.c.precision,
			unitI18n: this.c.megaUnit,
			startingUnit: this.c.startingUnit,
			...options
		};
		let num = Number(value);
		const res = {
			raw: value,
			value: "",
			unit: "",
			unitI18n: ""
		};
		if (isNaN(num) || num === 0) {
			res.value = value.toString();
			return res;
		}
		if (options.startingUnit === "cent") num = num / 100;
		let abs = Math.abs(+num);
		const rounder = Math.pow(10, options.precision);
		const isNegative = num < 0;
		for (const p of CurrencyMega_Powers) {
			let reduced = abs / p.value;
			reduced = Math.round(reduced * rounder) / rounder;
			if (reduced >= 1) {
				abs = reduced;
				res.unit = p.unit;
				break;
			}
		}
		res.value = (isNegative ? "-" : "") + abs;
		res.unitI18n = options.unitI18n[res.unit];
		return res;
	}
	cny(value, options) {
		options = {
			inWords: true,
			minusSymbol: "负",
			startingUnit: this.c.startingUnit,
			...options
		};
		value = Number(value);
		if (isNaN(value)) return "";
		if (options.startingUnit === "cent") value = value / 100;
		value = value.toString();
		let integer;
		let decimal;
		[integer, decimal] = value.split(".");
		let symbol = "";
		if (integer.startsWith("-")) {
			symbol = options.minusSymbol;
			integer = integer.substring(1);
		}
		if (/^-?\d+$/.test(value)) decimal = null;
		integer = (+integer).toString();
		const inWords = options.inWords;
		const unit = {
			num: inWords ? [
				"",
				"壹",
				"贰",
				"叁",
				"肆",
				"伍",
				"陆",
				"柒",
				"捌",
				"玖",
				"点"
			] : [
				"",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六",
				"七",
				"八",
				"九",
				"点"
			],
			radice: inWords ? [
				"",
				"拾",
				"佰",
				"仟",
				"万",
				"拾",
				"佰",
				"仟",
				"亿",
				"拾",
				"佰",
				"仟",
				"万亿",
				"拾",
				"佰",
				"仟",
				"兆",
				"拾",
				"佰",
				"仟"
			] : [
				"",
				"十",
				"百",
				"千",
				"万",
				"十",
				"百",
				"千",
				"亿",
				"十",
				"百",
				"千",
				"万亿",
				"十",
				"百",
				"千",
				"兆",
				"十",
				"百",
				"千"
			],
			dec: [
				"角",
				"分",
				"厘",
				"毫"
			]
		};
		if (inWords) value = (+value).toFixed(5).toString();
		let integerRes = "";
		const integerCount = integer.length;
		if (integer === "0" || integerCount === 0) integerRes = "零";
		else {
			let cnDesc = "";
			for (let i = 0; i < integerCount; i++) {
				const n = +integer[i];
				const j = integerCount - i - 1;
				const cnZero = i > 1 && n !== 0 && integer[i - 1] === "0" ? "零" : "";
				const isEmpptyUnit = n === 0 && j % 4 !== 0 || integer.substring(i - 3, i - 3 + 4) === "0000";
				const descMark = cnDesc;
				let cnNum = unit.num[n];
				cnDesc = isEmpptyUnit ? "" : unit.radice[j];
				if (i === 0 && cnNum === "一" && cnDesc === "十") cnNum = "";
				if (n > 1 && cnNum === "二" && [
					"",
					"十",
					"百"
				].indexOf(cnDesc) === -1 && descMark !== "十") cnNum = "两";
				integerRes += cnZero + cnNum + cnDesc;
			}
		}
		let decimalRes = "";
		const decimalCount = decimal ? decimal.toString().length : 0;
		if (decimal === null) decimalRes = inWords ? "整" : "";
		else if (decimal === "0") decimalRes = "零";
		else for (let i = 0; i < decimalCount; i++) {
			if (inWords && i > unit.dec.length - 1) break;
			const n = decimal[i];
			const cnZero = n === "0" ? "零" : "";
			const cnNum = unit.num[+n];
			const cnDesc = inWords ? unit.dec[i] : "";
			decimalRes += cnZero + cnNum + cnDesc;
		}
		return symbol + (inWords ? integerRes + (decimalRes === "零" ? "元整" : `元${decimalRes}`) : integerRes + (decimalRes === "" ? "" : `点${decimalRes}`));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CurrencyService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
export { CurrencyMega_Powers, CurrencyService, REGEX, REGEX_STR, format, formatMask, isChinese, isColor, isDecimal, isIdCard, isInt, isIp, isMobile, isNum, isUrl };

//# sourceMappingURL=format.mjs.map