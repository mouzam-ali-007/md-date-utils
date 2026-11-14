import {
    formatDate,
    addDays,
    getDaysDifference,
    isToday,
    isWeekend,
    getRelativeTime
} from "./src/index.js";

console.log(formatDate(new Date()));
console.log(addDays(new Date(), 7));
console.log(getDaysDifference("2026-11-01", "2026-11-11"));
console.log(isToday(new Date()));
console.log(isWeekend(new Date()));
console.log(getRelativeTime(new Date(Date.now() - 3600000)));