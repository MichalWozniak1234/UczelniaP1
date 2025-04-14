import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Towar = () => {
    return (
        <Container fluid>
            <Form>
                <Row bottons>
                    <Col>
                        <Button variant="primary" className="me-3">Dodaj</Button>
                        <Button variant="info" className="me-3">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        className="mp-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane Podstawowe">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kod</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nr Katalogowy</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwa</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="cena" title="Cena">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>PKWIU</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stawka VAT zakupu</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Stawka VAT sprzedazy</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena domyslna</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                            </Row> 
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row className="mb-3">
                                <Col className = "col-8">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Uwagi </Form.Label>
                                        <Form.Control as="textarea" placeholder="text" />
                                    </Form.Group>
                                </Col>
                            </Row> 
                        </Tab>
                    </Tabs>
                </Row>

            </Form>
        </Container>
    )
    
}
