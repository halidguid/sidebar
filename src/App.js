import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditProduct from "./Company/Edit";
import ProductList from "./Company/List";
import CreateProduct from "./Company/Create";
function App() {
  return (

  
    <Router>
    
      <Container style={{marginLeft:"500px"}} className="mt-5">
        <Row>
          <Col md={8}>
            <Routes>
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route exact path="/" element={<ProductList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>



  );
}
export default App;

