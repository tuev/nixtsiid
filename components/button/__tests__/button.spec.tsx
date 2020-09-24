import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
