export default function datetime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };

    function getDays() {
        const today = new Date();
        const day = today.getDate();
        let sufix = "th";
        if (day > 3 && day < 21) sufix = 'th';
        switch (day % 10) {
            case 1:
                sufix = "st";
            case 2:
                sufix = "nd";
            case 3:
                sufix = "rd";
            default:
                sufix = "th";
        }
        const weekday = today.getDayName();
        const month = today.getMonthName();
        const hours = ('0' + today.getHours()).slice(-2);
        const minutes = ('0' + today.getMinutes()).slice(-2);
        return "It's <span class='hour'>" + hours + ":" + minutes + "</span><br/><span class='date'>" + month + " " + day + sufix + ", " + weekday + "."
    }
    return getDays()
}