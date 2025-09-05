function handleTestCommand(args) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    const cmdArgs = args.slice(1);

    const firstArg = cmdArgs[0];

    if (firstArg === "test") {
        return `bm:test [${timestamp}] hello world`;
    } else {
        return `bm:test [${timestamp}] Unknown command. Usage: bm test`;
    }
}

return handleTestCommand(args);
