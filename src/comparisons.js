export function isToday(date) {
    const d = new Date(date);
    const today = new Date();

    return (
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
    );
}

export function isWeekend(date) {
    const day = new Date(date).getDay();

    return day === 0 || day === 6;
}

export function isDateBetween(date, start, end) {
    const value = new Date(date).getTime();

    return (
        value >= new Date(start).getTime() &&
        value <= new Date(end).getTime()
    );
}