
import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Homes that Suites You !</h1>
        <p className="mb-0">We bring affordable & comfortable homes & stays to your finger tips</p>
      </div>
    </div>
  )
}

export default Hero