import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Layout() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div className="app">
            <Navbar
                expand="lg"
                className={`bg-body-tertiary ${scrolled ? 'navbar-scrolled' : ''}`}
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/cloudaLogo.png" className="logo" alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link>
                                <Link to="/" className="d-block">Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Kadry" id="kadry">
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Pracownik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Studenci" id="studenci">
                                <NavDropdown.Item>
                                    <Link to="/student" className="d-block">Student</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/studenci" className="d-block">Studenci</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kursy" id="kursy">
                                <NavDropdown.Item>
                                    <Link to="/kurs" className="d-block">Kurs</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/kursy" className="d-block">Kursy</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Plan Studiow" id="planStudiow">
                                <NavDropdown.Item>
                                    <Link to="/planStudiow" className="d-block">PlanStudiow</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/planyStudiow" className="d-block">PlanyStudiow</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inne" id="offcanvasNavbarDropdown-expand">
                                <NavDropdown.Item href="#action3">Inne 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Inne 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Inne 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Form className="d-flex">
                            <Button variant="outline-primary">Zapisz sie na studia</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="content-wrapper">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>

            {/*<footer className="footer">*/}
            {/*    <Container>*/}
            {/*        <Row>*/}
            {/*            <Col className="text-center">*/}
            {/*                <p>Uczelnia Michal Wozniak</p>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</footer>*/}
        </div>
    );
}