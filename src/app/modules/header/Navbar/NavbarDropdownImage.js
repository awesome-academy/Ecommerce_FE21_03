import React from 'react';
import { Col } from 'reactstrap';

function NavbarDropdownImage({ img }) {
  return (
    <Col md={3}>
      <a href="/"><img className="img-fluid" src={img} alt="img-menu" /></a>
    </Col>
  )
}

export default NavbarDropdownImage;
