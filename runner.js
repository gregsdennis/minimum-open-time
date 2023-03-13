const core = require('@actions/core');
const github = require('@actions/github');


function check(requirement) {
    var now = new Date();
    
    return now >= requirement;
}

const durationPattern = /^((?<year>\d+)y)?(((?<month>\d+)M)?((?<day>\d+)d)?|(((?<week>\d+)w)?))((?<hour>\d+)h)?((?<minute>\d+)m)?((?<second>\d+)s)?$/
function parseDuration(text) {
    var match = durationPattern.exec(text);

    return {
        years: parseInt(match.groups.year),
        months: parseInt(match.groups.month),
        weeks: parseInt(match.groups.week),
        days: parseInt(match.groups.day),
        hours: parseInt(match.groups.hour),
        minutes: parseInt(match.groups.minute),
        seconds: parseInt(match.groups.second)
    }
}

// source: https://stackoverflow.com/a/2706169/878701
function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}

function addDuration(date, duration) {
    if (!isNaN(duration.years)){
        date.setFullYear(date.getFullYear() + duration.years);
    }
    if (!isNaN(duration.months)){
        date = addMonths(date, duration.months);
    }
    if (!isNaN(duration.weeks)){
        date.setDate(date.getDate() + duration.weeks*7);
    }
    if (!isNaN(duration.days)){
        date.setDate(date.getDate() + duration.days);
    }
    if (!isNaN(duration.hours)){
        date.setHours(date.getHours() + duration.hours);
    }
    if (!isNaN(duration.minutes)){
        date.setMinutes(date.getMinutes() + duration.minutes);
    }
    if (!isNaN(duration.seconds)){
        date.setSeconds(date.getSeconds() + duration.seconds);
    }
    return date;
}

function getDurationInput() {
    var time = core.getInput('time');
    if (time !== undefined){
        return parseDuration(time);
    }

    var years = parseInt(core.getInput('years'));
    var months = parseInt(core.getInput('months'));
    var weeks = parseInt(core.getInput('weeks'));
    var days = parseInt(core.getInput('days'));
    var hours = parseInt(core.getInput('hours'));
    var minutes = parseInt(core.getInput('minutes'));
    var seconds = parseInt(core.getInput('seconds'));

    if (weeks !== NaN && (months !== NaN || days !== NaN)) {
        core.setFailed('Weeks are incompatible with months and days');
        return undefined;
    }

    return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

async function run() {
    try {
        core.info('Initializing...');
        const myToken = process.env.GITHUB_TOKEN;
        const octokit = github.getOctokit(myToken);

        const { data: pullRequest } = await octokit.pulls.get({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            pull_number: github.context.issue.number,
        });

        // get parameters

        const openTime = getDurationInput();
        if (openTime === undefined){
            return;
        }

        core.info(`Required duration: ${openTime}`);

        const created = pullRequest.created_at;
        const earliestAllowedMerge = addDuration(created, openTime);
        core.info(`PR can be merged after ${earliestAllowedMerge}`);
        
        if (!check(earliestAllowedMerge)){
            core.setFailed('PR has not been open long enough.');
        }
    } catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

module.exports = {
    run: run, 
    parseDuration: parseDuration,
    addDuration: addDuration,
    check: check
};