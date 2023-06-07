// import * as React from 'react'

// import Hero from '../../components/Hero'
// import {
//   PropertyListingsProvider,
//   PropertyListingsConsumer
// } from '../../context/PropertyListingsProvider'

// import Listing from '../../components/listing'
// import Filter from '../../components/filter'

// function Home() {
//   return (
//     <React.Fragment>
//       <Hero />
//       <Filter />
//       <div className="container">
//         <PropertyListingsProvider >
//           <PropertyListingsConsumer>
//           {
//             function(value) 
//             {
//              const { propertyListings,allListings, updateFilter } = value
//              return (
//             <React.Fragment>
//               <Filter 

//                 updateFilter={updateFilter} 
//                 postcodes={allListings
//                   .map(listing => listing.postcode.split(' ')[0])
//                   .filter((item, i, arr) => arr.indexOf(item) === i)}      
//               />

//              <div className="columns">
//               {propertyListings.map(listing => (
//                 <Listing listing={listing} key={listing.address} />
//                 ))}
//                </div>
//             </React.Fragment>
//              )
//             }
//           }
//           </PropertyListingsConsumer>
//         </PropertyListingsProvider>
//       </div>
//     </React.Fragment>
//   )
// }
// export default Home

import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'
// import Hero from '../../components/Hero'
import CoverPage from '../../coverpage'
import Listing from '../../listing'
import Filter from '../../filter'

function Housing() {
  return (
    
      <div className="container">
        <CoverPage>
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={propertyListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <div className="columns">
                  {propertyListings.map(listing => (
                    <Listing listing={listing} key={listing.id} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </CoverPage>
      </div>
    
  )
}

export default Housing
