import { Counter, DecreasingCounter } from '../src'

const counter1 = new Counter('.counter-1', 5)
counter1.init()

const counter2 = new DecreasingCounter('.counter-2', -11)
counter2.init()