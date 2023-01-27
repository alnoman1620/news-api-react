import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
const {title,description,urlToImage} = props.nws
    return (
        <div>
            <Col>
          <Card>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
              <Card.Title><h3>{title}</h3></Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default News;