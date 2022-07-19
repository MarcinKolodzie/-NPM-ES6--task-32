import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

describe('Counter', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    const initCounter = (startNumber) => {
        const counter = new Counter('body', startNumber)
        counter.init()

        const getH1 = () => counter.container.querySelector('h1')
        const getButton = () => counter.container.querySelector('button')

        expect(getH1()).toBeInstanceOf(HTMLHeadingElement)
        expect(getButton()).toBeInstanceOf(HTMLButtonElement)

        expect(getButton().innerText).toBe('+')

        return { counter, getH1, getButton }

    }

    it('should render start state', () => {

        const { getH1 } = initCounter()

        expect(getH1().innerText).toBe(0)

    })

    it('should render start state with 5 number', () => {

        const { getH1 } = initCounter(5)

        expect(getH1().innerText).toBe(5)

    })

    it('should render incerased value after click', () => {

        const {getH1, getButton } = initCounter()

        getButton().click()

        expect(getH1().innerText).toBe(1)

    })

    
    it('should render incerased by 3 value after 3 click', () => {

        const {getH1, getButton } = initCounter()

        getButton().click()
        getButton().click()
        getButton().click()

        expect(getH1().innerText).toBe(3)

    })

    it('should render increased value after direct `.inc` call', () => {

        const {getH1, counter } = initCounter()

        counter.inc()

        expect(getH1().innerText).toBe(1)

    })


})

describe('DecreasingCounter', () => {

})

