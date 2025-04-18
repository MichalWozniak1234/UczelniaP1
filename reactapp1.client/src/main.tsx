import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';

import { Towar } from './towar/TowarPage';
import { Towary } from './towar/TowaryPage'
import { Pracownik } from './pracownik/PracownikPage'
import { Pracownicy } from './pracownik/PracownicyPage'
import { Layout } from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Student } from "./student/StudentPage";
import { Studenci } from "./student/StudenciPage";
import { Kurs } from "./kurs/KursPage";
import { Kursy } from "./kurs/KursyPage";
import { PlanStudiow } from "./planStudiow/PlanStudiowPage.js";
import { PlanyStudiow } from "./planStudiow/PlanyStudiowPage.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/student' element={<Layout />}>
                    <Route index element={<Student />} />
                </Route>
                <Route path='/studenci' element={<Layout />}>
                    <Route index element={<Studenci />} />
                </Route>
                <Route path='/kurs' element={<Layout />}>
                    <Route index element={<Kurs />} />
                </Route>
                <Route path='/kursy' element={<Layout />}>
                    <Route index element={<Kursy />} />
                </Route>
                <Route path='/planStudiow' element={<Layout />}>
                    <Route index element={<PlanStudiow />} />
                </Route>
                <Route path='/planyStudiow' element={<Layout />}>
                    <Route index element={<PlanyStudiow />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
