# tinyfaces [![Build Status](https://travis-ci.org/bukinoshita/tinyfaces.svg?branch=master)](https://travis-ci.org/bukinoshita/tinyfaces)


> A JavaScript wrapper for TinyFaces API


## Install

```bash
$ yarn add tinyfaces
```


## Usage

```js
const tinyfaces = require('tinyfaces')

tinyfaces().then(t => console.log(t))

/*
[{
  avatars: [ [Object], ...],
  avatars_origin: {
    facebook_profile_link: FB_URL,
    id: 862,
    name: 'Timothy Achumba'
  },
  first_name: 'Jack',
  gender: 'male',
  last_name: 'Sleeper'
}, ...]
*/
```


## API

### tinyfaces([options])

Type: `object`

Returns a `promise`

#### options

##### gender

Type: `string`<br/>
Default: returns both genders<br/>
Options: `male` / `female`

Tinyface gender

##### minQuality

Type: `number`<br/>
Options: `1`, `2`, `3`, `4`, `5`, `6`

Tinyface avatar quality — 1: low / 6: high


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
