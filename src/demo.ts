const main = async (): Promise<void> => {
    while(true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

const readKeyStrokes = () => {
    if (process.stdout.isTTY) {
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on("readable", function () {
            const chunk = process.stdin.read();
            if (chunk != null) {
                if (chunk.toString() === "q") {
                    console.log("Exiting...");
                    process.exit(0);
                }
                console.log("Got key stroke: ", chunk.toString());
            }
            process.stdin.resume();
        });
    } else {
        console.log("You are not using a tty device...");
    }
}

readKeyStrokes();

main().catch((err) => {
    console.log("Error occurred: ", err);
});
