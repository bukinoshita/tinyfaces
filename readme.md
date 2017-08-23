# tinyfaces [![Build Status](https://travis-ci.org/bukinoshita/tinyfaces.svg?branch=master)](https://travis-ci.org/bukinoshita/tinyfaces)

> A JavaScript wrapper for [TinyFaces](https://github.com/maximedegreve/TinyFaces) API

<img src="https://tinyfac.es/images/front.png" width="600"/>

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
    name: 'Jakk Sheer'
  },
  first_name: 'Jakk',
  gender: 'male',
  last_name: 'Sheer'
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


## Rules

- You can’t use any of our content next to any adult or discrimating content.
- You should never use the real name of the person in the photo in your designs.
- Never use a photo for fake testimonals.
- This list of rules might grow in the future and should be checked regularly.

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
