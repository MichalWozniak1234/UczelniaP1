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
import { Kurs } from '../types/kurs/kurs';

export const Kursy = () => {
    const [listaKursow, setListaKursow] = useState<Kurs[]>([ // useState to hook który przetrzymuje dane. Deserializuj¹c go zwraca dane i funckje do ustawienia tych danych
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
        {
            nazwa: "Imie 1",
            kierunek: "Nazwa 1",
            liczbaECTS: 1
        },
    ]);

    //useEffect to hook który wywoluje sie w momencie zmiany wartosci wprowadzonej do tablicy zaleznosci gdy tab jest pusta wywoluje sie on w momencie ladowania kmponentu 
    //useEffect(() => {
    //    const listaPracownikowPobranychAPI: [Kurs] = [
    //        {
    //            imie: "Imie 1 API",
    //            nazwisko: "Nazwa 1",
    //            stanowisko: "Kategoria 1",
    //            placaBrutto: 1
    //        },
    //        {
    //            imie: "Imie 2",
    //            nazwisko: "Nazwa 2",
    //            stanowisko: "Kategoria 2",
    //            placaBrutto: 2
    //        },
    //        {
    //            imie: "Imie 3",
    //            nazwisko: "Nazwa 3",
    //            stanowisko: "Kategoria 3",
    //            placaBrutto: 3
    //        }
    //    ];
    //    setListaPracownikow(listaPracownikowPobranychAPI);
    //}
    //)
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
                                        <Form.Label>Kierunek</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2" >
                                    <Form.Group>
                                        <Form.Label>Liczba ECTS</Form.Label>
                                        <Form.Control type="number"></Form.Control>
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
                        <th>Nazwa</th>
                        <th>Kierunek</th>
                        <th>Liczba ECTS</th>
                    </tr>
                </thead>
                <tbody>
                    {listaKursow.map((item, index) =>
                        <tr key={index}>
                            <td>{item.nazwa}</td>
                            <td>{item.kierunek}</td>
                            <td>{item.liczbaECTS}</td>
                        </tr>)}
                </tbody>
            </Table>

        </Container>
    )
}
