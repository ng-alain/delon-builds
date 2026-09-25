import { assertNumber } from "@delon/util/other";
function inRange(value, start, end) {
	if (end === void 0) {
		end = start;
		start = 0;
	}
	assertNumber(value);
	assertNumber(start);
	assertNumber(end);
	return value >= Math.min(start, end) && value < Math.max(start, end);
}
function ceil(number, precision = 0) {
	return createRound(number, precision, "ceil");
}
function floor(number, precision = 0) {
	return createRound(number, precision, "floor");
}
function round(number, precision = 0) {
	return createRound(number, precision, "round");
}
function createRound(number, precision, methodName) {
	const func = Math[methodName];
	precision = precision == null ? 0 : Math.min(precision, 292);
	if (!precision) return func(number);
	let pair = `${number}e`.split("e");
	pair = `${func(Number(`${pair[0]}e${Number(pair[1]) + precision}`))}e`.split("e");
	return Number(`${pair[0]}e${Number(pair[1]) - precision}`);
}
export { ceil, floor, inRange, round };

//# sourceMappingURL=math.mjs.map