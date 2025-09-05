window.bmTestCommand = function(args) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    if (args[0] === 'test') {
        return `bm:test [${timestamp}] hello world`;
    } else {
        return `bm:test [${timestamp}] Unknown command. Usage: bm test`;
    }
};
