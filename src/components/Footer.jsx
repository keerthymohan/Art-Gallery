import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>

      <div className=" mt-5 py-5 px-4 bg-dark text-white">
        <div className="row">
          <div className="col-md-4">
            <h3>ART GALLERY</h3>
            <p className='mt-4 mb-4' style={{ textAlign: 'justify' }}>An art gallery is a space dedicated to exhibiting artworks, including paintings, sculptures, photography, and other creative forms. It serves as a platform for artists to showcase their talent and for audiences to experience and appreciate art. Galleries can be commercial, aiming to sell artwork, or non-profit, focusing on cultural enrichment and education.</p>
          </div>
          <div className="col-md-4 ">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <h3>LINKS</h3>
                <Link to={'/'}> <p className='mt-4'> Home</p></Link>
                <Link to={'/paintings'}> <p > Paintings</p></Link>
                <Link to={'/sculptures'}> <p> Sculptures</p></Link>
                <Link to={'/artist'}> <p className='mb-4'> Artist</p></Link>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h3>CONNECT US</h3>
            <div className=" d-flex mt-4">
              <input type="text" placeholder='Email Id' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-5 mb-4">
              <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
              <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
              <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
              <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
