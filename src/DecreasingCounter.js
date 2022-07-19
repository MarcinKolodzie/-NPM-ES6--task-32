import { Counter } from './Counter.js'
import { Button } from './Button.js'

export const DecreasingCounter = class extends Counter {

    constructor(...all) {
        super(...all)
    }

    dec() {
        this.number = this.number - 1
        this.render()
    }

    render() {
        super.render()

        const button = new Button('-', () => this.dec())

        const buttonRendered = button.render()

        buttonRendered.setAttribute('data-test', 'counter__button--dec')


        this.container.appendChild(buttonRendered)
    }

}

export default DecreasingCounter