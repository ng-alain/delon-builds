"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexHtmlPath = getIndexHtmlPath;
exports.getTag = getTag;
exports.getTagInV4 = getTagInV4;
exports.getIndexHtmlContent = getIndexHtmlContent;
exports.addHeadLink = addHeadLink;
exports.addHeadStyle = addHeadStyle;
exports.addHtmlToBody = addHtmlToBody;
const schematics_1 = require("@angular-devkit/schematics");
const change_1 = require("@schematics/angular/utility/change");
const parse5 = require("parse5");
const workspace_1 = require("./workspace");
/** Gets the app index.html file */
function getIndexHtmlPath(host, project) {
    const targetOptions = (0, workspace_1.getProjectTarget)(project, workspace_1.BUILD_TARGET_BUILD);
    if (typeof targetOptions.index === 'string' && targetOptions.index.endsWith('index.html')) {
        return targetOptions.index;
    }
    const htmlPath = `${project.sourceRoot}/index.html`;
    if (host.exists(htmlPath)) {
        return htmlPath;
    }
    throw new schematics_1.SchematicsException('No index.html file was found.');
}
/**
 * Parses the index.html file to get the HEAD tag position.
 */
function getTag(tree, src, tagName) {
    if (parse5.treeAdapters) {
        return getTagInV4(tree, src, tagName);
    }
    const document = parse5.parse(src, {
        sourceCodeLocationInfo: true
    });
    let resNode;
    const visit = (nodes) => {
        nodes.forEach(node => {
            const element = node;
            if (element.nodeName === tagName) {
                resNode = element;
            }
            else {
                if (element.childNodes) {
                    visit(element.childNodes);
                }
            }
        });
    };
    visit(document.childNodes);
    if (!resNode) {
        throw new schematics_1.SchematicsException('Head element not found!');
    }
    return {
        startOffset: resNode.sourceCodeLocation.startTag.endOffset,
        endOffset: resNode.sourceCodeLocation.endTag.startOffset
    };
}
function getTagInV4(_host, src, tagName) {
    const document = parse5.parse(src, {
        locationInfo: true
    });
    let resNode;
    const visit = (nodes) => {
        nodes.forEach(node => {
            const element = node;
            if (element.tagName === tagName) {
                resNode = element;
            }
            else {
                if (element.childNodes) {
                    visit(element.childNodes);
                }
            }
        });
    };
    visit(document.childNodes);
    if (!resNode) {
        throw new schematics_1.SchematicsException('Head element not found!');
    }
    return {
        startOffset: resNode.__location.startTag.endOffset,
        endOffset: resNode.__location.endTag.startOffset
    };
}
/**
 * Get index.html content
 */
function getIndexHtmlContent(tree, project) {
    const indexPath = getIndexHtmlPath(tree, project);
    const buffer = tree.read(indexPath);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path '${indexPath}'`);
    }
    return {
        indexPath,
        src: buffer.toString()
    };
}
/**
 * Adds a link to the index.html head tag
 */
function addHeadLink(tree, project, link) {
    const { indexPath, src } = getIndexHtmlContent(tree, project);
    if (src.indexOf(link) === -1) {
        const node = getTag(tree, src, 'head');
        const insertion = new change_1.InsertChange(indexPath, node.startOffset, link);
        const recorder = tree.beginUpdate(indexPath);
        recorder.insertLeft(insertion.pos, insertion.toAdd);
        tree.commitUpdate(recorder);
    }
}
/**
 * Adds a style to the index.html head end tag
 */
function addHeadStyle(tree, project, style) {
    const { indexPath, src } = getIndexHtmlContent(tree, project);
    if (src.indexOf(style) === -1) {
        const node = getTag(tree, src, 'head');
        const insertion = new change_1.InsertChange(indexPath, node.endOffset, style);
        const recorder = tree.beginUpdate(indexPath);
        recorder.insertLeft(insertion.pos, insertion.toAdd);
        tree.commitUpdate(recorder);
    }
}
/**
 * Adds a html to the index.html body end tag
 */
function addHtmlToBody(tree, project, html) {
    const { indexPath, src } = getIndexHtmlContent(tree, project);
    if (src.indexOf(html) === -1) {
        const node = getTag(tree, src, 'body');
        const insertion = new change_1.InsertChange(indexPath, node.endOffset, html);
        const recorder = tree.beginUpdate(indexPath);
        recorder.insertLeft(insertion.pos, insertion.toAdd);
        tree.commitUpdate(recorder);
    }
}
//# sourceMappingURL=html.js.map