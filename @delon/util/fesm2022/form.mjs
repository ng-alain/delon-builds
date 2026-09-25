import { isChinese, isColor, isDecimal, isIdCard, isInt, isIp, isMobile, isNum, isUrl } from "@delon/util/format";
var _Validators = class {
	static num(control) {
		return isNum(control.value) ? null : { num: true };
	}
	static int(control) {
		return isInt(control.value) ? null : { int: true };
	}
	static decimal(control) {
		return isDecimal(control.value) ? null : { decimal: true };
	}
	static idCard(control) {
		return isIdCard(control.value) ? null : { idCard: true };
	}
	static mobile(control) {
		return isMobile(control.value) ? null : { mobile: true };
	}
	static url(control) {
		return isUrl(control.value) ? null : { url: true };
	}
	static ip(control) {
		return isIp(control.value) ? null : { ip: true };
	}
	static color(control) {
		return isColor(control.value) ? null : { color: true };
	}
	static chinese(control) {
		return isChinese(control.value) ? null : { chinese: true };
	}
};
function MatchControl(controlName, matchingControlName) {
	return (formGroup) => {
		const control = formGroup.get(controlName);
		const matchingControl = formGroup.get(matchingControlName);
		if (matchingControl.errors && !matchingControl.errors.matchControl) return null;
		if (control.value !== matchingControl.value) matchingControl.setErrors({ matchControl: true });
		else matchingControl.setErrors(null);
		return null;
	};
}
export { MatchControl, _Validators };

//# sourceMappingURL=form.mjs.map