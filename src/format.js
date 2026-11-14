export function formatDate(date, format = "YYYY-MM-DD") {
    const d = new Date(date);

    if (isNaN(d.getTime())) {
        throw new Error("Invalid date");
    }

    const values = {
        YYYY: d.getFullYear(),
        MM: String(d.getMonth() + 1).padStart(2, "0"),
        DD: String(d.getDate()).padStart(2, "0"),
        HH: String(d.getHours()).padStart(2, "0"),
        mm: String(d.getMinutes()).padStart(2, "0"),
        ss: String(d.getSeconds()).padStart(2, "0"),
    };

    return format.replace(
        /YYYY|MM|DD|HH|mm|ss/g,
        token => values[token]
    );
}