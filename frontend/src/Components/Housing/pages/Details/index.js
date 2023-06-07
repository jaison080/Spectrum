import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import CoverPage from '../../coverpage'
import PropertyDetails from '../../propertyDetails'

function Details({ propertyId }) {
  return (
    
      <div className="container">
        <CoverPage miniHero>
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId )} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
        </CoverPage>
     </div>
    
  )
}

export default Details