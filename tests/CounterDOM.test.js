import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

describe('Counter', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    const initCounter = (startNumber) => {
        const counter = new Counter('body', startNumber)
        counter.init()

        const h1 = counter.container.querySelector('h1')
        const button = counter.container.querySelector('button')

        expect(h1).toBeInstanceOf(HTMLHeadingElement)
        expect(button).toBeInstanceOf(HTMLButtonElement)

        expect(button.innerText).toBe('+')

        return { counter, h1, button }

    }

    it('should render start state', () => {

        const { h1 } = initCounter()

        expect(h1.innerText).toBe(0)

    })

    it('should render start state with 5 number', () => {

        const { h1 } = initCounter(5)

        expect(h1.innerText).toBe(5)

    })

    it('should render incerased value after click', () => {

        const { button } = initCounter()

        button.click()

        const h1 = document.querySelector('h1')

        expect(h1.innerText).toBe(1)

    })

})

describe('DecreasingCounter', () => {

})

