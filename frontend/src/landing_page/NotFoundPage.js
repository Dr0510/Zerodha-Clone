import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return ( 
       <div className="container p-5">
        <div className="row text-center">

        <h1 className="p-3 fs-2">404 Not Found</h1>
        <p className='pb-3'>
          We couldn't find the page you were looking for. Visit <Link to={'/'}> Zerodha's home page </Link>
        </p>
      </div>
    </div>
     );
}

export default NotFoundPage;