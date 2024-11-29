import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <>
      <div className='mt-5'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src="https://i.pinimg.com/originals/10/c6/77/10c6779f6d95cbcd7a2e3a1514488d99.jpg" alt="no image" className='w-100' style={{ height: '450px' }} />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img src="https://img.freepik.com/premium-photo/colorful-tree_717710-2819.jpg" alt=" no image" className='w-100' style={{ height: '450px' }} />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img src="https://th.bing.com/th/id/OIP.VcwiHvDu3ybhkyXqVpF3sAHaIs?w=533&h=626&rs=1&pid=ImgDetMain" alt="no image" className='w-100' style={{ height: '450px' }} />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img src="https://i.pinimg.com/1200x/76/02/ca/7602caa1a91789b51596fc0b9b423a37.jpg" alt="no image" className='w-100' style={{ height: '450px' }} />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img src="https://i.pinimg.com/736x/1f/b5/43/1fb5432a864214b43eda1b949e774e29.jpg" alt="no image" className='w-100' style={{ height: '450px' }} />
          </Carousel.Item>

        </Carousel>
      </div>

      <div className="container-fluid mt-5 bg-info">
        <div className="row ">
          <div className="col-md-5 p-5">
            <img src="https://static.vecteezy.com/system/resources/previews/030/684/126/non_2x/combining-elements-of-different-art-styles-to-create-a-uni-free-photo.jpg" alt="no image" className='w-100' />
          </div>
          <div className="col-md-7 p-5">
            <h1 className='text-center mt-4'>ART GALLERY</h1>
            <p className='mt-5 fs-5' style={{ textAlign: 'justify' }}>Our art gallery is thoughtfully designed to celebrate and showcase the rich diversity of visual creativity. We proudly offer an eclectic collection of artworks, ranging from paintings and sculptures to photographs and multimedia pieces. These works are created by both emerging and established artists, providing visitors with a dynamic and engaging experience that reflects a broad spectrum of artistic expression. By highlighting the talent and innovation of artists from various backgrounds, our gallery serves as a platform for creative exploration and cultural enrichment.</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-center mt-5'>OUR COLLECTIONS</h1>
        <div>
          <Container>
            <Row>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/OIP.8xwZGDGU6U3ul4rEVM2WZwHaEo?w=1131&h=707&rs=1&pid=ImgDetMain" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/R.f30672a2718f75ee7bf35c40a7598f02?rik=eKF7I0mksBwj4g&riu=http%3a%2f%2f3.bp.blogspot.com%2f_VmNbLmIZin8%2fTOaUn-RQmxI%2fAAAAAAAAAig%2fo1kwprbiyLY%2fs1600%2fReflectedsm.jpg&ehk=2BYe13thsSObvkbuyGN53m2DcZOPq4TBE598AaFVDPQ%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/OIP.ZLcfhVOXXrNpvbwxmNbOCwAAAA?rs=1&pid=ImgDetMain" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://i.pinimg.com/originals/d0/9b/24/d09b24d02888ebe7a329de6813dfa43f.jpg" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/OIP.uCACnXuJqgiD3YpoP8UbUgHaHb?w=996&h=1000&rs=1&pid=ImgDetMain" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/R.c3b8c24b58418bf8d1880c3f8a2ddc00?rik=xFoBlIar%2b1CaHQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f04%2fmodern_art_picture.jpg&ehk=hDYQfQhycxsqfRhqAgJLV77gsAqtxiGZjGLOSoYZK4o%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://images.fineartamerica.com/images-medium-large-5/exotic-plant-life-lea-wiggins.jpg" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
              <Col md={3} sm={6}><img src="https://th.bing.com/th/id/OIP.izSvj7y5Pmc8Zt_KJQtVnAHaEo?rs=1&pid=ImgDetMain" alt="" className='w-100 mt-4' style={{ height: '200px' }} /></Col>
            </Row>

          </Container>
        </div>
      </div>

      <div className='bg-warning  mt-5'>
        <h2 className='text-center p-5'>NEW TO OUR GALLERY</h2>
        <div className="row p-4">
          <div className="col-md-3 text-center mt-2">
            <img src="https://www.shoppershaven.com.au/cdn/shop/files/il_fullxfull.6100411856_e0dr.jpg?v=1720240409&width=668" alt="" className='w-100' style={{height:'350px'}}/>
            <h3 className='mt-3'>Floral Wall Art</h3>
            <span className='fs-3'>₹1500</span>
          </div>
          <div className="col-md-3 text-center mt-2">
            <img src="https://www.shoppershaven.com.au/cdn/shop/files/Trees1-1.jpg?v=1721911674&width=668" alt="" className='w-100' style={{height:'350px'}}/>
            <h3 className='mt-3'> Digital Art Print</h3>
            <span className='fs-3'>₹2800</span>
          </div>
          <div className="col-md-3 text-center mt-2">
            <img src="https://wakefitdev.gumlet.io/img/npl_raw_images/Paintingimages_New/WPTGSSERE24S1/WPTGSSERE24S1_4.jpg?w=1200" alt="" className='w-100' style={{height:'350px'}}/>
            <h3 className='mt-3'>Canvas Wall Painting</h3>
            <span className='fs-3'>₹1899</span>
          </div>
          <div className="col-md-3 text-center mt-2">
            <img src="https://www.shoppershaven.com.au/cdn/shop/files/il_fullxfull.6139407285_myi1.jpg?v=1720240590&width=668" alt="" className='w-100' style={{height:'350px'}}/>
            <h3 className='mt-3'>Boho Botanical Art Print</h3>
            <span className='fs-3'>₹1899</span>
          </div>
          
        </div>
      
       
      </div>

    </>
  )
}

export default Home