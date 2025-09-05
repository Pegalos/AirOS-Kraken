const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];

if (typeof globalThis.bmDebug === "function") {
    globalThis.bmDebug(`bm:debug [${timestamp}] test.js loaded and registering command.`);
}

globalThis.bmCommandRegistry = globalThis.bmCommandRegistry || {};
globalThis.bmCommandRegistry.test = function(args) {
    const ts = new Date().toISOString().replace('T', ' ').split('.')[0];
    if (typeof globalThis.bmDebug === "function") {
        globalThis.bmDebug(`bm:debug [${ts}] test.js 'test' command executed.`);
    }
    return `bm:test [${ts}] hello world`;
};

return `bm:debug [${timestamp}] test.js install complete.`;
