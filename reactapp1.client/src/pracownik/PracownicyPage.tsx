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
import { Pracownik } from '../types/pracownik/pracownik';

export const Pracownicy = () => {
    const [listaPracownikow, setListaPracownikow] = useState<Pracownik[]>([ // useState to hook który przetrzymuje dane. Deserializuj¹c go zwraca dane i funckje do ustawienia tych danych
        {
            imie: "Imie 1",
            nazwisko: "Nazwa 1",
            stanowisko: "Kategoria 1",
            placaBrutto: 1
        },
        {
            imie: "Imie 2",
            nazwisko: "Nazwa 2",
            stanowisko: "Kategoria 2",
            placaBrutto: 2
        },
        {
            imie: "Imie 3",
            nazwisko: "Nazwa 3",
            stanowisko: "Kategoria 3",
            placaBrutto: 3
        },
        {
            imie: "Imie 4",
            nazwisko: "Nazwa 4",
            stanowisko: "Kategoria 4",
            placaBrutto: 4
        },
    ]);

    //useEffect to hook który wywoluje sie w momencie zmiany wartosci wprowadzonej do tablicy zaleznosci gdy tab jest pusta wywoluje sie on w momencie ladowania kmponentu 
    useEffect(() => {
        const listaPracownikowPobranychAPI: Pracownik[] = [
            {
                imie: "Imie 1 API",
                nazwisko: "Nazwa 1",
                stanowisko: "Kategoria 1",
                placaBrutto: 1
            },
            {
                imie: "Imie 2",
                nazwisko: "Nazwa 2",
                stanowisko: "Kategoria 2",
                placaBrutto: 2
            },
            {
                imie: "Imie 3",
                nazwisko: "Nazwa 3",
                stanowisko: "Kategoria 3",
                placaBrutto: 3
            }
            ];
        setListaPracownikow(listaPracownikowPobranychAPI);
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
                                        <Form.Label>Szukaj po nazwisku</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Praca Brutto od</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Praca Brutto do</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>wybierz</option>
                                            <option value="1">Dyrektor</option>
                                            <option value="2">Kierownik</option>
                                            <option value="3">Sprzedawca</option>
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
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Placa Brutto</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPracownikow.map((item, index) =>
                        <tr key={index}>
                            <td>{item.imie}</td>
                            <td>{item.nazwisko}</td>
                            <td>{item.stanowisko}</td>
                            <td>{item.placaBrutto}</td>
                        </tr>)}
                </tbody>
            </Table>

        </Container>
    )
}
