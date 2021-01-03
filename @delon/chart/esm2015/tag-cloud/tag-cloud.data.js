/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.data.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: one-variable-per-declaration typedef no-conditional-assignment only-arrow-functions ban-comma-operator no-shadowed-variable
/*
 * Synchronous version of d3-cloud
 */
// Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
// Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf
/* eslint-disable no-return-assign, no-cond-assign */
/**
 * @record
 */
function Item() { }
if (false) {
    /** @type {?} */
    Item.prototype.value;
    /** @type {?} */
    Item.prototype.text;
    /** @type {?} */
    Item.prototype.sprite;
}
/** @type {?} */
const cloudRadians = Math.PI / 180;
/** @type {?} */
const cw = (1 << 11) >> 5;
/** @type {?} */
const ch = 1 << 11;
/**
 * @param {?} d
 * @return {?}
 */
function cloudText(d) {
    return d.text;
}
/**
 * @return {?}
 */
function cloudFont() {
    return 'serif';
}
/**
 * @return {?}
 */
function cloudFontNormal() {
    return 'normal';
}
/**
 * @param {?} d
 * @return {?}
 */
function cloudFontSize(d) {
    return d.value;
}
/**
 * @return {?}
 */
function cloudRotate() {
    return ~~(Math.random() * 2) * 90;
}
/**
 * @return {?}
 */
function cloudPadding() {
    return 1;
}
// Fetches a monochrome sprite bitmap for the specified text.
// Load in batches for speed.
/**
 * @param {?} contextAndRatio
 * @param {?} d
 * @param {?} data
 * @param {?} di
 * @return {?}
 */
function cloudSprite(contextAndRatio, d, data, di) {
    if (d.sprite)
        return;
    /** @type {?} */
    const c = contextAndRatio.context;
    /** @type {?} */
    const ratio = contextAndRatio.ratio;
    c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
    /** @type {?} */
    let x = 0;
    /** @type {?} */
    let y = 0;
    /** @type {?} */
    let maxh = 0;
    /** @type {?} */
    const n = data.length;
    --di;
    while (++di < n) {
        d = data[di];
        c.save();
        c.font = d.style + ' ' + d.weight + ' ' + ~~((d.size + 1) / ratio) + 'px ' + d.font;
        /** @type {?} */
        let w = c.measureText(d.text + 'm').width * ratio;
        /** @type {?} */
        let h = d.size << 1;
        if (d.rotate) {
            /** @type {?} */
            const sr = Math.sin(d.rotate * cloudRadians);
            /** @type {?} */
            const cr = Math.cos(d.rotate * cloudRadians);
            /** @type {?} */
            const wcr = w * cr;
            /** @type {?} */
            const wsr = w * sr;
            /** @type {?} */
            const hcr = h * cr;
            /** @type {?} */
            const hsr = h * sr;
            w = ((Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5) << 5;
            h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
        }
        else {
            w = ((w + 0x1f) >> 5) << 5;
        }
        if (h > maxh)
            maxh = h;
        if (x + w >= cw << 5) {
            x = 0;
            y += maxh;
            maxh = 0;
        }
        if (y + h >= ch)
            break;
        c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
        if (d.rotate)
            c.rotate(d.rotate * cloudRadians);
        c.fillText(d.text, 0, 0);
        if (d.padding) {
            c.lineWidth = 2 * d.padding;
            c.strokeText(d.text, 0, 0);
        }
        c.restore();
        d.width = w;
        d.height = h;
        d.xoff = x;
        d.yoff = y;
        d.x1 = w >> 1;
        d.y1 = h >> 1;
        d.x0 = -d.x1;
        d.y0 = -d.y1;
        d.hasText = true;
        x += w;
    }
    /** @type {?} */
    const pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data;
    /** @type {?} */
    const sprite = [];
    while (--di >= 0) {
        d = data[di];
        if (!d.hasText)
            continue;
        /** @type {?} */
        const w = d.width;
        /** @type {?} */
        const w32 = w >> 5;
        /** @type {?} */
        let h = d.y1 - d.y0;
        // Zero the buffer
        for (let i = 0; i < h * w32; i++)
            sprite[i] = 0;
        x = d.xoff;
        if (x == null)
            return;
        y = d.yoff;
        /** @type {?} */
        let seen = 0;
        /** @type {?} */
        let seenRow = -1;
        for (let j = 0; j < h; j++) {
            for (let i = 0; i < w; i++) {
                /** @type {?} */
                const k = w32 * j + (i >> 5);
                /** @type {?} */
                const m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
                sprite[k] |= m;
                seen |= m;
            }
            if (seen)
                seenRow = j;
            else {
                d.y0++;
                h--;
                j--;
                y++;
            }
        }
        d.y1 = d.y0 + seenRow;
        d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
    }
}
// Use mask-based collision detection.
/**
 * @param {?} tag
 * @param {?} board
 * @param {?} sw
 * @return {?}
 */
function cloudCollide(tag, board, sw) {
    sw >>= 5;
    /** @type {?} */
    const sprite = tag.sprite;
    /** @type {?} */
    const w = tag.width >> 5;
    /** @type {?} */
    const lx = tag.x - (w << 4);
    /** @type {?} */
    const sx = lx & 0x7f;
    /** @type {?} */
    const msx = 32 - sx;
    /** @type {?} */
    const h = tag.y1 - tag.y0;
    /** @type {?} */
    let x = (tag.y + tag.y0) * sw + (lx >> 5);
    /** @type {?} */
    let last;
    for (let j = 0; j < h; j++) {
        last = 0;
        for (let i = 0; i <= w; i++) {
            if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0)) & board[x + i])
                return true;
        }
        x += sw;
    }
    return false;
}
/**
 * @param {?} bounds
 * @param {?} d
 * @return {?}
 */
