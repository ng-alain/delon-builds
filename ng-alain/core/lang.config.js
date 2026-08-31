"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANGS_CONFIG = void 0;
exports.getLangConfig = getLangConfig;
exports.getLangData = getLangData;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
exports.LANGS_CONFIG = [
    {
        langs: ['zh-Hans', 'zh-cn', 'zh-Hans-CN', 'zh'],
        zorro: 'zh_CN',
        date: 'zhCN',
        delon: 'zh_CN',
        fileName: 'zh-CN.json'
    },
    {
        langs: ['zh-Hant', 'zh-tw', 'zh-Hant-TW'],
        zorro: 'zh_TW',
        date: 'zhTW',
        delon: 'zh_TW',
        fileName: 'zh-TW.json'
    },
    { langs: ['en'], zorro: 'en_US', date: 'enUS', delon: 'en_US', fileName: 'en-US.json' },
    { langs: ['tr'], zorro: 'tr_TR', date: 'tr', delon: 'tr_TR', fileName: 'tr-TR.json' },
    { langs: ['pl'], zorro: 'pl_PL', date: 'pl', delon: 'pl_PL', fileName: 'pl-PL.json' },
    { langs: ['el'], zorro: 'el_GR', date: 'el', delon: 'el_GR', fileName: 'el-GR.json' },
    { langs: ['ko'], zorro: 'ko_KR', date: 'ko', delon: 'ko_KR', fileName: 'ko-KR.json' },
    { langs: ['hr'], zorro: 'hr_HR', date: 'hr', delon: 'hr_HR', fileName: 'hr-HR.json' },
    { langs: ['ja'], zorro: 'ja_JP', date: 'ja', delon: 'ja_JP' },
    { langs: ['sl'], zorro: 'sl_SI', date: 'sl', delon: 'sl_SI', fileName: 'sl-SI.json' },
    { langs: ['fr'], zorro: 'fr_FR', date: 'fr', delon: 'fr_FR', fileName: 'fr-FR.json' },
    { langs: ['es'], zorro: 'es_ES', date: 'es', delon: 'es_ES', fileName: 'es-ES.json' },
    { langs: ['it'], zorro: 'it_IT', date: 'it', delon: 'it_IT', fileName: 'it-IT.json' },
    { langs: ['vi'], zorro: 'vi_VI', date: 'vi', delon: 'vi_VI', fileName: 'vi_VI.json' },
    { langs: ['ar'], zorro: 'ar_EG', date: 'ar', delon: 'ar_SA', fileName: 'ar-SA.json' }
];
function getLangConfig(lang) {
    return exports.LANGS_CONFIG.find(w => w.langs.includes(lang));
}
function getLangData(lang) {
    let langCog = getLangConfig(lang);
    if (!langCog || !langCog.fileName) {
        langCog = getLangConfig('zh');
    }
    const langFilePath = path.join(__dirname, `../application/files/i18n/${langCog.fileName}`);
    if (!fs.existsSync(langFilePath)) {
        console.log(`No found language files`);
        return null;
    }
    return JSON.parse(fs.readFileSync(langFilePath).toString('utf8')) || null;
}
//# sourceMappingURL=lang.config.js.map