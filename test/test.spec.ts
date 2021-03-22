import { parseMessage, gen_cmd, substituteNames } from '../src/operations'
import assert from 'assert'

describe('Parsing functionality', () => {
    it('Should handle single-word parameters', () => {
        const result = parseMessage(`${gen_cmd} Mike Apple Banana`)
        assert.deepStrictEqual(result, ['Mike', 'Apple', 'Banana'])
    })

    it('Should handle multi word parameters enclosed by double quotes', () => {
        const result = parseMessage(`${gen_cmd} "Hu Tao" Mike Banana`)
        assert.deepStrictEqual(result, ['Hu Tao', 'Mike', 'Banana'])
    })

    it('Should handle multi word parameters enclosed by single quotes', () => {
        const result = parseMessage(`${gen_cmd} 'Hu Tao' Mike Banana`)
        assert.deepStrictEqual(result, ['Hu Tao', 'Mike', 'Banana'])
    })

    it('Should handle multiple multi-word parameters enclosed by any quotes', () => {
        const result = parseMessage(`${gen_cmd} 'Hu Tao' "Johnny Appleseed"`)
        assert.deepStrictEqual(result, ['Hu Tao', 'Johnny Appleseed'])
    })
})

describe('Substitute functionality', () => {
    it('Should cleanly substitute names (count=4)', () => {
        const names = ['Rosalina', 'Kamisama', 'Grim Reaper', 'Satan']
        const prompt = "I can't believe {A} and {B} are teaming up to defeat {C} and {D}"
        assert.strictEqual(
            substituteNames(prompt, names),
            `I can't believe ${names[0]} and ${names[1]} are teaming up to defeat ${names[2]} and ${names[3]}`
        )
    })
})