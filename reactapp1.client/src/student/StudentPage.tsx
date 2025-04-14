import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Student = () => {
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
                                        <Form.Label>Imie</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kierunek Studiow</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Grupa</Form.Label>
                                        <Form.Control type="text" placeholder="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Rodzaj Studiow</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Dzienne</option>
                                            <option value="2">Niestacjonarne</option>
                                            <option value="3">IOS</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row className="mb-3">
                                <Col className="col-8">
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
