export function strictEqual(a, b) {
    if (Number.isNaN(a, b)) {
        return false;
    } else if (!Number.isNaN(a, b)) {
        if (!a && !b) {
            return true;
        } else return Object.is(a, b);
    }
}
