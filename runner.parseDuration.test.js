const runner = require('./runner');

test('parse full with month/day', () =>
{
    const duration = runner.parseDuration('5y6M25d19h4m3s');
    expect(duration).toStrictEqual({
        years: 5,
        months: 6,
        weeks: NaN,
        days: 25,
        hours: 19,
        minutes: 4,
        seconds: 3
    });
});

test('parse full with week', () =>
{
    const duration = runner.parseDuration('5y13w19h4m3s');
    expect(duration).toStrictEqual({
        years: 5,
        months: NaN,
        weeks: 13,
        days: NaN,
        hours: 19,
        minutes: 4,
        seconds: 3
    });
});

test('parse just year', () =>
{
    const duration = runner.parseDuration('5y');
    expect(duration).toStrictEqual({
        years: 5,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse just month', () =>
{
    const duration = runner.parseDuration('6M');
    expect(duration).toStrictEqual({
        years: NaN,
        months: 6,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse just week', () =>
{
    const duration = runner.parseDuration('13w');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: 13,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse just day', () =>
{
    const duration = runner.parseDuration('25d');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse just hour', () =>
{
    const duration = runner.parseDuration('19h');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: 19,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse just minute', () =>
{
    const duration = runner.parseDuration('4m');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: 4,
        seconds: NaN
    });
});

test('parse just second', () =>
{
    const duration = runner.parseDuration('3s');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: 3
    });
});

test('parse day part with month/day', () =>
{
    const duration = runner.parseDuration('5y6M25d');
    expect(duration).toStrictEqual({
        years: 5,
        months: 6,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse day part with week', () =>
{
    const duration = runner.parseDuration('5y13w');
    expect(duration).toStrictEqual({
        years: 5,
        months: NaN,
        weeks: 13,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse time part', () =>
{
    const duration = runner.parseDuration('19h4m3s');
    expect(duration).toStrictEqual({
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: 19,
        minutes: 4,
        seconds: 3
    });
});

test('parse week with day - fails', () =>
{
    const duration = runner.parseDuration('5y13w5d');
    expect(duration).toStrictEqual({
        years: 5,
        months: NaN,
        weeks: 13,
        days: 5,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    });
});

test('parse week with month - fails', () =>
{
    expect(() => runner.parseDuration('5y6M13w')).toThrow();
});

test('parse out of order', () =>
{
    expect(() => runner.parseDuration('6M5y13w')).toThrow();
});
