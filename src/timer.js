class Timer {
    constructor() {
        console.log('new Timer');
        console.log(window.appState.time.min);
        console.log(window.appState.time.sec);
    }

    start() {
        this.start = Date.now();
        this.interval = setInterval(() => {
            const current = Date.now();
            const timeMilliseconds = current - this.start;
            this.saveTime(timeMilliseconds);
        }, 1000);
    }

    saveTime(ms) {
        const sec = Math.floor(ms / 1000);
        window.appState.time.min = Math.floor(sec / 60);
        window.appState.time.sec = sec % 60000;

        console.log(window.appState.time.min + ':' + window.appState.time.sec);
    }
}