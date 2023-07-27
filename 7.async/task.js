class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(setTime, callback) {
        if (!setTime || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        };
        if (this.alarmCollection.find(time => time[time] === setTime)) {
            console.warn('Уже присутствует звонок на это же время');
        };
        this.alarmCollection.push({
            callback: callback,
            time: setTime,
            canCall: true,
        });
    };

    removeClock(timeRemove) {
        this.alarmCollection = this.alarmCollection.filter(time => time.time !== timeRemove);
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    start() {
        if (!!this.intervalId) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(element => {
                    if (element.time === this.getCurrentFormattedTime() && element.canCall == true) {
                        element.canCall = false;
                        element.callback();
                    };
                });
            }, 1000);
        };
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        });
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};