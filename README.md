# rntl-1534-repro
Reproduction for https://github.com/callstack/react-native-testing-library/issues/1534


Run `yarn` and then run `yarn tsc`. 

You should observe this error:


```bash
❯ yarn tsc
yarn run v1.22.19
warning ../../package.json: No license field
$ testing-library/reference-types-bug/node_modules/.bin/tsc
src/repro.test.tsx:10:30 - error TS2339: Property 'toHaveStyle' does not exist on type 'JestMatchers<ReactTestInstance>'.

10     expect(matchedComponent).toHaveStyle({ flex: 1 });
                                ~~~~~~~~~~~


Found 1 error in src/repro.test.tsx:10
```
