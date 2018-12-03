/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    // tslint:disable:no-any no-conditional-assignment binary-expression-operand-order
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
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFXOztRQUNyQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDdEQsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTTtTQUNQO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDZixNQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNkLE1BQU07U0FDUDtRQUNELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FDYixtRUFBbUUsQ0FDcEUsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVzs7UUFDdEIsS0FBSyxHQUNULG1FQUFtRTs7UUFDakUsTUFBTSxHQUFHLEVBQUU7SUFFZixHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckM7SUFDRSxpQ0FBaUM7SUFDakMsa0ZBQWtGO0lBQ2xGLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQUssRUFBRSxNQUFNLFNBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN6QyxxQkFBcUI7SUFDckIsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLDRFQUE0RTtJQUM1RSxDQUFDLE1BQU07UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEMseUNBQXlDO1lBQ3pDLGtEQUFrRDtZQUNsRCxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQyxFQUNMO1FBQ0EseURBQXlEO1FBQ3pELE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXO0lBQ25DLE9BQU8sa0JBQWtCLENBQ3ZCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztTQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQUMsQ0FBUztRQUM5QixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDWixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICBjYXNlIDA6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIDI6IHtcbiAgICAgIG91dHB1dCArPSAnPT0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMzoge1xuICAgICAgb3V0cHV0ICs9ICc9JztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBiNjRkZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjaGFycyA9XG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgbGV0IG91dHB1dCA9ICcnO1xuXG4gIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoLz0rJC8sICcnKTtcblxuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueSBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICBsZXQgYmMgPSAwLCBiczogYW55LCBidWZmZXI6IGFueSwgaWR4ID0gMDtcbiAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcbiAgICAoYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKykpO1xuICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcbiAgICB+YnVmZmVyICYmXG4gICAgICAoKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXG4gICAgICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXG4gICAgICAgIGJjKysgJSA0KVxuICAgICAgPyAob3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgKGJzID4+ICgoLTIgKiBiYykgJiA2KSkpKVxuICAgICAgOiAwXG4gICkge1xuICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjVGhlX1VuaWNvZGVfUHJvYmxlbVxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIEFycmF5LnByb3RvdHlwZS5tYXBcbiAgICAgIC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyksXG4gICk7XG59XG4iXX0=