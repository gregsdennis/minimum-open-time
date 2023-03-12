const runner = require('./runner');

test('add year', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: 5,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2028-03-13T08:43:14Z'));
});

test('add month', () =>
{
    const date = new Date('2023-04-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: 3,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-07-13T08:43:14Z'));
});

test('add month over year boundary', () =>
{
    const date = new Date('2022-10-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: 3,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-01-13T08:43:14Z'));
});

test('add month from feb', () =>
{
    const date = new Date('2023-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: 1,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-13T08:43:14Z'));
});

test('add month from feb in leap year', () =>
{
    const date = new Date('2020-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: 1,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2020-03-13T08:43:14Z'));
});

test('add day', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 10,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-23T08:43:14Z'));
});

test('add day over month boundary', () =>
{
    const date = new Date('2023-01-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-02-07T08:43:14Z'));
});

test('add day from feb', () =>
{
    const date = new Date('2023-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-10T08:43:14Z'));
});

test('add day from feb in leap year', () =>
{
    const date = new Date('2020-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2020-03-09T08:43:14Z'));
});

test('add day over year boundary', () =>
{
    const date = new Date('2022-12-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: 25,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-01-07T08:43:14Z'));
});

test('add week', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: 2,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-27T08:43:14Z'));
});

test('add week over month boundary', () =>
{
    const date = new Date('2023-01-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: 3,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-02-03T08:43:14Z'));
});

test('add week from feb', () =>
{
    const date = new Date('2023-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: 3,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-06T08:43:14Z'));
});

test('add week from feb in leap year', () =>
{
    const date = new Date('2020-02-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: 3,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2020-03-05T08:43:14Z'));
});

test('add hour', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: 5,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-13T13:43:14Z'));
});

test('add hour over day boundary', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: 19,
        minutes: NaN,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-14T03:43:14Z'));
});

test('add minute', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: 4,
        seconds: NaN
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-13T08:47:14Z'));
});

test('add second', () =>
{
    const date = new Date('2023-03-13T08:43:14Z');
    const duration = {
        years: NaN,
        months: NaN,
        weeks: NaN,
        days: NaN,
        hours: NaN,
        minutes: NaN,
        seconds: 3
    }
    const added = runner.addDuration(date, duration);
    expect(added).toStrictEqual(new Date('2023-03-13T08:43:17Z'));
});
