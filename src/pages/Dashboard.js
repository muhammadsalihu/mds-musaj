import React from "react"
import { Row, Col, Container } from "reactstrap"

//Assets
import Logo from "../assets/mwares-logo.svg"

//Components
import Header from "../Components/Home/Header.js"

const Dashboard = () => {
  return (
    <div className="m-4">
      <Header />

      <Container fluid>
        <Row>
          <Col>Left</Col>
          <Col>Rights</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
