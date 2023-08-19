import React from "react";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-feather";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    
    navigate('/viewproducts')
  }
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((posts) => setposts(posts));
  }, []);
  return (
    <div className='d-flex  justify-content-center flex-wrap' >
    {posts.map((post) => (
      
  <div  className='col-md-4'  >
      <Card style={{ width: '18rem' }} className='text-center m-5' >
        <Card.Img variant="top" className="card-img-top p-5" width="250px" height="250px" src={post.image} />
        <Card.Body>
          <Card.Title> {post.title.slice(0, 19)}... </Card.Title>
          <Card.Text className='text-danger fs-4 text-center'>
           ${post.price}
          </Card.Text>
          <Button variant="primary" onClick={handleNavigate} >View Product</Button>
        </Card.Body>
      </Card>
  </div>

  ))}
  </div>
  );
}

export default Landingpage;
