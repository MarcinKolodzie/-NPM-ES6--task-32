import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

describe('Counter', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('should render start state', () => {

        const counter1 = new Counter('body')
        counter1.init()

        const h1 = counter1.container.querySelector('h1')
        const button = counter1.container.querySelector('button')

        expect(h1).toBeInstanceOf(HTMLHeadingElement)
        expect(button).toBeInstanceOf(HTMLButtonElement)

        expect(h1.innerText).toBe(0)
        expect(button.innerText).toBe('+')

    })

    it('should render start state with 5 number', () => {

        const counter1 = new Counter('body', 5)
        counter1.init()

        const h1 = counter1.container.querySelector('h1')
        const button = counter1.container.querySelector('button')

        expect(h1).toBeInstanceOf(HTMLHeadingElement)
        expect(button).toBeInstanceOf(HTMLButtonElement)

        expect(h1.innerText).toBe(5)
        expect(button.innerText).toBe('+')

    })

})

describe('DecreasingCounter', () => {

})

