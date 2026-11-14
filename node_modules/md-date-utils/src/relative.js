export function getRelativeTime(date) {
    const diff = Date.now() - new Date(date).getTime();

    const seconds = Math.floor(Math.abs(diff) / 1000);

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    return `${days} days ago`;
}