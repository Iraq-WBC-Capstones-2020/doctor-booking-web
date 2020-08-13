import React from 'react';
import {  Col, Row, Table } from 'react-bootstrap';
import './style.css'

function TimeTable(){

    return(

        <div className="timeTable">
            <Col>
            <Row className="ml-2 justify-content-start">
            <h4 className="specitial">Medical specitial</h4>
            </Row>
            <Row className="ml-2 justify-content-start">
                    <Table className="table-borderless">
                        <thead>
                            <tr>
                                <h4>Time table</h4>
                            </tr>
                            
                        </thead>
                        <tbody>
                        <tr>
                                <th>sunday</th>
                                <th>11-4</th>
                            </tr>
                            <tr>
                                <td>monday</td>
                                <td>3-5</td>
                            </tr>
                            <tr>
                                <td>tuseday</td>
                                <td>11-4</td>
                            </tr>
                            <tr>
                                <td>wedensay</td>
                                <td>11-4</td>
                            </tr>
                            <tr>
                                <td>thursday</td>
                                <td>11-4</td>
                            </tr>
                            <tr>
                                <td>friday</td>
                                <td>11-4</td>
                            </tr>
                        </tbody>
                    </Table>
            </Row>
            </Col>
        </div>

    )
    
}

export default TimeTable;