# @kolodziej/counters

Package with two counters `Counter` and `DecreasingCounter` constructors.

## Installation

```
npm install @kolodziej/counters
```

## Usage

To run demo app clone this repo and simply run:

```
npm install
```

```
npm start
```

## API

Every counter gets one argument - selector of element to be rendered in.
Counter should be initialized after creation by calling `.innit()` method (sorry for addition 'n').

```javascript
import { Counter, DecreasingCounter } from '@kolodziej/counters'

const counter1 = new Counter('.counter-1')
counter1.init()

const counter2 = new DecreasingCounter('.counter-2')
counter2.init()
```