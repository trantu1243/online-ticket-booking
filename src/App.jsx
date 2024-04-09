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

import AdminLayout from './layouts/admin/admin';
import AdminDashboard from './views/admin/dashboard';
import AddMovie from './views/admin/addMovie';
import AddTheatre from './views/admin/addTheatre';
import AdminSignIn from './views/auth/signIn/adminSignIn';

import TheatreLayout from './layouts/theatre/theatre';
import Home from './views/theatre/home';
import TheatreAddMovie from './views/theatre/theatreAddMovie';
import ViewMovie from './views/theatre/viewMovie';
import TodayShow from './views/theatre/todayShow';
import AddShow from './views/theatre/addShow';
import AddScreen from './views/theatre/addScreen';
import TheatreSignIn from './views/auth/signIn/theatreSignIn';

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
                    <Route path='admin/sign-in' element={<AdminSignIn/>} />
                    <Route path='theatre/sign-in' element={<TheatreSignIn />} />
                    <Route path='/auth' element={<Navigate to='/auth/sign-in' replace/>} />      
                </Route>
                <Route path='admin' element={<AdminLayout />}>
                  <Route path='dashboard' element={<AdminDashboard />}/>
                  <Route path='add-movie' element={<AddMovie />} />
                  <Route path='add-theatre' element={<AddTheatre />} />      
                </Route>
                <Route path="theatre" element={<TheatreLayout />}>
                  <Route path='home' element={<Home />}/>
                  <Route path='add-movie' element={<TheatreAddMovie />} />
                  <Route path='view-movie' element={<ViewMovie />} />
                  <Route path='today-show' element={<TodayShow />} />
                  <Route path='add-show' element={<AddShow />} />
                  <Route path='add-screen' element={<AddScreen />} />
                </Route>
                <Route path='/' element={<Navigate to='/portal/dashboard' replace/>} />
            </Routes>
        </Provider> 
    );
}

export default App;
