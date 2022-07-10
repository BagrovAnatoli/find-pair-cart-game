/* eslint-disable @typescript-eslint/no-var-requires */
const { GameTimer } = require('./timer');

describe('GameTimer', () => {
    Object.defineProperty(global, 'window', {
        value: {
            appState: {
                gameDuration: 0,
            },
        },
        writable: true,
    });

    it('should create interval by run method', () => {
        const testTimer = new GameTimer();

        testTimer.run();
        testTimer.interval.unref();

        expect(testTimer.interval).toBeTruthy();
    });

    it('should clear interval', () => {
        const testTimer = new GameTimer();

        testTimer.run();
        testTimer.clear();

        expect(testTimer.interval._destroyed).toBeTruthy();
    });

    it('should return 1 minute', () => {
        const testTimer = new GameTimer();
        window.appState.gameDuration = 60000;

        const minutes = testTimer.getMinutes();

        expect(minutes).toEqual(1);
    });

    it('should return 30 seconds', () => {
        const testTimer = new GameTimer();
        window.appState.gameDuration = 90000;

        const minutes = testTimer.getSeconds();

        expect(minutes).toEqual(30);
    });

    it('should show number as 2-signed string', () => {
        const testTimer = new GameTimer();
        const number = 1;

        const string = testTimer.formatValues(number);

        expect(string).toEqual('01');
    });
});
