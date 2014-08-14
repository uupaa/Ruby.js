# Ruby.js [![Build Status](https://travis-ci.org/uupaa/Ruby.js.png)](http://travis-ci.org/uupaa/Ruby.js)

[![npm](https://nodei.co/npm/uupaa.ruby.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.ruby.js/)

Extend Ruby functions.

# Document

- [Ruby.js wiki](https://github.com/uupaa/Ruby.js/wiki/Ruby)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

# How to use

## Standard call

```js
Ruby.uniq([1, 1]) -> [1]
Ruby.ord("ab")    -> 97
```


## Direct call

```js
Ruby[2].Array.prototype.uniq.call([1, 1]) -> [1]
Ruby[2].String.prototype.ord.call("ab")   -> 97
```


## OOP Extended

```js
Ruby(2);

[1, 1].uniq() -> [1]
"ab".ord()    -> 97
```

