import { array } from './ArrayType'
import { functionType } from './FunctionType'
import { keyOfType } from './KeyofType'
import { namedType } from './NamedType'
import { objectType } from './ObjectType'
import { unionType } from './UnionType'
import { stringify } from './stringify'

const A = namedType('A')
const B = namedType('B')
const C = namedType('C')

test('simple only', () => {
  expect(stringify(keyOfType(A))).toMatchInlineSnapshot(`"keyof A"`)
})

test('with object type', () => {
  expect(stringify(keyOfType(objectType()))).toMatchInlineSnapshot(`"keyof {}"`)
})

test('with array type', () => {
  expect(stringify(keyOfType(array(A)))).toMatchInlineSnapshot(`"keyof A[]"`)
})

test('with function type', () => {
  expect(stringify(keyOfType(functionType()))).toMatchInlineSnapshot(`"keyof (() => void)"`)
})

test('with union type', () => {
  const union = unionType(A).addVariant(B).addVariant(C)
  expect(stringify(keyOfType(union))).toMatchInlineSnapshot(`"keyof (A | B | C)"`)
})
