"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_service_1 = require("../../dom/dom.service");
const ast_1 = require("../../../utils/ast");
const change_1 = require("../../../utils/devkit-utils/change");
const DOM = new dom_service_1.DomService();
function fixDefaultHtml(tree, context) {
    const filePath = 'src/app/layout/default/default.component.html';
    if (!tree.exists(filePath)) {
        console.log(`Default layout not found in [${filePath}]`);
        return;
    }
    DOM.replace(tree.read(filePath).toString(), [
        {
            type: 'attr',
            name: 'class',
            rules: [
                {
                    type: 'class-name',
                    value: 'router-progress-bar',
                    newValue: 'alain-default__progress-bar',
                },
                {
                    type: 'class-name',
                    value: 'header',
                    newValue: 'alain-default__header',
                },
                {
                    type: 'class-name',
                    value: 'aside',
                    newValue: 'alain-default__aside',
                },
                {
                    type: 'class-name',
                    value: 'content',
                    newValue: 'alain-default__content',
                },
                {
                    type: 'remove-wrap-element-by-class',
                    value: 'wrapper',
                },
            ],
        },
    ], dom => {
        tree.overwrite(filePath, DOM.prettify(dom));
    });
}
function fixDefaultTs(tree, context) {
    const filePath = 'src/app/layout/default/default.component.ts';
    if (!tree.exists(filePath)) {
        console.log(`Default layout not found in [${filePath}]`);
        return;
    }
    ast_1.updateComponentMetadata(tree, filePath, nodes => {
        let children = nodes[0].properties;
        const end = children[children.length - 1].end;
        const toInsert = `,
  preserveWhitespaces: false,
  host: {
    '[class.alain-default]': 'true',
  }`;
        return [new change_1.InsertChange(filePath, end, toInsert)];
    });
}
function fixFullScreenTs(tree, context) {
    const filePath = 'src/app/layout/fullscreen/fullscreen.component.ts';
    if (!tree.exists(filePath)) {
        console.log(`FullScreen layout not found in [${filePath}]`);
        return;
    }
    ast_1.updateComponentMetadata(tree, filePath, nodes => {
        let children = nodes[0].properties;
        const end = children[children.length - 1].end;
        const toInsert = `,
  host: {
    '[class.alain-fullscreen]': 'true',
  }`;
        return [new change_1.InsertChange(filePath, end, toInsert)];
    });
}
function fixHeaderHtml(tree, context) {
    const filePath = 'src/app/layout/default/header/header.component.html';
    if (!tree.exists(filePath)) {
        console.log(`Default layout not found in [${filePath}]`);
        return;
    }
    DOM.replace(tree.read(filePath).toString(), [
        {
            type: 'attr',
            name: 'class',
            rules: [
                {
                    type: 'class-name',
                    value: 'logo',
                    newValue: 'alain-default__header-logo',
                },
                {
                    type: 'class-name',
                    value: 'expanded',
                    newValue: 'alain-default__header-logo-expanded',
                },
                {
                    type: 'class-name',
                    value: 'collapsed',
                    newValue: 'alain-default__header-logo-collapsed',
                },
                {
                    type: 'class-name',
                    value: 'top-nav-wrap',
                    newValue: 'alain-default__nav-wrap',
                },
                {
                    type: 'class-name',
                    value: 'top-nav',
                    newValue: 'alain-default__nav',
                },
                {
                    type: 'class-name',
                    value: 'item',
                    newValue: 'alain-default__nav-item',
                },
                {
                    type: 'class-name',
                    value: 'hidden-xs',
                    newValue: 'hidden-mobile',
                },
            ],
        },
        {
            type: 'tag',
            name: 'a',
            custom: dom => {
                if (dom.parent != null &&
                    dom.parent.attribs &&
                    (dom.parent.attribs['class'] || '').includes('alain-default__header-logo')) {
                    const classes = (dom.attribs['class'] || '').split(' ');
                    classes.push('alain-default__header-logo-link');
                    dom.attribs['class'] = classes.join(' ');
                }
            },
        },
    ], dom => {
        tree.overwrite(filePath, DOM.prettify(dom));
    });
}
function fixSidebarHtml(tree, context) {
    const filePath = 'src/app/layout/default/sidebar/sidebar.component.html';
    if (!tree.exists(filePath)) {
        console.log(`Default layout not found in [${filePath}]`);
        return;
    }
    DOM.replace(tree.read(filePath).toString(), [
        {
            type: 'attr',
            name: 'class',
            rules: [
                {
                    type: 'class-name',
                    value: 'aside-inner',
                    newValue: 'alain-default__aside-inner',
                },
                {
                    type: 'class-name',
                    value: 'user-block',
                    newValue: 'alain-default__aside-user',
                },
                {
                    type: 'class-name',
                    value: 'avatar',
                    newValue: 'alain-default__aside-user-avatar',
                },
                {
                    type: 'class-name',
                    value: 'user-block-dropdown',
                    newValue: '',
                },
                {
                    type: 'class-name',
                    value: 'info',
                    newValue: 'alain-default__aside-user-info',
                },
            ],
        },
    ], dom => {
        tree.overwrite(filePath, DOM.prettify(dom));
    });
}
function v2LayoutRule() {
    return (tree, context) => {
        fixDefaultHtml(tree, context);
        fixDefaultTs(tree, context);
        fixHeaderHtml(tree, context);
        fixSidebarHtml(tree, context);
        fixFullScreenTs(tree, context);
    };
}
exports.v2LayoutRule = v2LayoutRule;
//# sourceMappingURL=v2LayoutRule.js.map