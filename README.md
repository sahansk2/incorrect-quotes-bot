# Incorrect Quotes Bot
TODO: Information for how to deploy

A Discord bot version of [ScatterPatter's Incorrect Quotes Generator](https://incorrect-quotes-generator.neocities.org/).

## Data 
As the prompts on ScatterPatter's Incorrect Quotes Generator are copyright to their respective authors, they are not included in this repository.

Place all prompts in `/data/prompts.json`. The JSON content should be an array of arrays, where the first array is prompts requiring one person, the second is prompt requiring two people, up to six people.

Don't forget to include `\n` in the prompts if you want to start a new line.

### Example `data/prompts.json` content

```json
[
    [
        "{A}: Oh what a wonderful world.",
        "{A}: Can you believe my name is {G}?!?"  
    ],
    [
        "{A}: {B}, we're good friends, right? \n{B}: No we aren't."
    ],
    [
        "{A}, {B}: {C}, did you forget to buy pizza again? \n{C}: uhhhh...",
        "{A}, {B}, {C}: Nobody expects the Spanish Inquisition"
    ],
    [
        "{A}: If all of us, me, {B}, {C}, and {D} were Adventure Time characters, who do you think would be the slime elemental?"
    ],
    [
        "{A}, {B}, {C}, {D}, {E}: GO GO POWER RANGERS"
    ],
    [
        "{A}: I have no creativity to come up with an example skit for six characters."
    ]
]
```

### Placeholder format
Here are what the placeholders are:
* `{A}`: Person 1's name. (`{G}` for all caps)
* `{B}`: Person 2's name. (`{H}` for all caps)
* `{C}`: Person 3's name. (`{I}` for all caps)
* `{D}`: Person 4's name. (`{J}` for all caps)
* `{E}`: Person 5's name. (`{K}` for all caps)
* `{F}`: Person 6's name. (`{L}` for all caps)

This is the system used on ScatterPatter's website. For example, if a prompt was:

```
{A}: Where's my food? {H}!
```

where person 1 is "Alice" and person 2 is "Bob", then the output would be:

```
Alice: Where's my food? BOB!
```

## License

This code is AGPLv3 licensed. So TLDR if people use this bot, they need access to the source code too. 