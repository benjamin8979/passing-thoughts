// Utility functions

// Calculate time when new thought should expire
function getNewExpirationTime() {
    return Date.now() + 30 * 1000;
}

// Generate new ID for new thought
let nextID = 0;
function generateID() {
    return nextID++;
}

// Generate thought color
function generateColor() {
    const rand = Math.floor(Math.random() * 128 + 1);
    if (rand > 64) {
        return "#eee";
    }
    else if (rand > 32) {
        return "LemonChiffon";
    }
    else if (rand > 16) {
        return "MistyRose";
    }
    else if (rand > 8) {
        return "PaleGreen";
    }
    else if (rand > 4) {
        return "Turquoise";
    }
    else if (rand > 2) {
        return "BlueViolet";
    }
    else if (rand > 1) {
        return "Crimson";
    }
    else {
        return "GoldenRod";
    }
}

export {getNewExpirationTime, generateID, generateColor};