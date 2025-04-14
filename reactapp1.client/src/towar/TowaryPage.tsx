import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { use, useEffect, useState } from 'react';
import { Towar } from '../types/towar/towar';
//useState zwraca Dane które przechowywujemy w postaci listy towarow oraz funkcje do aktualizacjii danych ktora nazwalismy setListaTowarow
export const Towary = () => {
    const [listaTowarow, setListaTowarow] = useState<Towar[]>([ // useState to hook który przetrzymuje dane. Deserializuj¹c go zwraca dane i funckje do ustawienia tych danych
        {
            kod: "1",
            nazwa: "Nazwa 1",
            kategoria: "Kategoria 1",
            pkwiu: "1",
            cena: 1
        },
        {
            kod: "2",
            nazwa: "Nazwa 2",
            kategoria: "Kategoria 2",
            pkwiu: "2",
            cena: 2
        },
        {
            kod: "3",
            nazwa: "Nazwa 3",
            kategoria: "Kategoria 3",
            pkwiu: "3",
            cena: 3
        },
        {
            kod: "3",
            nazwa: "Nazwa 3",
            kategoria: "Kategoria 3",
            pkwiu: "3",
            cena: 3
        }
    ]);

    //useEffect to hook który wywoluje sie w momencie zmiany wartosci wprowadzonej do tablicy zaleznosci gdy tab jest pusta wywoluje sie on w momencie ladowania kmponentu 
    useEffect(() => {
        const listaTowarowPobranychAPI: Towar[] = [
            {
                kod: "1",
                nazwa: "Nazwa 1 API",
                kategoria: "Kategoria 1",
                pkwiu: "1",
                cena: 1
            },
            {
                kod: "2",
                nazwa: "Nazwa 2 API",
                kategoria: "Kategoria 2",
                pkwiu: "2",
                cena: 2
            },
            {
                kod: "3",
                nazwa: "Nazwa 3 API",
                kategoria: "Kategoria 3",
                pkwiu: "3",
                cena: 3
            }];
        setListaTowarow(listaTowarowPobranychAPI);
    }
    )
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Cement</option>
                                            <option value="3">Pustaki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWIU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTowarow.map((item, index) =>
                        <tr key={index}>
                            <td>{item.kod}</td>
                            <td>{item.nazwa}</td>
                            <td>{item.kategoria}</td>
                            <td>{item.pkwiu}</td>
                            <td>{item.cena}</td>
                        </tr>)}
                </tbody>
            </Table>
        </Container>
    )
}
