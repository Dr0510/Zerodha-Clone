import React from 'react';

function CreatTicket() {
    return ( 
        <div className='container ticket-links '>

            <div className='row pt-5 pb-5'>

            <div  className="col-12 mb-4 pb-5">
                <h3>To creat a ticket,Select a relevent topic</h3>
            </div>
            <div className='col-4'>
                <h6> <i class="fa-solid fa-user"></i>Your Zerodha Account</h6>
               <a href='/' >Online Account Opening</a>
               <a href='/' >Offline Account Opening</a>
               <a href='/' >Company,partnership and HUF Account Opening</a>
               <a href='/' >NRI Account Opening </a>
               <a href='/' >Charges at Zerodha</a>
               <a href='/' >Getting Started</a>
            </div>

            <div className='col-4'>
                <h6><i class="fa-solid fa-chart-simple"></i>Your Zerodha Account</h6>
               <a href='/' >Login Credentials</a>
               <a href='/' >Account Modification and Segment Addition</a>
               <a href='/' >DP Id and Bank Detail</a>
               <a href='/' >Your Profile</a>
               <a href='/' >Transfer and Conversion of Shares</a>
            </div>


              <div className='col-4'>
               <h6> <i class="fa-solid fa-user-plus"></i> Account Opening</h6>
               <a href='/' >Product and Order Type</a>
               <a href='/' >Kit Web and Mobile</a>
               <a href='/' >Trading FAQs</a>
               <a href='/' >Corporate Actions</a>
               <a href='/' >Sentinel</a>
               <a href='/' >GTT</a>
            </div>
          </div>
           <div className='row pt-5'> 
           <div className='col-4'>
                <h6><i class="fa-regular fa-credit-card"></i> Funds</h6>
               <a href='/' >Adding Funds</a>
               <a href='/' >Fund withdrawal</a>
               <a href='/' >eMandates</a>
               <a href='/' > Adding Bank Account </a>
            </div>

            <div className='col-4'>
                <h6 > <i class="fa-solid fa-terminal"></i> Console</h6>
               <a href='/' >Reports</a>
               <a href='/' >Ledger</a>
               <a href='/' >Portfolio</a>
               <a href='/' >60 Days Challenge</a>
               <a href='/' >IPO</a>
               <a href='/' >Referal Program</a>
            </div>


              <div className='col-4'>
               <h6> <i class="fa-brands fa-bitcoin"></i> Coin</h6>
               <a href='/'>Understanding Mutual Funds</a>
               <a href='/'>About Coin</a>
               <a href='/'>Buying and Selling Coin</a>
               <a href='/'>Starting an SIP</a>
               <a href='/'>Manageing you Portfolio</a>
               <a href='/'>GTT</a>
            </div>
            </div>
        </div> 
     );
}

export default CreatTicket;