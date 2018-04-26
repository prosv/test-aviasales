export const formatDate = (jsonDate) => {
    const date = new Date(jsonDate.replace(/(\d{2})\.(\d{2})\.(\d{2})/, 20 + '$3/$2/$1'));

    const optionsDayAndMonth = {
        month: 'short',
        day: '2-digit'
    };

    const optionsYear = {
        year: 'numeric'
    };

    const optionsWeekday = {
        weekday: 'short'
    };


    const dayAndMonth = date.toLocaleString("ru", optionsDayAndMonth).replace('.', '');
    const year = date.toLocaleString("ru", optionsYear).substring(0, 5);
    const weekday = date.toLocaleString("ru", optionsWeekday);

    return dayAndMonth + ' ' + year + ', ' + weekday.charAt(0).toUpperCase() + weekday.slice(1);
};

export const formatTime = (time) => {
    return time.length === 4 ? '0' + time : time;
};