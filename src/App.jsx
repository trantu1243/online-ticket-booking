import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './views/portal/dashboard/dashboard';
import Movie from './views/portal/movie/movie';
import SignIn from './views/auth/signIn/signIn';
import SignUp from './views/auth/signUp/signUp';
import TicketPlan from './views/portal/ticketPlan/ticketPlan';
import MovieSeat from './views/portal/movieSeat/movieSeat';
import MovieList from './views/portal/movieList/movieList';
import MovieCheckout from './views/portal/movieCheckout/movieCheckout';
import PortalLayout from './layouts/portal';
import AuthLayout from './layouts/auth';

function App() {
    return (
        <Routes>
            <Route path='portal' element={<PortalLayout/>}>
                <Route path='dashboard' element={<Dashboard />}/>
                <Route path='movie' element={<Movie/>}/>
                <Route path='movie/ticket-plan' element={<TicketPlan />} />
                <Route path='movie/movie-seat' element={<MovieSeat />} />
                <Route path='movie/movie-checkout' element={<MovieCheckout />} />
                <Route path='movie-list' element={<MovieList />} />
                <Route path='/portal' element={<Navigate to='/portal/dashboard' replace/>} />
            </Route>
            <Route path='auth' element={<AuthLayout />}>
                <Route path='sign-up' element={<SignUp />} />
                <Route path='sign-in' element={<SignIn />} />
                <Route path='/auth' element={<Navigate to='/auth/sign-in' replace/>} />
            </Route>
            <Route path='/' element={<Navigate to='/portal/dashboard' replace/>} />
        </Routes>
    );
}

export default App;
