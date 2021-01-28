import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { Tree } from '@angular-devkit/schematics';
/** Gets the app index.html file */
export declare function getIndexHtmlPath(_host: Tree, project: ProjectDefinition): string;
/**
 * Parses the index.html file to get the HEAD tag position.
 */
export declare function getTag(host: Tree, src: string, tagName: string): {
    startOffset: any;
    endOffset: any;
};
export declare function getTagInV4(_host: Tree, src: string, tagName: string): {
    startOffset: any;
    endOffset: any;
};
/**
 * Get index.html content
 */
export declare function getIndexHtmlContent(host: Tree, project: ProjectDefinition): {
    indexPath: string;
    src: string;
};
/**
 * Adds a link to the index.html head tag
 */
export declare function addHeadLink(host: Tree, project: ProjectDefinition, link: string): void;
/**
 * Adds a style to the index.html head end tag
 */
export declare function addHeadStyle(host: Tree, project: ProjectDefinition, style: string): void;
/**
 * Adds a html to the index.html body end tag
 */
export declare function addHtmlToBody(host: Tree, project: ProjectDefinition, html: string): void;
