import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGraduationCap, FaBuilding, FaLaptop } from 'react-icons/fa';

const FormyStudiowaniaMain = () => {
    return (
        <Container fluid className="my-5">
            <Row className="mb-4">
                <Col className="text-center">
                    <h1 className="fw-bold text-primary">Forma studiow na Uczelni</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-4">
                    <Card className="h-100 border-primary" style={{ borderWidth: '2px', borderRadius: '10px' }}>
                        <Card.Body className="text-center p-4">
                            <div className="mb-3">
                                <FaGraduationCap size={50} className="text-primary" />
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">Studia stacjonarne</Card.Title>
                            <Card.Text>
                                Prowadzone na terenie kampusu w Nowym Saczu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} className="mb-4">
                    <Card className="h-100" style={{ borderWidth: '2px', borderColor: '#e83e8c', borderRadius: '10px' }}>
                        <Card.Body className="text-center p-4">
                            <div className="mb-3">
                                <FaBuilding size={50} style={{ color: '#e83e8c' }} />
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">Studia niestacjonarne</Card.Title>
                            <Card.Text>
                                Odbywajace sie w formie tradycyjnych i hybrydowych zajec w Nowym Saczu, a dodatkowo sa wspierane przez system CloudA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} className="mb-4">
                    <Card className="h-100 border-primary" style={{ borderWidth: '2px', borderRadius: '10px' }}>
                        <Card.Body className="text-center p-4">
                            <div className="position-relative mb-3">
                                <FaLaptop size={50} className="text-primary" />
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">Studia niestacjonarne interaktywne</Card.Title>
                            <Card.Text>
                                Odbywajace sie w formie tradycyjnych i hybrydowych zajec w Nowym Saczu, a dodatkowo sa wspierane przez system CloudA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col xs={12} md={6} className="text-center">
                    <Button
                        variant="outline-primary"
                        size="lg"
                        className="px-4 py-2"
                    >
                        Dowiedz sie wiecej o formach studiowania na WSB-NLU
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FormyStudiowaniaMain;