"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const ts = require("typescript");
const parse5_1 = require("parse5");
const ast_1 = require("../utils/ast");
// includes ng-zorro-antd & @delon/*
// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6
// - @delon: https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33
const EXISTS_ICONS = [
    'CalendarOutline',
    'CheckCircleFill',
    'CheckCircleOutline',
    'CheckOutline',
    'ClockCircleOutline',
    'CloseCircleOutline',
    'CloseCircleFill',
    'CloseOutline',
    'DoubleLeftOutline',
    'DoubleRightOutline',
    'DownOutline',
    'ExclamationCircleFill',
    'ExclamationCircleOutline',
    'InfoCircleFill',
    'InfoCircleOutline',
    'LeftOutline',
    'LoadingOutline',
    'PaperClipOutline',
    'QuestionCircleOutline',
    'RightOutline',
    'UploadOutline',
    'UpOutline',
    'BellOutline',
    'FilterFill',
    'CaretUpOutline',
    'CaretDownOutline',
    'DeleteOutline',
    'PlusOutline',
    'InboxOutline',
];
function findIcons(html) {
    const res = [];
    const doc = parse5_1.parseFragment(html);
    const visitNodes = nodes => {
        nodes.forEach(node => {
            if (node.attrs) {
                const classIcon = genByClass(node);
                if (classIcon)
                    res.push(classIcon);
                const compIcon = genByComp(node);
                if (compIcon)
                    res.push(compIcon);
            }
            if (node.childNodes) {
                visitNodes(node.childNodes);
            }
        });
    };
    visitNodes(doc.childNodes);
    return res;
}
function genByClass(node) {
    const attr = node.attrs.find(a => a.name === 'class');
    if (!attr || !attr.value)
        return null;
    const match = attr.value.match(/anticon(-\w+)+/g);
    if (!match || match.length === 0)
        return null;
    return match[0];
}
function genByComp(node) {
    const comp = node.attrs.find(attr => attr.name === 'nz-icon');
    if (!comp)
        return null;
    const type = node.attrs.find(attr => attr.name === 'type' || attr.name === '[type]');
    if (!type)
        return null;
    const typeValue = getNgValue(type);
    if (typeValue == null)
        return null;
    const theme = node.attrs.find(attr => attr.name === 'theme' || attr.name === '[theme]');
    const themeValue = getNgValue(theme);
    return typeValue + (themeValue ? '#' + themeValue : '');
}
function getNgValue(attr) {
    if (!attr || /[{|?]/g.test(attr.value))
        return null;
    if (!attr.name.startsWith('[')) {
        return attr.value;
    }
    else {
        // [theme]="'outline'"
        return attr.value.replace(/['|"|`]/g, '');
    }
}
function fixTs(host, path) {
    let res = [];
    ast_1.updateComponentMetadata(host, path, (node) => {
        if (!ts.isStringLiteralLike(node.initializer))
            return;
        res = findIcons(node.initializer.getText());
        return [];
    }, `template`);
    return res;
}
function getIconNameByClassName(value) {
    let res = value.replace('anticon-', '');
    if (value === 'anticon-spin' || value.indexOf('-o-') !== -1) {
        return null;
    }
    if (res.includes('verticle')) {
        res = res.replace('verticle', 'vertical');
    }
    if (res.startsWith('cross')) {
        res = res.replace('cross', 'close');
    }
    if (/(-o)$/.test(res)) {
        res = res.replace(/(-o)$/, '-outline');
    }
    else if (/#outline/.test(res)) {
        res = res.replace(/#outline/, '-outline');
    }
    else if (/#fill/.test(res)) {
        res = res.replace(/#fill/, '-fill');
    }
    else if (/#twotone/.test(res)) {
        res = res.replace(/#twotone/, '-TwoTone');
    }
    else {
        res = `${res}-outline`;
    }
    return core_1.strings.classify(res);
}
function getIcons(host) {
    const iconClassList = [];
    host.visit(path => {
        if (path.endsWith('.ts')) {
            iconClassList.push(...fixTs(host, path));
        }
        if (path.endsWith('.html')) {
            iconClassList.push(...findIcons(host.read(path).toString()));
        }
    });
    const iconSet = new Set();
    iconClassList
        .map(value => getIconNameByClassName(value))
        .filter(w => w != null && !EXISTS_ICONS.includes(w))
        .forEach(v => iconSet.add(v));
    return Array.from(iconSet).sort();
}
function genIconFile(options, host, icons) {
    const savePath = options.sourceRoot + `style_icons.ts`;
}
function pluginIcon(options) {
    return (host, context) => {
        const icons = getIcons(host);
        console.log(icons);
        genIconFile(options, host, icons);
    };
}
exports.pluginIcon = pluginIcon;
//# sourceMappingURL=plugin.icon.js.map