import React from 'react';
import { Link } from 'react-router-dom';
function Team() {
    return ( 
        <div className='container'>
            <div className='row pb-5'>
                 <div>
            <h3 className='fs-3 text-center m-4 pt-5 text-muted border-top'>People</h3>
        </div>
        <div className='row pb-5'>
            <div className='col-2 p-2'>

            </div>
            <div className='col-4 '>
                <img src='media/images/nithinKamath.jpg' className='m-3 p-3'  alt='CEO' style={{borderRadius:'50%', width:'90%', }}/>
                <p className='text-center fs-4'>Nithin Kamath</p>
                <p className='text-center fs-6 text-muted'>Founder, CEO</p>
            </div>
            <div className='col-6 mt-5 p-4 ' style={{lineHeight:'1.8'}}>
             <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br/> hurdles he faced during his decade long stint as a trader. Today,<br /> Zerodha has changed the landscape of the Indian broking industry.</p>
             <p>He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory  Committee (MDAC).</p>
             <p>Playing basketball is his zen.</p>
             <p>Connect on <Link style={{textDecoration:'none'}} to={'/'}>Homepage / TradingQnA / Twitter </Link></p>
            </div>
             </div> 
            </div>


          {/* Row 1 */}
      <div className="row justify-content-center p-5">
        <div className="col-md-4 text-center">
          <img
            src="media/images/Nikhil.jpg"
            alt="Nikhil Kamath"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Nikhil Kamath</p>
          <p>Co-founder & CFO</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/Kailash.jpg"
            alt="Kailash"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Kailash</p>
          <p>CTO</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/Venu.jpg"
            alt="Venu"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Venu</p>
          <p>COO</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row justify-content-center p-5">
        <div className="col-md-4 text-center">
          <img
            src="media/images/Hanan.jpg"
            alt="Hanan"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Hanan</p>
          <p>COO</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/Seema.jpg"
            alt="Seema"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Seema</p>
          <p>Director</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/Karthik.jpg"
            alt="Karthik"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Karthik</p>
          <p>Chief of Education</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row justify-content-center p-5">
        <div className="col-md-4 text-center">
          <img
            src="media/images/Austin.jpg"
            alt="Austin"
            style={{ borderRadius: '50%', width: '70%' }}
          />
          <p style={{ marginTop: '20px', fontWeight: '500' }}>Austin</p>
          <p>Director Strategy</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
            Bio
          </Link>
        </div>
      </div>
      </div>
     );
}

export default Team;