function cloudBounds(bounds, d) {
    /** @type {?} */
    const b0 = bounds[0];
    /** @type {?} */
    const b1 = bounds[1];
    if (d.x + d.x0 < b0.x)
        b0.x = d.x + d.x0;
    if (d.y + d.y0 < b0.y)
        b0.y = d.y + d.y0;
    if (d.x + d.x1 > b1.x)
        b1.x = d.x + d.x1;
    if (d.y + d.y1 > b1.y)
        b1.y = d.y + d.y1;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function collideRects(a, b) {
    return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
}
/**
 * @param {?} size
 * @return {?}
 */
function archimedeanSpiral(size) {
    /** @type {?} */
    const e = size[0] / size[1];
    return (/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        return [e * (t *= 0.1) * Math.cos(t), t * Math.sin(t)];
    });
}
/**
 * @param {?} size
 * @return {?}
 */
function rectangularSpiral(size) {
    /** @type {?} */
    const dy = 4;
    /** @type {?} */
    const dx = (dy * size[0]) / size[1];
    /** @type {?} */
    let x = 0;
    /** @type {?} */
    let y = 0;
    return (/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        const sign = t < 0 ? -1 : 1;
        // See triangular numbers: T_n = n * (n + 1) / 2.
        switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
            case 0:
                x += dx;
                break;
            case 1:
                y += dy;
                break;
            case 2:
                x -= dx;
                break;
            default:
                y -= dy;
                break;
        }
        return [x, y];
    });
}
// TODO reuse arrays?
/**
 * @param {?} n
 * @return {?}
 */
function zeroArray(n) {
    /** @type {?} */
    const a = [];
    /** @type {?} */
    let i = -1;
    while (++i < n)
        a[i] = 0;
    return a;
}
/**
 * @return {?}
 */
function cloudCanvas() {
    return document.createElement('canvas');
}
/**
 * @param {?} d
 * @return {?}
 */
function functor(d) {
    return typeof d === 'function'
        ? d
        : (/**
         * @return {?}
         */
        function () {
            return d;
        });
}
/** @type {?} */
const spirals = {
    archimedean: archimedeanSpiral,
    rectangular: rectangularSpiral,
};
/**
 * @return {?}
 */
