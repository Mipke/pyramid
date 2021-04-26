# Pyramid

>A library of base-layer React components that aim to make laying out pages easier and to eliminate repetitive 
>css styling whose only purpose is to layout items on a screen

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@mipke/pyramid
[npm-url]: http://npmjs.org/package/@mipke/pyramid

## 💡 Motivation

This library seeks to cut down on the frequency of style writing for the exclusive purpose of laying out a page. 
A potential source of frustration in developing a React frontend (or any frontend) is looking back at each screen's 
style sheet to find that a majority of the lines were only concerned with laying out the content. Maybe to get the spacing right 
or to align some divs in a particular arrangement. Ideally, styles would be written exclusively for 
the actual visual appeal of a particular component. This library seeks to provide a simple means to do this. 

A developer can utilize a library of layout components like this one to arrange their simple components and then
focus styling efforts on the individual modules of the simpler components (buttons, inputs, headings, etc.). Done right,
almost no styling should be required on any given screen since the components do all the work instead.

## 📦 Install

Use Pyramid in your project:
```bash
yarn add @mipke/pyramid
```

## 💻 Develop

To setup for development, just install the project's dependencies and start the styleguidist server:
```bash
yarn install
yarn start
```

It is also easy to compile and publish to npm using the following:
```bash
yarn build
yarn publish
```

