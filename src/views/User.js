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

import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,Label,
} from "reactstrap";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";

function User() {
  const [disabledFields, setDisabledFields] = useState(false);
  const toggleDisabled = () => {
    setDisabledFields(!disabledFields);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5" onClick={toggleDisabled}>Análise de Proposta</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                          style={{color:"black"}}
                          disabled={disabledFields}/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Sobrenome</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                          style={{color:"black"}}
                          disabled={disabledFields}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col  className="pr-1" md="4">
                      <FormGroup>
        <Label>CPF</Label>
        <IMaskInput
          mask="000.000.000-00"
          disabled={disabledFields}
          placeholder="000.000.000-00"
          style={{  backgroundColor: disabledFields ? "rgb(227, 227, 227)" : "white",color: "black", width: '100%', padding: '0.375rem 0.75rem', borderRadius: '.25rem', border: '1px solid #ced4da' }}
        />
      </FormGroup>
                    </Col>
                   <Col className="px-1" md="8">
  <FormGroup>
    <label>Endereço</label>
    <Input
      defaultValue="Melbourne, Australia"
      placeholder="Home Address"
      type="text"
      style={{ color: "black", height: "34.6px" }}
      disabled={disabledFields}
    />
  </FormGroup>
</Col>

                  </Row>
                  <Row>
                   <Col className="pr-1" md="4">
  <FormGroup>
    <label>Cidade</label>
    <Input
      defaultValue="Campo Grande"
      placeholder="City"
      type="text"
      style={{ color: "black", height: "34.6px" }}
      disabled={disabledFields}
    />
  </FormGroup>
</Col>

<Col className="px-1" md="4">
  <FormGroup>
    <label>Estado</label>
    <Input
      defaultValue="Mato Grosso do Sul"
      placeholder="Country"
      type="text"
      style={{ color: "black", height: "34.6px" }}
      disabled={disabledFields}
    />
  </FormGroup>
</Col>

                <Col className="pl-1" md="4">
      <FormGroup>
        <Label>CEP</Label>
        <IMaskInput
          mask="00000-000"
          disabled={disabledFields}
          placeholder="00000-000"
          style={{
            color: "black",
            width: "100%",
            padding: "0.375rem 0.75rem",
            borderRadius: ".25rem",
            border: "1px solid #ced4da",
            backgroundColor: disabledFields ? "rgb(227, 227, 227)" : "white"
          }}
          // opcional: define o tipo para acessibilidade
          inputMode="numeric"
        />
      </FormGroup>
    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
  <FormGroup>
    <label>Contrato</label>
    <Input
      defaultValue="Aprovado"
      placeholder="fafadqdq"
      style={{ color: "black", height: "34.6px" }}
      type="text"
      disabled={disabledFields}
    />
  </FormGroup>
</Col>

                   <Col className="pl-1" md="6">
      <FormGroup>
        <Label>Valor do Lance</Label>
        <NumericFormat
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          disabled={disabledFields}
          defaultValue={10000}
          placeholder="R$ 0,00"
          style={{
             backgroundColor: disabledFields ? "rgb(227, 227, 227)" : "white",
            color: "black",
            width: "100%",
            padding: "0.375rem 0.75rem",
            borderRadius: ".25rem",
            border: "1px solid #ced4da",
          }}
          // para funcionar dentro do Reactstrap, passa customInput:
          customInput={React.forwardRef((props, ref) => <input {...props} ref={ref} />)}
        />
      </FormGroup>
    </Col>
                  </Row>
                  <Row>
                   <Col className="pr-1" md="6">
  <FormGroup>
    <label>Status</label>
    <Input
      defaultValue="Aprovado"
      placeholder="Company"
      type="text"
      style={{ color: "green", height: "34.6px" }}
      disabled={disabledFields}
    />
  </FormGroup>
</Col>

                    <Col className="pl-1" md="6">
        <FormGroup>
          <Label>Data Última Alteração</Label>
          <IMaskInput
            mask="00/00/0000"
            
            disabled={disabledFields}
            placeholder="dd/mm/aaaa"
            style={{  backgroundColor: disabledFields ? "rgb(227, 227, 227)" : "white", color: "black", width: '100%', padding: '0.375rem 0.75rem', borderRadius: '.25rem', border: '1px solid #ced4da' }}
          />
        </FormGroup>
      </Col>
                  </Row>
                  
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
