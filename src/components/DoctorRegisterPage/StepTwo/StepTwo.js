import React, { useState } from 'react'
import { Col, Form, Container, Row } from 'react-bootstrap'

function StepTwo() {

    const specilty = ["Abdominal radiology",
         "Breast imaging",
         "Cardiothoracic radiology",
         "Cardiovascular radiology",
         "Chest radiology",
         "Emergency radiology",
         "Endovascular surgical neuroradiology",
         "Gastrointestinal radiology",
         "Genitourinary radiology",
         "Head and neck radiology",
         "Pulmonary disease",
            "Pulmonary disease", 
            "Sleep medicine",
            "Sports medicine",
            "Transplant hepatology"
        ];
    
return(

    
    <Container >
        <Form>
        <Row>
            <Col lg={12}>
        
  <Form.Group class="stepTwoFilds" controlId="exampleForm.SelectCustom">
    <Form.Label>Speciality</Form.Label>
    <Form.Control as="select" custom>
    {specilty.map(spec =>
      <option>{spec}</option>
     
    )}
    </Form.Control>
  </Form.Group>

</Col>
        </Row>
        <Row>
        <Col lg={6}>
            <Form.Group class="stepTwoFilds">
    <label for="exampleFormControlTextarea1">Education</label>
    <textarea class="textArea form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </Form.Group>
                   
            </Col>
            <Col lg={6}>
            <Form.Group class="stepTwoFilds">
    <label for="exampleFormControlTextarea1">Expeience</label>
    <textarea class="textArea form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </Form.Group>
                   
            </Col>
        </Row>
        </Form>
    </Container>

)

}

export default StepTwo
