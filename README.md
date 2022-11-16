# Care Plan SDK
[![npm version](https://img.shields.io/npm/v/careplan.svg?style=flat-square)](https://www.npmjs.org/package/careplan)
![Build status](https://github.com/CarePlanSDK/careplan/actions/workflows/ci.yml/badge.svg)
[![install size](https://packagephobia.com/badge?p=careplan)](https://packagephobia.com/result?p=careplan)
[![npm downloads](https://img.shields.io/npm/dm/careplan.svg?style=flat-square)](http://npm-stat.com/charts.html?package=careplan)
[![](https://data.jsdelivr.com/v1/package/npm/careplan/badge)](https://www.jsdelivr.com/package/npm/careplan)
[MIT License](./LICENSE)

## Careplan

The CarePlans platform describes the intentions of how one or more practitioners plan to deliver care to a specific patient.
Care plans are used in a variety of areas and scopes ranging from the encounter or visit specifically to cross-visits.

## Installing

Using npm:

```bash
$ npm install careplan
```

Using yarn:

```bash
$ yarn add careplan
```

## Features

* [Authentication](https://github.com/CarePlanSDK/careplan/blob/master/docs/Authentication.md)
* [Careplan](https://github.com/CarePlanSDK/careplan/blob/master/docs/Careplan.md)
* [Content](https://github.com/CarePlanSDK/careplan/blob/master/docs/Content.md)

## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const careplan = require('careplan');

```

```ts
import { refreshToken, listCarePlan, listContent } from 'careplan';

```