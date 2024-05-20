import javascriptObfuscator from 'javascript-obfuscator';

let handler = async (m, { conn, text }) => {
  if (!m.quoted || !m.quoted.text) {
    throw 'قم بالرد على الكود الذي تريد تشفيرة!';
  }

  let codeToObfuscate = m.quoted.text;
  let obfuscatedCode = javascriptObfuscator.obfuscate(codeToObfuscate, {
    compact: true,
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: false,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    debugProtectionInterval: 0,
    disableConsoleOutput: false,
    domainLock: [],
    domainLockRedirectUrl: 'about:blank',
    forceTransformStrings: [],
    identifierNamesCache: null,
    identifierNamesGenerator: 'hexadecimal',
    identifiersDictionary: [],
    identifiersPrefix: '',
    ignoreRequireImports: false,
    inputFileName: '',
    log: false,
    numbersToExpressions: false,
    optionsPreset: 'default',
    renameGlobals: false,
    renameProperties: false,
    renamePropertiesMode: 'safe',
    reservedNames: [],
    reservedStrings: [],
    seed: 0,
    selfDefending: false,
    simplify: true,
    sourceMap: false,
    sourceMapBaseUrl: '',
    sourceMapFileName: '',
    sourceMapMode: 'separate',
    sourceMapSourcesMode: 'sources-content',
    splitStrings: false,
    splitStringsChunkLength: 10,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.5,
    stringArrayEncoding: [],
    stringArrayIndexesType: ['hexadecimal-number'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: 'variable',
    stringArrayThreshold: 0.75,
    target: 'browser',
    transformObjectKeys: false,
    unicodeEscapeSequence: false
  }).getObfuscatedCode();

  if (!obfuscatedCode) {
    throw "خطأ في عملية التشفير :(";
  }

  return m.reply(obfuscatedCode);
}

handler.help = ['enc'];
handler.tags = ['tools'];
handler.alias = ['enc'];
handler.command = /^(enc|تشفير)$/i;

export default handler;
