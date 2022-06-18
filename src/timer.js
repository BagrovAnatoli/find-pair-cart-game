class Timer {
    constructor() {
        console.log('new Timer');
        console.log(window.appState.gameDuration.min);
        console.log(window.appState.gameDuration.sec);
    }

    start() {
        this._start = Date.now();
        this.interval = setInterval(() => {
            const current = Date.now();
            const timeMilliseconds = current - this._start;
            this.saveTime(timeMilliseconds);
            this.displayTime();
        }, 1000);
    }

    clear() {
        clearInterval(this.interval);
    }

    saveTime(ms) {
        const sec = Math.floor(ms / 1000);
        window.appState.gameDuration.min = Math.floor(sec / 60);
        window.appState.gameDuration.sec = sec % 60;
    }

    displayTime() {
        if (!this.minutesElement || !this.secondsElement) {
            return;
        }
        this.minutesElement.textContent = String(window.appState.gameDuration.min).padStart(2,0);
        this.secondsElement.textContent = String(window.appState.gameDuration.sec).padStart(2,0);
    }

    setTimeElements(minutesEment, secondsElement) {
        this.minutesElement = minutesEment;
        this.secondsElement = secondsElement;
    }
}