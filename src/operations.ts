import parser from 'yargs-parser'
const prompts: Array<Array<string>> = require('../data/prompts.json')
const gen_cmd = '~quote'

const upperMap: {[key: string]: string} = {
    '{A}': '{G}',
    '{B}': '{H}',
    '{C}': '{I}',
    '{D}': '{J}',
    '{E}': '{K}',
    '{F}': '{L}'
}

function parseMessage(message: string): string[] {
    return parser(message.slice(gen_cmd.length))._
        .map(str => {
            if (str[0] == `'` || str[0] == `"`) {
                return str.slice(1, -1)
            } else {
                return str
            }
        })
}

function substituteNames(prompt: string, names: string[]): string {
    const placeholders = ['{A}', '{B}', '{C}', '{D}', '{E}', '{F}'].slice(0, names.length)
    for (let i = 0; i < names.length; i++) {
        prompt = prompt
            .replace(new RegExp(`${placeholders[i]}`, 'g'), names[i])
            .replace(new RegExp(`${upperMap[placeholders[i]]}`, 'g'), names[i].toUpperCase())
    }
    return prompt;
}
  
function randomChoice<T>(choices: ArrayLike<T>): T {
    return choices[Math.floor(Math.random() * choices.length)];
}

function generateQuote(names: string[]): string {
    const prompt = randomChoice(prompts[names.length-1])
    return substituteNames(prompt, names)
}

export { 
    parseMessage,
    generateQuote,
    substituteNames,
    gen_cmd
}
