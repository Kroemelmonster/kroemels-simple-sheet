import {log, isCurrentUser} from "./apps/utils.js";

export class KroemelsSimpleSheet {
    static logLevel = 2;
    static name = "kroemels-simple-sheet";

    static init() {
        log(`Initializing`);

    }
}

Hooks.once('init', async function () {
    KroemelsSimpleSheet.init();
});
