import React from "react";

function Clients() {
  return (
    <>
      <div className="container-fluid " id="clients">
      <header id='clients-title'> OUR CLIENTS</header>
        <div className="container text-center">

          <div className="row">
            {/* <div className="col"><i className="fa-solid fa-angle-left"></i></div> */}
            <div className="col">EVERLANE</div>
            <div className="col">aloyoga</div>
            <div className="col">vistaprint</div>
            <div className="col">HARRY'S</div>
            <div className="col">chubbies</div>
            {/* <div className="col"><i className="fa-solid fa-angle-right"></i></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
