import { format } from 'date-fns';

const timestampToDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return format(date, 'dd MMM yyyy');
};

export { timestampToDate }