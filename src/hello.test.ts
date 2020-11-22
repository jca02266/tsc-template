import { hello } from './hello'

test('test', () => {
  expect(hello()).toEqual('Hello, World!')
})
