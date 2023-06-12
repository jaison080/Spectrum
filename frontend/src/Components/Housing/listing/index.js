import * as React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Link} from 'react-router-dom';
import classnames from 'classnames'
import styles from './styles.module.css'
import 'spectre.css/dist/spectre.css'


function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, image, title, address, description, price } = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12')
  const cardClasses = classnames('card')

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-title h6">&pound; {price}</div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          {/* <BrowserRouter to={`/details/${id}`}>
           <button type="button" className="btn btn-primary"  >
            Go to property
             </button>
          </BrowserRouter> */}

          <Link  to={`/details/${id}`}>
            <button className="btn btn-primary" type="button">
            Go to property
            </button>
          </Link>

           {/* <BrowserRouter>
          <Routes>
            <Route render={({ history }) => (
              <button className="btn btn-primary" style={{ display: 'inline-block' }} onClick={() => history.push(`/details/${id}`)}>
                Go to property
              </button>
            )}>
            </Route>
            </Routes>
          </BrowserRouter> */}

        </div>
      </div>
    </div>
  )
}

export default Listing