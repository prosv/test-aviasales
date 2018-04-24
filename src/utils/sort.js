export const sort = (data, field) => {
    return data.sort(
        (a, b) => {
            return a[field] - b[field];
        });
};