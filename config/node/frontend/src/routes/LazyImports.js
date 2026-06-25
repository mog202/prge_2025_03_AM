import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home'));
export const About = lazy(() => import('../pages/About'));
export const Map = lazy(() => import('../pages/Map'));
export const Services = lazy(() => import('../pages/Services'));

// LEKARZE (Stare pliki)
export const NewUser = lazy(() => import('../pages/NewUser'));
export const ListOfItems = lazy(() => import('../pages/ListOfItems'));

// PACJENCI (Nowe pliki)
export const AddPatient = lazy(() => import('../pages/AddPatient'));
export const PatientList = lazy(() => import('../pages/PatientList'));