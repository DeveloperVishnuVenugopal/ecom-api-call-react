import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Heart, ShoppingCart  } from 'react-feather';


function Viewproducts() {
    
  return (

<div className='d-flex justify-content-center'>
  <Card style={{ width: '24rem' }}>
    <div className="d-flex align-items-stretch">
      <div className="col-lg-6 p-0">
        <Card.Img variant="top" style={{ padding: '8px', height: '100%' }} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </div>
      <div className="col-lg-6">
        <Card.Body>
          <Card.Title>title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"</Card.Title>
          <Card.Text>
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='text-danger'>$109.95</ListGroup.Item>
          <ListGroup.Item>rate: 3.9</ListGroup.Item>
          <ListGroup.Item>count: 120</ListGroup.Item>
        </ListGroup>

        <Card.Body className='d-flex justify-content-between'>
          <Card.Link href="#"><Heart color='red' size={40} /></Card.Link>
          <Card.Link href="#"><ShoppingCart color='orange' size={40} /></Card.Link>
        </Card.Body>
      </div>
    </div>
  </Card>
</div>


  )
}

export default Viewproducts