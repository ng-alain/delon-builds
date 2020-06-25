"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const parse5_1 = require("parse5");
const ts = require("typescript");
const ast_1 = require("../utils/ast");
// includes ng-zorro-antd & @delon/*
const WHITE_ICONS = [
    // - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts
    'BarsOutline',
    'CalendarOutline',
    'CaretUpFill',
    'CaretUpOutline',
    'CaretDownFill',
    'CaretDownOutline',
    'CheckCircleFill',
    'CheckCircleOutline',
    'CheckOutline',
    'ClockCircleOutline',
    'CloseCircleOutline',
    'CloseCircleFill',
    'CloseOutline',
    'CopyOutline',
    'DoubleLeftOutline',
    'DoubleRightOutline',
    'DownOutline',
    'EditOutline',
    'EllipsisOutline',
    'ExclamationCircleFill',
    'ExclamationCircleOutline',
    'EyeOutline',
    'FileFill',
    'FileOutline',
    'FilterFill',
    'InfoCircleFill',
    'InfoCircleOutline',
    'LeftOutline',
    'LoadingOutline',
    'PaperClipOutline',
    'QuestionCircleOutline',
    'RightOutline',
    'StarFill',
    'SearchOutline',
    'StarFill',
    'UploadOutline',
    'UpOutline',
    // - @delon: https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33
    'BellOutline',
    'DeleteOutline',
    'PlusOutline',
    'InboxOutline',
];
const ATTRIBUTES = {
    'nz-input-group': ['nzAddOnBeforeIcon', 'nzAddOnAfterIcon', 'nzPrefixIcon', 'nzSuffixIcon'],
    'nz-avatar': ['nzIcon'],
    'quick-menu': ['icon'],
};
const ATTRIBUTE_NAMES = Object.keys(ATTRIBUTES);
// fix parse5 auto ingore lower case all properies
ATTRIBUTE_NAMES.forEach(key => {
    const res = [];
    ATTRIBUTES[key].forEach(prop => {
        res.push(prop.toLowerCase());
        res.push(`[${prop.toLowerCase()}]`);
    });
    ATTRIBUTES[key] = res;
});
function findIcons(html) {
    const res = [];
    const doc = parse5_1.parseFragment(html);
    const visitNodes = (nodes) => {
        nodes.forEach((node) => {
            if (node.attrs) {
                const classIcon = genByClass(node);
                if (classIcon)
                    res.push(classIcon);
                const compIcon = genByComp(node);
                if (compIcon)
                    res.push(...compIcon);
                const attrIcon = genByAttribute(node);
                if (attrIcon)
                    res.push(...attrIcon);
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
    if (!node.attrs.find(attr => attr.name === 'nz-icon'))
        return null;
    const type = node.attrs.find(attr => ['type', '[type]', 'nztype', '[nztype]'].includes(attr.name));
    if (!type)
        return null;
    const types = getNgValue(type);
    if (types == null)
        return null;
    const theme = node.attrs.find(attr => ['theme', '[theme]', 'nztheme', '[nztheme]'].includes(attr.name));
    const themes = getNgValue(theme);
    if (themes == null || themes.length === 0)
        return types;
    return [].concat(...types.map(a => themes.map(b => `${a}#${b}`)));
}
function genByAttribute(node) {
    if (!ATTRIBUTE_NAMES.includes(node.nodeName))
        return null;
    const attributes = ATTRIBUTES[node.nodeName];
    const type = node.attrs.find(attr => attributes.includes(attr.name));
    if (!type)
        return null;
    const types = getNgValue(type);
    if (types == null)
        return null;
    return types;
}
function getNgValue(attr) {
    if (!attr)
        return null;
    const str = attr.value.trim();
    const templatVarIndex = str.indexOf('{{');
    // type="icon"
    // type="{{value ? 'icon' : 'icon' }}"
    // type="align-{{value ? 'icon' : 'icon' }}"
    if (!attr.name.startsWith('[')) {
        const prefix = templatVarIndex > 0 ? str.substr(0, templatVarIndex) : '';
        if (templatVarIndex !== -1) {
            return fixValue(str.substr(templatVarIndex), prefix);
        }
        return [str];
    }
    // ingore {{ }}
    if (templatVarIndex !== -1)
        return null;
    return fixValue(str, '');
}
function fixValue(str, prefix) {
    // value ? 'icon' : 'icon'
    // focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'
    // 'icon'
    const types = str.replace(/anticon anticon-/g, '').match(/['|"|`][-A-Za-z]+['|"|`]/g) || [];
    if (types.length > 0) {
        return types.map(t => prefix + t.replace(/['|"|`]/g, ''));
    }
    return null;
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
    let res = value.replace(/anticon anticon-/g, '').replace(/anticon-/g, '');
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
function getIcons(options, host) {
    const iconClassList = [];
    host.visit(path => {
        if (~path.indexOf(`/node_modules/`) || !path.startsWith(`/${options.sourceRoot}`))
            return;
        let res = [];
        try {
            if (path.endsWith('.ts')) {
                res = fixTs(host, path);
            }
            if (path.endsWith('.html')) {
                res = findIcons(host.read(path).toString());
            }
        }
        catch (ex) {
            console.warn(`Skip file "${path}" because parsing error: ${ex}`);
        }
        if (res.length > 0) {
            console.log(`found ${JSON.stringify(res)} icons in ${path}`);
            iconClassList.push(...res);
        }
    });
    const iconSet = new Set();
    iconClassList
        .map(value => getIconNameByClassName(value))
        .filter(w => w != null && !WHITE_ICONS.includes(w))
        .forEach(v => iconSet.add(v));
    return Array.from(iconSet).sort();
}
function genCustomIcons(options, host) {
    const path = options.sourceRoot + `/style-icons.ts`;
    if (!host.exists(path)) {
        host.create(path, `// Custom icon static resources

import { } from '@ant-design/icons-angular/icons';

export const ICONS = [ ];
`);
        return;
    }
    const source = ast_1.getSourceFile(host, path);
    const allImports = ast_utils_1.findNodes(source, ts.SyntaxKind.ImportDeclaration);
    const iconImport = allImports.find((w) => w.moduleSpecifier.getText().includes('@ant-design/icons-angular/icons'));
    if (!iconImport)
        return;
    iconImport.importClause.namedBindings.elements.forEach(v => WHITE_ICONS.push(v.getText().trim()));
}
function genIconFile(options, host, icons) {
    const content = `/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

import {
  ${icons.join(',\n  ')}
} from '@ant-design/icons-angular/icons';

export const ICONS_AUTO = [
  ${icons.join(',\n  ')}
];
`;
    const savePath = options.sourceRoot + `/style-icons-auto.ts`;
    if (host.exists(savePath)) {
        host.overwrite(savePath, content);
    }
    else {
        host.create(savePath, content);
    }
}
function pluginIcon(options) {
    return (host, context) => {
        console.log(`Analyzing files...`);
        genCustomIcons(options, host);
        const icons = getIcons(options, host);
        genIconFile(options, host, icons);
        console.log(`\n\n`);
        console.log(`生成成功，如果是首次运行，需要手动引用，参考：https://ng-alain.com/theme/icon/zh`);
        console.log(`Finished, if it's first run, you need manually reference it, refer to: https://ng-alain.com/theme/icon/en`);
        console.log(`\n\n`);
    };
}
exports.pluginIcon = pluginIcon;
//# sourceMappingURL=plugin.icon.js.map