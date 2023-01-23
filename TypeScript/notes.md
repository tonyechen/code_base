# TypeScript Yuh
## Benefits:
- static typing - preserve type
- code completion
- refactoring
- shorthand notations

## Compile TypeScript Files:
```shell
tsc <file>
```

## Create tsconfig.json
```shell
tsc --init
```

## Type Annotations:
```TypeScript
let varName: type;
```
JS + TypeScript types:
- number
- string
- boolean
- null
- undefined
- object
- any
- unknown
- never
- enum
- tuple

## Tuple
- fixed length array with defined types

## Enums
-  store a list of related constants

# Advanced Typing
## Type Alias
```typescript
type Name = {
    readonly first_name: number,
    readonly last_name: number
}
```

## Union Type
- a variable can be either types
```typescript
function foo(num: number | string)
```

## Intersection Type
- merge types together 
```typescript
type firstName = {
    firstName: number
};

type lastName = {
    lastName: number
};

type name = firstName & lastName;
```

## literal type:
```typescript
type quantity = 50 | 100;
let num: quantity = 50; // can only be 50 or 100
```