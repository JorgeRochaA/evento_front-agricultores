export const createCreatedAt = (created_at: string): string => {
    const date = new Date(created_at);
    const hour = date.getHours() % 12 || 12;
    return `${hour.toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
};