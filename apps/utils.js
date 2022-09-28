import {KroemelsSimpleSheet} from "../main.js";

const _logPrefix = (debug = false) => {
    return `${debug ? 'DEBUG: ' : ''}${KroemelsSimpleSheet.name} | `
};

export const debug = (...args) => {
    if (KroemelsSimpleSheet.logLevel > 1) console.log(_logPrefix(true), ...args);
};
export const log = (...args) => console.log(_logPrefix(), ...args);
export const warn = (...args) => {
    if (KroemelsSimpleSheet.logLevel > 0) console.warn(_logPrefix(), ...args);
};
export const error = (...args) => console.error(_logPrefix(), ...args);

export const getAllTokensOfActor = (actorId) => {
    return canvas.tokens.objects.children.filter(token => token?.document?.actorId === actorId)
};

export const timeout = async (time) => {
    new Promise(r => setTimeout(r, time));
};

export const isCurrentUser = (userID) => {
    return (userID === game.userId);
};