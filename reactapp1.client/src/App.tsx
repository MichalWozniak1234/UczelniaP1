import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';
import FormyStudiowaniaMain from './glownaStrona/FormyStudiowaniaMain';

function App() {
    return (
        <Container fluid>
            <Row className="mb-3">
                <Col xs={12} md={6}>
                    <Ratio aspectRatio="16x9">
                        <video controls>
                            <source src="/video/wsbFilmik.mp4" type="video/mp4" />
                            <source src="/video/wsbFilmik.webm" type="video/webm" />
                            Twoja przegladarka nie obsluguje elementu wideo.
                        </video>
                    </Ratio>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div>
                        <h2>Uczelnia w Chmurze</h2>
                        <p>
                            Uczelnia w chmurze to nowoczesny model edukacji, w ktorym wszystkie zasoby od materialow dydaktycznych po systemy zarzadzania nauka sa dostepne online za posrednictwem technologii chmurowych. Dzieki temu studenci i wykladowcy moga uczyc sie, prowadzic zajecia i wspolpracowac z dowolnego miejsca na swiecie.
                        </p>
                    </div>
                </Col>
            </Row>

            <hr />

            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Header className="text-center">Informatyka</Card.Header>
                        <Card.Img
                            variant="top"
                            className="img-fluid card-img-responsive"
                            src="/image/informatyka2.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card>
                        <Card.Header className="text-center">Zarzadzanie</Card.Header>
                        <Card.Img
                            variant="top"
                            className="img-fluid card-img-responsive"
                            src="/image/zarzadzanie.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card>
                        <Card.Header className="text-center">Psychologia</Card.Header>
                        <Card.Img
                            variant="top"
                            className="img-fluid card-img-responsive"
                            src="/image/psychologia2.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header className="text-center">Prawo</Card.Header>
                        <Card.Img
                            variant="top"
                            className="img-fluid card-img-responsive"
                            src="/image/prawo.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <hr />

            <Row>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="/image/kotek_4.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <hr />

            <FormyStudiowaniaMain />

            <hr />

            <Row className="mb-4">
                <Col xs={12} className="p-0">
                    <div className="bottom-image">
                        <img
                            src="/image/wsbBudynek.jpg"
                            alt="Obrazek na dolna czesc"
                            className="img-fluid w-100"
                        />
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default App;
