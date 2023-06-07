import * as React from 'react'
import Hero from '../Hero'

function CoverPage({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        <Hero miniHero={miniHero} />
        {children}
      </main>
      <footer className="text-center mb-5">
        Developed By
        {' '}
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team Spectrum
        </a>
        , 2023
      </footer>
    </>
  )
}

export default CoverPage