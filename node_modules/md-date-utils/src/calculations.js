export function addDays(date, days) {
    const result = new Date(date);

    if (isNaN(result.getTime())) {
        throw new Error("Invalid date");
    }

    result.setDate(result.getDate() + days);

    return result;
}

export function subtractDays(date, days) {
    return addDays(date, -days);
}

export function getDaysDifference(start, end) {
    const first = new Date(start);
    const second = new Date(end);

    if (isNaN(first.getTime()) || isNaN(second.getTime())) {
        throw new Error("Invalid date");
    }

    const firstDay = Date.UTC(
        first.getFullYear(), first.getMonth(), first.getDate()
    );

    const secondDay = Date.UTC(
        second.getFullYear(), second.getMonth(), second.getDate()
    );

    return Math.round((secondDay - firstDay) / 86400000);
}