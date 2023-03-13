# minimum-open-time

For collaborative projects, keeping pull requests open for a minimum time can foster more cooperation by ensuring more people have an opportunity to view proposed changes.

This GitHub action can be used to help ensure PRs remain open for a minimum time.

## Action template

Add this workflow to your _./github/workflows/_ folder.

```yaml
on: [pull_request, workflow_dispatch]

jobs:
  require-minimum-open-time:
    runs-on: ubuntu-latest
    name: Require Minimum Open Time
    steps:
    - uses: actions/checkout@v2
    - uses: gregsdennis/minimum-open-time@main
      with:
        time: 2d # see below for options
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

You can also [schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) the task to run periodically so that the action result updates automatically.

## Options

The time can be specified in two ways: via a parsed time string or by specifying components explicitly.

***NOTE** Because these options are mutually exclusive, they are both configured as optional parameters.  However, specifying no parameters will yield a 0-time requirement for PRs to stay open.*

### Time String

I'm not sure if this is a standard, but I've seen it in several places, and it's slightly less verbose than ISO8601/RFC3339 durations.

The string is a series of integers and time unit codes.  The codes are pretty simple:

- `y` - years
- `M` - months
- `w` - weeks
- `d` - days
- `h` - hours
- `m` - minutes
- `s` - seconds

This is case sensitive to distinguish between months and minutes.

Any of these may be specified with the exception that months `M` and weeks `w` cannot be specified together.

Examples include:

- `2d12h` - 2 days, 12 hours
- `3M4d15m` - 2 months, 4 days, 15 minutes

### Explicit

If you prefer to be more explicit, you can also use additional variables to define the open time:

- `years`
- `months`
- `weeks`
- `days`
- `hours`
- `minutes`
- `seconds`

As with the time string, months `M` and weeks `w` cannot be specified together.