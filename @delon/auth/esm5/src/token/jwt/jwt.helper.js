/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
export function urlBase64Decode(str) {
    /** @type {?} */
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
    }
    return b64DecodeUnicode(output);
}
/**
 * @param {?} str
 * @return {?}
 */
function b64decode(str) {
    /** @type {?} */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    /** @type {?} */
    var output = '';
    str = String(str).replace(/=+$/, '');
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    (buffer = str.charAt(idx++)); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer &&
        ((bs = bc % 4 ? bs * 64 + buffer : buffer),
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
/**
 * @param {?} str
 * @return {?}
 */
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map
        .call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSwwQkFBMEIsR0FBVzs7SUFDekMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RCxRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxJQUFJLElBQUksQ0FBQztZQUNmLE1BQU07U0FDUDtRQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksR0FBRyxDQUFDO1lBQ2QsTUFBTTtTQUNQO1FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFtRSxDQUNwRSxDQUFDO1NBQ0g7S0FDRjtJQUNELE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDakM7Ozs7O0FBRUQsbUJBQW1CLEdBQVc7O0lBQzVCLElBQU0sS0FBSyxHQUNULG1FQUFtRSxDQUFDOztJQUN0RSxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFFeEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXJDOztJQUVFLElBQUksRUFBRSxHQUFXLENBQUMsRUFBRSxFQUFFLFNBQUssRUFBRSxNQUFNLFNBQUssRUFBRSxHQUFHLEdBQVcsQ0FBQzs7SUFFekQsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztJQUU1QixDQUFDLE1BQU07UUFDUCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7OztZQUcxQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQyxFQUNMOztRQUVBLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFHRCwwQkFBMEIsR0FBUTtJQUNoQyxPQUFPLGtCQUFrQixDQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUc7U0FDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFDLENBQU07UUFDM0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RCxDQUFDO1NBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNaLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XHJcbiAgICBjYXNlIDA6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIDI6IHtcclxuICAgICAgb3V0cHV0ICs9ICc9PSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAzOiB7XHJcbiAgICAgIG91dHB1dCArPSAnPSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCdhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYjY0ZGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBjaGFycyA9XHJcbiAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gIGxldCBvdXRwdXQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcblxyXG4gIGZvciAoXHJcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcclxuICAgIGxldCBiYzogbnVtYmVyID0gMCwgYnM6IGFueSwgYnVmZmVyOiBhbnksIGlkeDogbnVtYmVyID0gMDtcclxuICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgKGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspKTtcclxuICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgIH5idWZmZXIgJiZcclxuICAgICgoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyKSxcclxuICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXHJcbiAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgYmMrKyAlIDQpXHJcbiAgICAgID8gKG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIChicyA+PiAoKC0yICogYmMpICYgNikpKSlcclxuICAgICAgOiAwXHJcbiAgKSB7XHJcbiAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cclxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IGFueSkge1xyXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXHJcbiAgICBBcnJheS5wcm90b3R5cGUubWFwXHJcbiAgICAgIC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignJyksXHJcbiAgKTtcclxufVxyXG4iXX0=