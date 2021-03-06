import { Header } from './Header.js'
import { Button } from './Button.js'

export const Counter = class {

    constructor(selector, startNumber = 0) {
        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = container
        this.number = startNumber
    }

    init() {
        this.render()
    }

    render() {

        this.container.innerHTML = ''

        const h1 = new Header(this.number)
        const button = new Button('+', () => this.inc())
        
        const h1Rendered = h1.render()
        const buttonRendered = button.render()

        h1Rendered.setAttribute('data-test', 'counter__header')
        buttonRendered.setAttribute('data-test', 'counter__button--inc')

        this.container.appendChild(h1Rendered)
        this.container.appendChild(buttonRendered)

    }

    inc() {
        this.number = this.number + 1
        this.render()
    }

    status() {
        console.log('Current number is: ' + this.number)
        return this.number
    }

    toString() {
        return 'Current number is: ' + this.number
    }

    valueOf() {
        return this.number
    }

}

export default Counter