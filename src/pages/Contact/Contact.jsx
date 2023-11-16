import React from 'react'
import './contact.style.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Stack, TextField } from '@mui/material'
import { googleMap, useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

function Contact() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA85ZTziuooIzJTPja4rLZwpy0bvWnUit8" })
  return (
    <div className='contact'>
      <Container>
        <Row style={{ marginBottom: '30px' }}>
          <Col lg={3}></Col>
          <Col lg='6' className="black-color">
            <h2 className="dark-color">Contact with us</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#106f85" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span style={{ marginLeft: '10px' }}>Địa chỉ: Đại học Hà Nội, KM 9, Nguyễn Trãi,, Hà Nội</span>
            </p>
            <p>                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#106f85" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg><span style={{ marginLeft: '10px' }}>Điện thoại: 19006750</span></p>
            <p>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#106f85" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg><span style={{ marginLeft: '10px' }}>Email: support@sapo.vn</span>
            </p>
            <p>Contact with us</p>
            <Stack direction={'column'} gap={3}>
              <TextField id="outlined-basic" label="Your name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Content" variant="outlined" />
              <div className="d-grid gap-2">
                <Button className="btn-bold" variant="contained" style={{ width: "100%" }}>
                  Send your contact
                </Button>
              </div>

            </Stack>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Contact