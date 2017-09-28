import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import {TodoApp} from './app'

const main = TodoApp

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