export default function () {
    /** @type {?} */
    let size = [256, 256];
    /** @type {?} */
    let text = cloudText;
    /** @type {?} */
    let font = cloudFont;
    /** @type {?} */
    let fontSize = cloudFontSize;
    /** @type {?} */
    let fontStyle = cloudFontNormal;
    /** @type {?} */
    let fontWeight = cloudFontNormal;
    /** @type {?} */
    let rotate = cloudRotate;
    /** @type {?} */
    let padding = cloudPadding;
    /** @type {?} */
    let spiral = rectangularSpiral;
    /** @type {?} */
    let words = [];
    /** @type {?} */
    let timeInterval = Infinity;
    /** @type {?} */
    let random = Math.random;
    /** @type {?} */
    let canvas = cloudCanvas;
    /** @type {?} */
    const cloud = {};
    cloud.canvas = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((canvas = functor(_)), cloud) : canvas;
    });
    cloud.start = (/**
     * @return {?}
     */
    function () {
        const [width, height] = size;
        /** @type {?} */
        const contextAndRatio = getContext(canvas());
        /** @type {?} */
        const board = cloud.board ? cloud.board : zeroArray((size[0] >> 5) * size[1]);
        /** @type {?} */
        const n = words.length;
        /** @type {?} */
        const tags = [];
        /** @type {?} */
        const data = words
            .map((/**
         * @param {?} d
         * @param {?} _i
         * @return {?}
         */
        function (d, _i) {
            d.text = text(d);
            d.font = font();
            d.style = fontStyle();
            d.weight = fontWeight();
            d.rotate = rotate();
            d.size = ~~fontSize(d);
            d.padding = 1;
            // d.text = text.call(this as any, d, i);
            // d.font = font.call(this, d, i);
            // d.style = fontStyle.call(this, d, i);
            // d.weight = fontWeight.call(this, d, i);
            // d.rotate = rotate.call(this, d, i);
            // d.size = ~~fontSize.call(this, d, i);
            // d.padding = padding.call(this, d, i);
            return d;
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return b.size - a.size;
        }));
        /** @type {?} */
        let i = -1;
        /** @type {?} */
        let bounds = !cloud.board
            ? null
            : [
                {
                    x: 0,
                    y: 0,
                },
                {
                    x: width,
                    y: height,
                },
            ];
        step();
        /**
         * @return {?}
         */
        function step() {
            /** @type {?} */
            const start = Date.now();
            while (Date.now() - start < timeInterval && ++i < n) {
                /** @type {?} */
                const d = data[i];
                d.x = (width * (random() + 0.5)) >> 1;
                d.y = (height * (random() + 0.5)) >> 1;
                cloudSprite(contextAndRatio, d, data, i);
                if (d.hasText && place(board, d, bounds)) {
                    tags.push(d);
                    if (bounds) {
                        if (!cloud.hasImage) {
                            // update bounds if image mask not set
                            cloudBounds(bounds, d);
                        }
                    }
                    else {
                        bounds = [
                            { x: d.x + d.x0, y: d.y + d.y0 },
                            { x: d.x + d.x1, y: d.y + d.y1 },
                        ];
                    }
                    // Temporary hack
                    d.x -= size[0] >> 1;
                    d.y -= size[1] >> 1;
                }
            }
            cloud._tags = tags;
            cloud._bounds = bounds;
        }
        return cloud;
    });
    /**
     * @param {?} canvas
     * @return {?}
     */
    function getContext(canvas) {
        canvas.width = canvas.height = 1;
        /** @type {?} */
        const ratio = Math.sqrt((/** @type {?} */ (canvas.getContext('2d'))).getImageData(0, 0, 1, 1).data.length >> 2);
        canvas.width = (cw << 5) / ratio;
        canvas.height = ch / ratio;
        /** @type {?} */
        const context = (/** @type {?} */ (canvas.getContext('2d')));
        context.fillStyle = context.strokeStyle = 'red';
        context.textAlign = 'center';
        return { context, ratio };
    }
    /**
     * @param {?} board
     * @param {?} tag
     * @param {?} bounds
     * @return {?}
     */
    function place(board, tag, bounds) {
        // const perimeter = [{ x: 0, y: 0 }, { x: size[0], y: size[1] }],
        /** @type {?} */
        const startX = tag.x;
        /** @type {?} */
        const startY = tag.y;
        /** @type {?} */
        const maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]);
        /** @type {?} */
        const s = spiral(size);
        /** @type {?} */
        const dt = random() < 0.5 ? 1 : -1;
        /** @type {?} */
        let dxdy;
        /** @type {?} */
        let t = -dt;
        /** @type {?} */
        let dx;
        /** @type {?} */
        let dy;
        while ((dxdy = s((t += dt)))) {
            dx = ~~dxdy[0];
            dy = ~~dxdy[1];
            if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta)
                break;
            tag.x = startX + dx;
            tag.y = startY + dy;
            if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 || tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1])
                continue;
            // TODO only check for collisions within current bounds.
            if (!bounds || !cloudCollide(tag, board, size[0])) {
                if (!bounds || collideRects(tag, bounds)) {
                    /** @type {?} */
                    const sprite = tag.sprite;
                    /** @type {?} */
                    const w = tag.width >> 5;
                    /** @type {?} */
                    const sw = size[0] >> 5;
                    /** @type {?} */
                    const lx = tag.x - (w << 4);
                    /** @type {?} */
                    const sx = lx & 0x7f;
                    /** @type {?} */
                    const msx = 32 - sx;
                    /** @type {?} */
                    const h = tag.y1 - tag.y0;
                    /** @type {?} */
                    let last;
                    /** @type {?} */
                    let x = (tag.y + tag.y0) * sw + (lx >> 5);
                    for (let j = 0; j < h; j++) {
                        last = 0;
                        for (let i = 0; i <= w; i++) {
                            board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
                        }
                        x += sw;
                    }
                    delete tag.sprite;
                    return true;
                }
            }
        }
        return false;
    }
    cloud.timeInterval = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((timeInterval = _ == null ? Infinity : _), cloud) : timeInterval;
    });
    cloud.words = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((words = _), cloud) : words;
    });
    cloud.size = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((size = [+_[0], +_[1]]), cloud) : size;
    });
    cloud.font = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((font = functor(_)), cloud) : font;
    });
    cloud.fontStyle = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((fontStyle = functor(_)), cloud) : fontStyle;
    });
    cloud.fontWeight = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((fontWeight = functor(_)), cloud) : fontWeight;
    });
    cloud.rotate = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((rotate = functor(_)), cloud) : rotate;
    });
    cloud.text = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((text = functor(_)), cloud) : text;
    });
    cloud.spiral = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((spiral = ((/** @type {?} */ (spirals)))[_] || _), cloud) : spiral;
    });
    cloud.fontSize = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((fontSize = functor(_)), cloud) : fontSize;
    });
    cloud.padding = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((padding = functor(_)), cloud) : padding;
    });
    cloud.random = (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return arguments.length ? ((random = _), cloud) : random;
    });
    return cloud;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmRhdGEuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGFnLWNsb3VkLyIsInNvdXJjZXMiOlsidGFnLWNsb3VkLmRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsbUJBSUM7OztJQUhDLHFCQUFjOztJQUNkLG9CQUFhOztJQUNiLHNCQUFnQjs7O01BR1osWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRzs7TUFDaEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7O01BQ25CLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRTs7Ozs7QUFFZCxTQUFTLFNBQVMsQ0FBQyxDQUFPO0lBQ3hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDOzs7O0FBRUQsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7QUFFRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxDQUFPO0lBQzVCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDOzs7O0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwQyxDQUFDOzs7O0FBRUQsU0FBUyxZQUFZO0lBQ25CLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7OztBQUlELFNBQVMsV0FBVyxDQUFDLGVBQW9CLEVBQUUsQ0FBTSxFQUFFLElBQVMsRUFBRSxFQUFPO0lBQ25FLElBQUksQ0FBQyxDQUFDLE1BQU07UUFBRSxPQUFPOztVQUNmLENBQUMsR0FBRyxlQUFlLENBQUMsT0FBTzs7VUFDL0IsS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLO0lBRS9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDOztRQUM3QyxDQUFDLEdBQUcsQ0FBQzs7UUFDUCxDQUFDLEdBQUcsQ0FBQzs7UUFDTCxJQUFJLEdBQUcsQ0FBQzs7VUFDSixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07SUFDckIsRUFBRSxFQUFFLENBQUM7SUFDTCxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNmLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDaEYsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSzs7WUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7O2tCQUNOLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDOztrQkFDMUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7O2tCQUN0QyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7O2tCQUNaLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTs7a0JBQ1osR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFOztrQkFDWixHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxHQUFHLElBQUk7WUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDTixDQUFDLElBQUksSUFBSSxDQUFDO1lBQ1YsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFBRSxNQUFNO1FBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsQ0FBQyxNQUFNO1lBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxH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LENBQUM7SUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xHLENBQUM7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFTOztVQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0I7Ozs7SUFBTyxVQUFVLENBQU07UUFDckIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQVM7O1VBQzVCLEVBQUUsR0FBRyxDQUFDOztVQUNWLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENB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dXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIHR5cGVkZWYgbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudCBvbmx5LWFycm93LWZ1bmN0aW9ucyBiYW4tY29tbWEtb3BlcmF0b3Igbm8tc2hhZG93ZWQtdmFyaWFibGVcbi8qXG4gKiBTeW5jaHJvbm91cyB2ZXJzaW9uIG9mIGQzLWNsb3VkXG4gKi9cbi8vIFdvcmQgY2xvdWQgbGF5b3V0IGJ5IEphc29uIERhdmllcywgaHR0cHM6Ly93d3cuamFzb25kYXZpZXMuY29tL3dvcmRjbG91ZC9cbi8vIEFsZ29yaXRobSBkdWUgdG8gSm9uYXRoYW4gRmVpbmJlcmcsIGh0dHA6Ly9zdGF0aWMubXJmZWluYmVyZy5jb20vYnZfY2gwMy5wZGZcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24sIG5vLWNvbmQtYXNzaWduICovXG5cbmludGVyZmFjZSBJdGVtIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICBzcHJpdGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNsb3VkUmFkaWFucyA9IE1hdGguUEkgLyAxODAsXG4gIGN3ID0gKDEgPDwgMTEpID4+IDUsXG4gIGNoID0gMSA8PCAxMTtcblxuZnVuY3Rpb24gY2xvdWRUZXh0KGQ6IEl0ZW0pIHtcbiAgcmV0dXJuIGQudGV4dDtcbn1cblxuZnVuY3Rpb24gY2xvdWRGb250KCkge1xuICByZXR1cm4gJ3NlcmlmJztcbn1cblxuZnVuY3Rpb24gY2xvdWRGb250Tm9ybWFsKCkge1xuICByZXR1cm4gJ25vcm1hbCc7XG59XG5cbmZ1bmN0aW9uIGNsb3VkRm9udFNpemUoZDogSXRlbSkge1xuICByZXR1cm4gZC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xvdWRSb3RhdGUoKSB7XG4gIHJldHVybiB+fihNYXRoLnJhbmRvbSgpICogMikgKiA5MDtcbn1cblxuZnVuY3Rpb24gY2xvdWRQYWRkaW5nKCkge1xuICByZXR1cm4gMTtcbn1cblxuLy8gRmV0Y2hlcyBhIG1vbm9jaHJvbWUgc3ByaXRlIGJpdG1hcCBmb3IgdGhlIHNwZWNpZmllZCB0ZXh0LlxuLy8gTG9hZCBpbiBiYXRjaGVzIGZvciBzcGVlZC5cbmZ1bmN0aW9uIGNsb3VkU3ByaXRlKGNvbnRleHRBbmRSYXRpbzogYW55LCBkOiBhbnksIGRhdGE6IGFueSwgZGk6IGFueSkge1xuICBpZiAoZC5zcHJpdGUpIHJldHVybjtcbiAgY29uc3QgYyA9IGNvbnRleHRBbmRSYXRpby5jb250ZXh0LFxuICAgIHJhdGlvID0gY29udGV4dEFuZFJhdGlvLnJhdGlvO1xuXG4gIGMuY2xlYXJSZWN0KDAsIDAsIChjdyA8PCA1KSAvIHJhdGlvLCBjaCAvIHJhdGlvKTtcbiAgbGV0IHggPSAwLFxuICAgIHkgPSAwLFxuICAgIG1heGggPSAwO1xuICBjb25zdCBuID0gZGF0YS5sZW5ndGg7XG4gIC0tZGk7XG4gIHdoaWxlICgrK2RpIDwgbikge1xuICAgIGQgPSBkYXRhW2RpXTtcbiAgICBjLnNhdmUoKTtcbiAgICBjLmZvbnQgPSBkLnN0eWxlICsgJyAnICsgZC53ZWlnaHQgKyAnICcgKyB+figoZC5zaXplICsgMSkgLyByYXRpbykgKyAncHggJyArIGQuZm9udDtcbiAgICBsZXQgdyA9IGMubWVhc3VyZVRleHQoZC50ZXh0ICsgJ20nKS53aWR0aCAqIHJhdGlvLFxuICAgICAgaCA9IGQuc2l6ZSA8PCAxO1xuICAgIGlmIChkLnJvdGF0ZSkge1xuICAgICAgY29uc3Qgc3IgPSBNYXRoLnNpbihkLnJvdGF0ZSAqIGNsb3VkUmFkaWFucyksXG4gICAgICAgIGNyID0gTWF0aC5jb3MoZC5yb3RhdGUgKiBjbG91ZFJhZGlhbnMpLFxuICAgICAgICB3Y3IgPSB3ICogY3IsXG4gICAgICAgIHdzciA9IHcgKiBzcixcbiAgICAgICAgaGNyID0gaCAqIGNyLFxuICAgICAgICBoc3IgPSBoICogc3I7XG4gICAgICB3ID0gKChNYXRoLm1heChNYXRoLmFicyh3Y3IgKyBoc3IpLCBNYXRoLmFicyh3Y3IgLSBoc3IpKSArIDB4MWYpID4+IDUpIDw8IDU7XG4gICAgICBoID0gfn5NYXRoLm1heChNYXRoLmFicyh3c3IgKyBoY3IpLCBNYXRoLmFicyh3c3IgLSBoY3IpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdyA9ICgodyArIDB4MWYpID4+IDUpIDw8IDU7XG4gICAgfVxuICAgIGlmIChoID4gbWF4aCkgbWF4aCA9IGg7XG4gICAgaWYgKHggKyB3ID49IGN3IDw8IDUpIHtcbiAgICAgIHggPSAwO1xuICAgICAgeSArPSBtYXhoO1xuICAgICAgbWF4aCA9IDA7XG4gICAgfVxuICAgIGlmICh5ICsgaCA+PSBjaCkgYnJlYWs7XG4gICAgYy50cmFuc2xhdGUoKHggKyAodyA+PiAxKSkgLyByYXRpbywgKHkgKyAoaCA+PiAxKSkgLyByYXRpbyk7XG4gICAgaWYgKGQucm90YXRlKSBjLnJvdGF0ZShkLnJvdGF0ZSAqIGNsb3VkUmFkaWFucyk7XG4gICAgYy5maWxsVGV4dChkLnRleHQsIDAsIDApO1xuICAgIGlmIChkLnBhZGRpbmcpIHtcbiAgICAgIGMubGluZVdpZHRoID0gMiAqIGQucGFkZGluZztcbiAgICAgIGMuc3Ryb2tlVGV4dChkLnRleHQsIDAsIDApO1xuICAgIH1cbiAgICBjLnJlc3RvcmUoKTtcbiAgICBkLndpZHRoID0gdztcbiAgICBkLmhlaWdodCA9IGg7XG4gICAgZC54b2ZmID0geDtcbiAgICBkLnlvZmYgPSB5O1xuICAgIGQueDEgPSB3ID4+IDE7XG4gICAgZC55MSA9IGggPj4gMTtcbiAgICBkLngwID0gLWQueDE7XG4gICAgZC55MCA9IC1kLnkxO1xuICAgIGQuaGFzVGV4dCA9IHRydWU7XG4gICAgeCArPSB3O1xuICB9XG4gIGNvbnN0IHBpeGVscyA9IGMuZ2V0SW1hZ2VEYXRhKDAsIDAsIChjdyA8PCA1KSAvIHJhdGlvLCBjaCAvIHJhdGlvKS5kYXRhLFxuICAgIHNwcml0ZSA9IFtdO1xuICB3aGlsZSAoLS1kaSA+PSAwKSB7XG4gICAgZCA9IGRhdGFbZGldO1xuICAgIGlmICghZC5oYXNUZXh0KSBjb250aW51ZTtcbiAgICBjb25zdCB3ID0gZC53aWR0aCxcbiAgICAgIHczMiA9IHcgPj4gNTtcbiAgICBsZXQgaCA9IGQueTEgLSBkLnkwO1xuICAgIC8vIFplcm8gdGhlIGJ1ZmZlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaCAqIHczMjsgaSsrKSBzcHJpdGVbaV0gPSAwO1xuICAgIHggPSBkLnhvZmY7XG4gICAgaWYgKHggPT0gbnVsbCkgcmV0dXJuO1xuICAgIHkgPSBkLnlvZmY7XG4gICAgbGV0IHNlZW4gPSAwLFxuICAgICAgc2VlblJvdyA9IC0xO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHc7IGkrKykge1xuICAgICAgICBjb25zdCBrID0gdzMyICogaiArIChpID4+IDUpLFxuICAgICAgICAgIG0gPSBwaXhlbHNbKCh5ICsgaikgKiAoY3cgPDwgNSkgKyAoeCArIGkpKSA8PCAyXSA/IDEgPDwgKDMxIC0gKGkgJSAzMikpIDogMDtcbiAgICAgICAgc3ByaXRlW2tdIHw9IG07XG4gICAgICAgIHNlZW4gfD0gbTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWVuKSBzZWVuUm93ID0gajtcbiAgICAgIGVsc2Uge1xuICAgICAgICBkLnkwKys7XG4gICAgICAgIGgtLTtcbiAgICAgICAgai0tO1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuICAgIGQueTEgPSBkLnkwICsgc2VlblJvdztcbiAgICBkLnNwcml0ZSA9IHNwcml0ZS5zbGljZSgwLCAoZC55MSAtIGQueTApICogdzMyKTtcbiAgfVxufVxuXG4vLyBVc2UgbWFzay1iYXNlZCBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuZnVuY3Rpb24gY2xvdWRDb2xsaWRlKHRhZzogYW55LCBib2FyZDogYW55LCBzdzogYW55KSB7XG4gIHN3ID4+PSA1O1xuICBjb25zdCBzcHJpdGUgPSB0YWcuc3ByaXRlLFxuICAgIHcgPSB0YWcud2lkdGggPj4gNSxcbiAgICBseCA9IHRhZy54IC0gKHcgPDwgNCksXG4gICAgc3ggPSBseCAmIDB4N2YsXG4gICAgbXN4ID0gMzIgLSBzeCxcbiAgICBoID0gdGFnLnkxIC0gdGFnLnkwO1xuICBsZXQgeCA9ICh0YWcueSArIHRhZy55MCkgKiBzdyArIChseCA+PiA1KSxcbiAgICBsYXN0O1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGg7IGorKykge1xuICAgIGxhc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHc7IGkrKykge1xuICAgICAgaWYgKCgobGFzdCA8PCBtc3gpIHwgKGkgPCB3ID8gKGxhc3QgPSBzcHJpdGVbaiAqIHcgKyBpXSkgPj4+IHN4IDogMCkpICYgYm9hcmRbeCArIGldKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgeCArPSBzdztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNsb3VkQm91bmRzKGJvdW5kczogYW55LCBkOiBhbnkpIHtcbiAgY29uc3QgYjAgPSBib3VuZHNbMF0sXG4gICAgYjEgPSBib3VuZHNbMV07XG4gIGlmIChkLnggKyBkLngwIDwgYjAueCkgYjAueCA9IGQueCArIGQueDA7XG4gIGlmIChkLnkgKyBkLnkwIDwgYjAueSkgYjAueSA9IGQueSArIGQueTA7XG4gIGlmIChkLnggKyBkLngxID4gYjEueCkgYjEueCA9IGQueCArIGQueDE7XG4gIGlmIChkLnkgKyBkLnkxID4gYjEueSkgYjEueSA9IGQueSArIGQueTE7XG59XG5cbmZ1bmN0aW9uIGNvbGxpZGVSZWN0cyhhOiBhbnksIGI6IGFueSkge1xuICByZXR1cm4gYS54ICsgYS54MSA+IGJbMF0ueCAmJiBhLnggKyBhLngwIDwgYlsxXS54ICYmIGEueSArIGEueTEgPiBiWzBdLnkgJiYgYS55ICsgYS55MCA8IGJbMV0ueTtcbn1cblxuZnVuY3Rpb24gYXJjaGltZWRlYW5TcGlyYWwoc2l6ZTogYW55KSB7XG4gIGNvbnN0IGUgPSBzaXplWzBdIC8gc2l6ZVsxXTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0OiBhbnkpIHtcbiAgICByZXR1cm4gW2UgKiAodCAqPSAwLjEpICogTWF0aC5jb3ModCksIHQgKiBNYXRoLnNpbih0KV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlY3Rhbmd1bGFyU3BpcmFsKHNpemU6IGFueSkge1xuICBjb25zdCBkeSA9IDQsXG4gICAgZHggPSAoZHkgKiBzaXplWzBdKSAvIHNpemVbMV07XG4gIGxldCB4ID0gMCxcbiAgICB5ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0OiBhbnkpIHtcbiAgICBjb25zdCBzaWduID0gdCA8IDAgPyAtMSA6IDE7XG4gICAgLy8gU2VlIHRyaWFuZ3VsYXIgbnVtYmVyczogVF9uID0gbiAqIChuICsgMSkgLyAyLlxuICAgIHN3aXRjaCAoKE1hdGguc3FydCgxICsgNCAqIHNpZ24gKiB0KSAtIHNpZ24pICYgMykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB4ICs9IGR4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgeSArPSBkeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHggLT0gZHg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgeSAtPSBkeTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG59XG5cbi8vIFRPRE8gcmV1c2UgYXJyYXlzP1xuZnVuY3Rpb24gemVyb0FycmF5KG46IGFueSkge1xuICBjb25zdCBhID0gW107XG4gIGxldCBpID0gLTE7XG4gIHdoaWxlICgrK2kgPCBuKSBhW2ldID0gMDtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGNsb3VkQ2FudmFzKCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG59XG5cbmZ1bmN0aW9uIGZ1bmN0b3IoZDogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZFxuICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH07XG59XG5cbmNvbnN0IHNwaXJhbHMgPSB7XG4gIGFyY2hpbWVkZWFuOiBhcmNoaW1lZGVhblNwaXJhbCxcbiAgcmVjdGFuZ3VsYXI6IHJlY3Rhbmd1bGFyU3BpcmFsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgc2l6ZSA9IFsyNTYsIDI1Nl0sXG4gICAgdGV4dCA9IGNsb3VkVGV4dCxcbiAgICBmb250ID0gY2xvdWRGb250LFxuICAgIGZvbnRTaXplID0gY2xvdWRGb250U2l6ZSxcbiAgICBmb250U3R5bGUgPSBjbG91ZEZvbnROb3JtYWwsXG4gICAgZm9udFdlaWdodCA9IGNsb3VkRm9udE5vcm1hbCxcbiAgICByb3RhdGUgPSBjbG91ZFJvdGF0ZSxcbiAgICBwYWRkaW5nID0gY2xvdWRQYWRkaW5nLFxuICAgIHNwaXJhbCA9IHJlY3Rhbmd1bGFyU3BpcmFsLFxuICAgIHdvcmRzOiBhbnkgPSBbXSxcbiAgICB0aW1lSW50ZXJ2YWwgPSBJbmZpbml0eSxcbiAgICByYW5kb20gPSBNYXRoLnJhbmRvbSxcbiAgICBjYW52YXMgPSBjbG91ZENhbnZhcztcbiAgY29uc3QgY2xvdWQ6IGFueSA9IHt9O1xuXG4gIGNsb3VkLmNhbnZhcyA9IGZ1bmN0aW9uIChfOiBhbnkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY2FudmFzID0gZnVuY3RvcihfKSksIGNsb3VkKSA6IGNhbnZhcztcbiAgfTtcblxuICBjbG91ZC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBzaXplO1xuICAgIGNvbnN0IGNvbnRleHRBbmRSYXRpbyA9IGdldENvbnRleHQoY2FudmFzKCkpLFxuICAgICAgYm9hcmQgPSBjbG91ZC5ib2FyZCA/IGNsb3VkLmJvYXJkIDogemVyb0FycmF5KChzaXplWzBdID4+IDUpICogc2l6ZVsxXSksXG4gICAgICBuID0gd29yZHMubGVuZ3RoLFxuICAgICAgdGFnczogYW55ID0gW10sXG4gICAgICBkYXRhID0gd29yZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZDogYW55LCBfaTogYW55KSB7XG4gICAgICAgICAgZC50ZXh0ID0gdGV4dChkKTtcbiAgICAgICAgICBkLmZvbnQgPSBmb250KCk7XG4gICAgICAgICAgZC5zdHlsZSA9IGZvbnRTdHlsZSgpO1xuICAgICAgICAgIGQud2VpZ2h0ID0gZm9udFdlaWdodCgpO1xuICAgICAgICAgIGQucm90YXRlID0gcm90YXRlKCk7XG4gICAgICAgICAgZC5zaXplID0gfn5mb250U2l6ZShkKTtcbiAgICAgICAgICBkLnBhZGRpbmcgPSAxO1xuICAgICAgICAgIC8vIGQudGV4dCA9IHRleHQuY2FsbCh0aGlzIGFzIGFueSwgZCwgaSk7XG4gICAgICAgICAgLy8gZC5mb250ID0gZm9udC5jYWxsKHRoaXMsIGQsIGkpO1xuICAgICAgICAgIC8vIGQuc3R5bGUgPSBmb250U3R5bGUuY2FsbCh0aGlzLCBkLCBpKTtcbiAgICAgICAgICAvLyBkLndlaWdodCA9IGZvbnRXZWlnaHQuY2FsbCh0aGlzLCBkLCBpKTtcbiAgICAgICAgICAvLyBkLnJvdGF0ZSA9IHJvdGF0ZS5jYWxsKHRoaXMsIGQsIGkpO1xuICAgICAgICAgIC8vIGQuc2l6ZSA9IH5+Zm9udFNpemUuY2FsbCh0aGlzLCBkLCBpKTtcbiAgICAgICAgICAvLyBkLnBhZGRpbmcgPSBwYWRkaW5nLmNhbGwodGhpcywgZCwgaSk7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgIHJldHVybiBiLnNpemUgLSBhLnNpemU7XG4gICAgICAgIH0pO1xuICAgIGxldCBpID0gLTEsXG4gICAgICBib3VuZHMgPSAhY2xvdWQuYm9hcmRcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogd2lkdGgsXG4gICAgICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXTtcblxuICAgIHN0ZXAoKTtcblxuICAgIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICB3aGlsZSAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgdGltZUludGVydmFsICYmICsraSA8IG4pIHtcbiAgICAgICAgY29uc3QgZCA9IGRhdGFbaV07XG4gICAgICAgIGQueCA9ICh3aWR0aCAqIChyYW5kb20oKSArIDAuNSkpID4+IDE7XG4gICAgICAgIGQueSA9IChoZWlnaHQgKiAocmFuZG9tKCkgKyAwLjUpKSA+PiAxO1xuICAgICAgICBjbG91ZFNwcml0ZShjb250ZXh0QW5kUmF0aW8sIGQsIGRhdGEsIGkpO1xuICAgICAgICBpZiAoZC5oYXNUZXh0ICYmIHBsYWNlKGJvYXJkLCBkLCBib3VuZHMpKSB7XG4gICAgICAgICAgdGFncy5wdXNoKGQpO1xuICAgICAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgICAgIGlmICghY2xvdWQuaGFzSW1hZ2UpIHtcbiAgICAgICAgICAgICAgLy8gdXBkYXRlIGJvdW5kcyBpZiBpbWFnZSBtYXNrIG5vdCBzZXRcbiAgICAgICAgICAgICAgY2xvdWRCb3VuZHMoYm91bmRzLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm91bmRzID0gW1xuICAgICAgICAgICAgICB7IHg6IGQueCArIGQueDAsIHk6IGQueSArIGQueTAgfSxcbiAgICAgICAgICAgICAgeyB4OiBkLnggKyBkLngxLCB5OiBkLnkgKyBkLnkxIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUZW1wb3JhcnkgaGFja1xuICAgICAgICAgIGQueCAtPSBzaXplWzBdID4+IDE7XG4gICAgICAgICAgZC55IC09IHNpemVbMV0gPj4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvdWQuX3RhZ3MgPSB0YWdzO1xuICAgICAgY2xvdWQuX2JvdW5kcyA9IGJvdW5kcztcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvdWQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGV4dChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IDE7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLnNxcnQoY2FudmFzLmdldENvbnRleHQoJzJkJykhLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhLmxlbmd0aCA+PiAyKTtcbiAgICBjYW52YXMud2lkdGggPSAoY3cgPDwgNSkgLyByYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2ggLyByYXRpbztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICByZXR1cm4geyBjb250ZXh0LCByYXRpbyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2UoYm9hcmQ6IGFueSwgdGFnOiBhbnksIGJvdW5kczogYW55KSB7XG4gICAgLy8gY29uc3QgcGVyaW1ldGVyID0gW3sgeDogMCwgeTogMCB9LCB7IHg6IHNpemVbMF0sIHk6IHNpemVbMV0gfV0sXG4gICAgY29uc3Qgc3RhcnRYID0gdGFnLngsXG4gICAgICBzdGFydFkgPSB0YWcueSxcbiAgICAgIG1heERlbHRhID0gTWF0aC5zcXJ0KHNpemVbMF0gKiBzaXplWzBdICsgc2l6ZVsxXSAqIHNpemVbMV0pLFxuICAgICAgcyA9IHNwaXJhbChzaXplKSxcbiAgICAgIGR0ID0gcmFuZG9tKCkgPCAwLjUgPyAxIDogLTE7XG4gICAgbGV0IGR4ZHksXG4gICAgICB0ID0gLWR0LFxuICAgICAgZHgsXG4gICAgICBkeTtcblxuICAgIHdoaWxlICgoZHhkeSA9IHMoKHQgKz0gZHQpKSkpIHtcbiAgICAgIGR4ID0gfn5keGR5WzBdO1xuICAgICAgZHkgPSB+fmR4ZHlbMV07XG5cbiAgICAgIGlmIChNYXRoLm1pbihNYXRoLmFicyhkeCksIE1hdGguYWJzKGR5KSkgPj0gbWF4RGVsdGEpIGJyZWFrO1xuXG4gICAgICB0YWcueCA9IHN0YXJ0WCArIGR4O1xuICAgICAgdGFnLnkgPSBzdGFydFkgKyBkeTtcblxuICAgICAgaWYgKHRhZy54ICsgdGFnLngwIDwgMCB8fCB0YWcueSArIHRhZy55MCA8IDAgfHwgdGFnLnggKyB0YWcueDEgPiBzaXplWzBdIHx8IHRhZy55ICsgdGFnLnkxID4gc2l6ZVsxXSkgY29udGludWU7XG4gICAgICAvLyBUT0RPIG9ubHkgY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aGluIGN1cnJlbnQgYm91bmRzLlxuICAgICAgaWYgKCFib3VuZHMgfHwgIWNsb3VkQ29sbGlkZSh0YWcsIGJvYXJkLCBzaXplWzBdKSkge1xuICAgICAgICBpZiAoIWJvdW5kcyB8fCBjb2xsaWRlUmVjdHModGFnLCBib3VuZHMpKSB7XG4gICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGFnLnNwcml0ZSxcbiAgICAgICAgICAgIHcgPSB0YWcud2lkdGggPj4gNSxcbiAgICAgICAgICAgIHN3ID0gc2l6ZVswXSA+PiA1LFxuICAgICAgICAgICAgbHggPSB0YWcueCAtICh3IDw8IDQpLFxuICAgICAgICAgICAgc3ggPSBseCAmIDB4N2YsXG4gICAgICAgICAgICBtc3ggPSAzMiAtIHN4LFxuICAgICAgICAgICAgaCA9IHRhZy55MSAtIHRhZy55MDtcbiAgICAgICAgICBsZXQgbGFzdCxcbiAgICAgICAgICAgIHggPSAodGFnLnkgKyB0YWcueTApICogc3cgKyAobHggPj4gNSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoOyBqKyspIHtcbiAgICAgICAgICAgIGxhc3QgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdzsgaSsrKSB7XG4gICAgICAgICAgICAgIGJvYXJkW3ggKyBpXSB8PSAobGFzdCA8PCBtc3gpIHwgKGkgPCB3ID8gKGxhc3QgPSBzcHJpdGVbaiAqIHcgKyBpXSkgPj4+IHN4IDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IHN3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgdGFnLnNwcml0ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbG91ZC50aW1lSW50ZXJ2YWwgPSBmdW5jdGlvbiAoXzogYW55KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKHRpbWVJbnRlcnZhbCA9IF8gPT0gbnVsbCA/IEluZmluaXR5IDogXyksIGNsb3VkKSA6IHRpbWVJbnRlcnZhbDtcbiAgfTtcblxuICBjbG91ZC53b3JkcyA9IGZ1bmN0aW9uIChfOiBhbnkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgod29yZHMgPSBfKSwgY2xvdWQpIDogd29yZHM7XG4gIH07XG5cbiAgY2xvdWQuc2l6ZSA9IGZ1bmN0aW9uIChfOiBhbnkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoc2l6ZSA9IFsrX1swXSwgK19bMV1dKSwgY2xvdWQpIDogc2l6ZTtcbiAgfTtcblxuICBjbG91ZC5mb250ID0gZnVuY3Rpb24gKF86IGFueSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChmb250ID0gZnVuY3RvcihfKSksIGNsb3VkKSA6IGZvbnQ7XG4gIH07XG5cbiAgY2xvdWQuZm9udFN0eWxlID0gZnVuY3Rpb24gKF86IGFueSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChmb250U3R5bGUgPSBmdW5jdG9yKF8pKSwgY2xvdWQpIDogZm9udFN0eWxlO1xuICB9O1xuXG4gIGNsb3VkLmZvbnRXZWlnaHQgPSBmdW5jdGlvbiAoXzogYW55KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKGZvbnRXZWlnaHQgPSBmdW5jdG9yKF8pKSwgY2xvdWQpIDogZm9udFdlaWdodDtcbiAgfTtcblxuICBjbG91ZC5yb3RhdGUgPSBmdW5jdGlvbiAoXzogYW55KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKHJvdGF0ZSA9IGZ1bmN0b3IoXykpLCBjbG91ZCkgOiByb3RhdGU7XG4gIH07XG5cbiAgY2xvdWQudGV4dCA9IGZ1bmN0aW9uIChfOiBhbnkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgodGV4dCA9IGZ1bmN0b3IoXykpLCBjbG91ZCkgOiB0ZXh0O1xuICB9O1xuXG4gIGNsb3VkLnNwaXJhbCA9IGZ1bmN0aW9uIChfOiBhbnkpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoc3BpcmFsID0gKHNwaXJhbHMgYXMgYW55KVtfXSB8fCBfKSwgY2xvdWQpIDogc3BpcmFsO1xuICB9O1xuXG4gIGNsb3VkLmZvbnRTaXplID0gZnVuY3Rpb24gKF86IGFueSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChmb250U2l6ZSA9IGZ1bmN0b3IoXykpLCBjbG91ZCkgOiBmb250U2l6ZTtcbiAgfTtcblxuICBjbG91ZC5wYWRkaW5nID0gZnVuY3Rpb24gKF86IGFueSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChwYWRkaW5nID0gZnVuY3RvcihfKSksIGNsb3VkKSA6IHBhZGRpbmc7XG4gIH07XG5cbiAgY2xvdWQucmFuZG9tID0gZnVuY3Rpb24gKF86IGFueSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChyYW5kb20gPSBfKSwgY2xvdWQpIDogcmFuZG9tO1xuICB9O1xuXG4gIHJldHVybiBjbG91ZDtcbn1cbiJdfQ==