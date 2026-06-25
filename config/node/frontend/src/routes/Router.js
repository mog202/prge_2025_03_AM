import { createBrowserRouter } from 'react-router-dom';
import {
    Home,
    About,
    Map,
    Services,
    NewUser,       // Lekarz dodaj
    ListOfItems,   // Lekarz lista
    AddPatient,    // Pacjent dodaj
    PatientList    // Pacjent lista
} from "./LazyImports";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/map',
            element: <Map />
        },
        {
            path: '/services',
            element: <Services />
        },
        // LEKARZE - kierują do starych komponentów
        {
            path: '/add-doctor',
            element: <NewUser />
        },
        {
            path: '/doctors',
            element: <ListOfItems />
        },
        // PACJENCI - kierują do nowych komponentów
        {
            path: '/add-patient',
            element: <AddPatient />
        },
        {
            path: '/patients',
            element: <PatientList />
        }
    ]
);

export default routes;