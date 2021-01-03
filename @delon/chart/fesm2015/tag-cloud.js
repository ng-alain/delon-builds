import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, NgZone, Input, Output, NgModule } from '@angular/core';
import { registerShape, Util, Chart } from '@antv/g2';
import { AlainConfigService, InputNumber, DelonUtilModule } from '@delon/util';
import { fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
function tagCloud () {
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

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function G2TagCloudData() { }
if (false) {
    /** @type {?|undefined} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.name;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function G2TagCloudClickItem() { }
if (false) {
    /** @type {?} */
    G2TagCloudClickItem.prototype.item;
    /** @type {?} */
    G2TagCloudClickItem.prototype.ev;
}
class G2TagCloudComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(el, ngZone, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this._h = 0;
        this._w = 0;
        // #region fields
        this.delay = 100;
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
        this.spiral = 'rectangular';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @private
     * @return {?}
     */
    fixWH() {
        const { height, width, el } = this;
        this._h = height <= 0 ? el.nativeElement.clientHeight : height;
        this._w = width <= 0 ? el.nativeElement.clientWidth : width;
    }
    /**
     * @private
     * @return {?}
     */
    initTagCloud() {
        registerShape('point', 'cloud', {
            // tslint:disable-next-line: typedef
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const data = (/** @type {?} */ (cfg.data));
                /** @type {?} */
                const textShape = container.addShape({
                    type: 'text',
                    name: 'tag-cloud-text',
                    attrs: (/** @type {?} */ (Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }))),
                });
                if (data.rotate) {
                    Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            },
        });
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, padding, theme } = this;
        this.fixWH();
        /** @type {?} */
        const chart = (this._chart = new Chart({
            container: el.nativeElement,
            autoFit: false,
            height: this._h,
            width: this._w,
            padding,
            theme,
        }));
        chart.scale({
            x: { nice: false },
            y: { nice: false },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });
        ((/** @type {?} */ (chart.coordinate()))).reflect();
        chart
            .point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .state({
            active: {
                style: {
                    fillOpacity: 0.4,
                },
            },
        });
        chart.interaction('element-active');
        chart.on('tag-cloud-text:click', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    transform() {
        /** @type {?} */
        const statisticData = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => (/** @type {?} */ (i.value))));
        /** @type {?} */
        const min = Math.min(...statisticData);
        /** @type {?} */
        const max = Math.max(...statisticData);
        /** @type {?} */
        const options = {
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            padding: 1,
            size: [this._w, this._h],
            // 宽高设置最好根据 imageMask 做调整
            spiral: this.spiral,
            timeInterval: 5000,
            // max execute time
            rotate: (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            }),
            fontSize: (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                return (((/** @type {?} */ (d.value)) - min) / (max - min)) * (32 - 8) + 8;
            }),
        };
        /** @type {?} */
        const layout = tagCloud();
        ['font', 'fontSize', 'fontWeight', 'padding', 'rotate', 'size', 'spiral', 'timeInterval'].forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            // @ts-ignore
            if (options[key]) {
                // @ts-ignore
                layout[key](options[key]);
            }
        }));
        /** @type {?} */
        const words = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => (Object.assign(Object.assign({}, i), { text: i.name }))));
        layout.words(words);
        /** @type {?} */
        const result = layout.start();
        /** @type {?} */
        const tags = result._tags;
        /** @type {?} */
        const bounds = result._bounds || [
            { x: 0, y: 0 },
            { x: options.size[0], y: options.size[1] },
        ];
        tags.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        tag => {
            tag.x += options.size[0] / 2;
            tag.y += options.size[1] / 2;
        }));
        const [w, h] = options.size;
        /** @type {?} */
        const hasImage = result.hasImage;
        tags.push({
            text: '',
            value: 0,
            x: hasImage ? 0 : bounds[0].x,
            y: hasImage ? 0 : bounds[0].y,
            opacity: 0,
        });
        tags.push({
            text: '',
            value: 0,
            x: hasImage ? w : bounds[1].x,
            y: hasImage ? h : bounds[1].y,
            opacity: 0,
        });
        return tags;
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        this.fixWH();
        _chart.changeSize(this._w, this._h);
        _chart.padding = padding;
        /** @type {?} */
        const rows = this.transform();
        _chart.data(rows);
        _chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    _attachChart() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        () => !!this._chart)), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this._attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.initTagCloud();
        this.installResizeEvent();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2TagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-tag-cloud',
                exportAs: 'g2TagCloud',
                template: ``,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2TagCloudComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
];
G2TagCloudComponent.propDecorators = {
    delay: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    spiral: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "width", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "height", void 0);
if (false) {
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_width;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype._chart;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype._h;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype._w;
    /** @type {?} */
    G2TagCloudComponent.prototype.delay;
    /** @type {?} */
    G2TagCloudComponent.prototype.width;
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /** @type {?} */
    G2TagCloudComponent.prototype.spiral;
    /** @type {?} */
    G2TagCloudComponent.prototype.theme;
    /** @type {?} */
    G2TagCloudComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
}
G2TagCloudModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2TagCloudComponent, G2TagCloudModule };
//# sourceMappingURL=tag-cloud.js.map
