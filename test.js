globalThis.bmCommandRegistry = globalThis.bmCommandRegistry || {};
globalThis.bmCommandRegistry.test = function(args) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    return `bm:test [${timestamp}] hello world`;
};

return "works";
