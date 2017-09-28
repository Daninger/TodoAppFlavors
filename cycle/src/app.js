import {div} from '@cycle/dom'
import xs from 'xstream'

export function TodoApp (sources) {
  const vtree$ = xs.of(
    div('Hello Cycle Todo!')
  )

  const sinks = {
    DOM: vtree$
  }

  return sinks
}
