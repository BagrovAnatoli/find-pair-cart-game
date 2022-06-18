class Timer {
    constructor() {
        console.log('new Timer');
        console.log(window.appState.gameDuration);
    }

    run() {
        const startTime = Date.now();
        this.interval = setInterval(() => {
            const currentTime = Date.now();
            window.appState.gameDuration = currentTime - startTime;
            this.displayTime();
        }, 1000);
    }

    clear() {
        clearInterval(this.interval);
    }

    displayTime() {
        if (!this.minutesElement || !this.secondsElement) {
            return;
        }
        this.minutesElement.textContent = this.formatMinutes();
        this.secondsElement.textContent = this.formatSeconds();
    }

    formatMinutes() {
        return String(Math.floor(window.appState.gameDuration / 60000)).padStart(2, 0);
    }

    formatSeconds() {
        return String(Math.floor(window.appState.gameDuration / 1000) % 60).padStart(2, 0);
    }

    setTimeElements(minutesEment, secondsElement) {
        this.minutesElement = minutesEment;
        this.secondsElement = secondsElement;
    }
}