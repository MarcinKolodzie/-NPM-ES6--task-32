import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

describe('Counter', () => {

    describe('buisness logic - increasing, decreasing', () => {

        it('Counter should be an ES6 class instance', () => {

            expect(() => Counter()).toThrow("Cannot call a class as a function")

        })

        it('should have number property for storing data', () => {

            const counter1 = new Counter('body')

            expect(counter1).toBeDefined()

        })

        it('should have selector property for storing passed selector', () => {

            const selector = 'body'
            const counter1 = new Counter(selector)

            expect(counter1.selector).toBeDefined()
            expect(counter1.selector).toBe(selector)

        })

        it('should have container property for storing found HTML element', () => {

            const counter1 = new Counter('body')

            expect(counter1.container).toBeDefined()
            expect(counter1.container).toBeInstanceOf(HTMLElement)
            expect(counter1.container).toBeInstanceOf(HTMLBodyElement)

        })


    })

})

describe('DecreasingCounter', () => {

    describe('buisness logic - increasing, decreasing', () => {

        it('DecreasingCounter should be an ES6 class instance', () => {

            expect(() => DecreasingCounter()).toThrow("Cannot call a class as a function")

        })
    })

})
