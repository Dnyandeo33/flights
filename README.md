# Image gallery

> A simple

## Table of contents

- [Image gallery](#image-gallery)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)

## General info

> Flight details small project using HTML, CSS, JavaScript

## Screenshots

![screenshot](./assets/output.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and run npm install

## Code Examples

```js
const loadHandler = () => {
	const hadingTitle = createTitle(data.header);
	dom.container.append(hadingTitle);

	const sortedFlight = sortFlight(data.flights);
	sortedFlight.forEach((flightData) => {
		const flightDom = createFlight(flightData);
		dom.container.append(flightDom);
	});
};
```

## Features

List of features ready and Todos for future development

- Hero image
- Title of flight schedule
- List of flight details

## Status

Project is: _done_
