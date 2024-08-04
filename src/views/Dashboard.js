/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-check-2 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Status</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Valor do Lance</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Contrato</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" >
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">Nome</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">CPF</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" >
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">Estado</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">Cidade</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" >
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">Endereço</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="12" xs="12">
                    <div className="numbers">
                      <p className="card-category">CEP</p>
                      <CardTitle tag="p"></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      
      </div>
    </>
  );
}

export default Dashboard;
