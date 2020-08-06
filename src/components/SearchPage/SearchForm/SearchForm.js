import React from 'react'
import { Container, Row, Form, Col, DropdownButton,  InputGroup, FormControl, Dropdown, Button } from 'react-bootstrap'
import SearchIcon from './images/Search.png'
function SearchForm() {

    return(

        <div className="searchForm">
            <Container>
                <Row>
                    <div className="searchHead">
                    <Col lg={12}>

                    <h1>
                        Search for your doctor
                        <img src={SearchIcon} />

                    </h1>
                    

                    </Col>
                    </div>
                </Row>
                <Form.Row className="justify-content-center">
                    <Col className="myCol" sm={4}>

                        <Form.Control placeholder="Doctor name" />  
                    </Col>
                    <Col className="myCol" sm={4}>
                        <InputGroup >
                            <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-2"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Col>
                    <Col sm={1}>
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Col>
                </Form.Row>
            </Container>
        </div>

    )
    
}

export default SearchForm