'use strict'

import test from 'ava'
import m from '.'

test('get tinyfaces', async t => {
  const tinyfaces = await m()

  t.true(tinyfaces.length > 0)
})

test('get female tinyfaces', async t => {
  const tinyfaces = await m({ gender: 'female' })

  tinyfaces.map(f => t.is(f.gender, 'female'))
  t.true(tinyfaces.length > 0)
})

test('get male tinyfaces', async t => {
  const tinyfaces = await m({ gender: 'male' })

  tinyfaces.map(f => t.is(f.gender, 'male'))
  t.true(tinyfaces.length > 0)
})
