import React, {useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

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
    useEffect(() => {
        const scriptFiles = [
          '/assets/js/jquery-3.3.1.min.js',
          '/assets/js/modernizr-3.6.0.min.js',
          '/assets/js/plugins.js',
          '/assets/js/bootstrap.min.js',
          '/assets/js/heandline.js',
          '/assets/js/isotope.pkgd.min.js',
          '/assets/js/magnific-popup.min.js',
          '/assets/js/owl.carousel.min.js',
          '/assets/js/wow.min.js',
          '/assets/js/countdown.min.js',
          '/assets/js/odometer.min.js',
          '/assets/js/viewport.jquery.js',
          '/assets/js/nice-select.js',
          '/assets/js/main.js',
        ];
    
        scriptFiles.forEach((file) => {
          const existingScript = document.getElementById(`script-${file}`);
          if (existingScript) {
            existingScript.remove();
          }
    
          const script = document.createElement('script');
          script.src = file;
          script.id = `script-${file}`;
          document.body.appendChild(script);
        });
    
        return () => {
          scriptFiles.forEach((file) => {
            const existingScript = document.getElementById(`script-${file}`);
            if (existingScript) {
              existingScript.remove();
            }
          });
        };
    
      }, []);
    return (
        <Provider store={store}>
            <Routes>
                <Route path='portal' element={<PortalLayout/>}>
                    <Route path='dashboard' element={<Dashboard />}/>
                    <Route path='movie/:id' element={<Movie/>}/>
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
        </Provider>
    );
}

export default App;
