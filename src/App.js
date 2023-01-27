import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News';

// const c = []
// const num = c.length === 0 ? 5 : 10

function App() {
const [news,setNews] = useState([])

  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=eb7d0462fecf45709d7dd0a871ccb22c')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div className="App">
      
      { news.length === 0 ?
        <Spinner animation="grow" />
       :
        <Row xs={1} md={2} lg={3} className="g-4">
        {
          news.map(nws => <News
          nws={nws}
          ></News>)
        }
        </Row>
    }
    </div>
  );
}

export default App;
