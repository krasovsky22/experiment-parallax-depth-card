# experiment-parallax-depth-card

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/experiment-parallax-depth-card.svg)](https://www.npmjs.com/package/experiment-parallax-depth-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [Demo](https://krasovsky22.github.io/experiment-parallax-depth-card/)

![Test Image 1](screenshot.gif)

## Install

```bash
npm install --save experiment-parallax-depth-card
```

## Usage

```tsx
import React, { Component } from 'react'

import { ParallaxDepthCard } from 'experiment-parallax-depth-card'
import 'experiment-parallax-depth-card/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ParallaxDepthCard backgroundUrl={URL} title='Some Card'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </ParallaxDepthCard>
    )
  }
}
```

## License

MIT © [krasovsky22](https://github.com/krasovsky22)
