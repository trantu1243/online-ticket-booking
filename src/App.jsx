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
import HistoryTicket from './views/portal/historyBooking';
import Newfeed from './views/portal/newfeed';
import Newfeed01 from './views/portal/newfeed/item/newfeed01';
import Newfeed02 from './views/portal/newfeed/item/newfeed02';
import Newfeed03 from './views/portal/newfeed/item/newfeed03';
import Newfeed04 from './views/portal/newfeed/item/newfeed04';
import Newfeed05 from './views/portal/newfeed/item/newfeed05';
import Newfeed06 from './views/portal/newfeed/item/newfeed06';
import Newfeed07 from './views/portal/newfeed/item/newfeed07';
import UserInfo from './views/portal/userInfo';

import AdminLayout from './layouts/admin/admin';
import AdminDashboard from './views/admin/dashboard';
import AddMovie from './views/admin/addMovie';
import AddTheatre from './views/admin/addTheatre';
import AdminSignIn from './views/auth/signIn/adminSignIn';

import TheatreLayout from './layouts/theatre/theatre';
import Home from './views/theatre/home';
import TheatreAddMovie from './views/theatre/theatreAddMovie';
import ViewScreen from './views/theatre/viewScreen';
import TodayShow from './views/theatre/todayShow';
import AddShow from './views/theatre/addShow';
import AddScreen from './views/theatre/addScreen';
import TheatreSignIn from './views/auth/signIn/theatreSignIn';
import HistoryBooking from './views/theatre/historyBooking';

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
        try{

   
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

      }
      catch(e){}
    
      }, []);
    return (

        <Provider store={store}>
            <Routes>
                <Route path='portal' element={<PortalLayout/>}>
                    <Route path='dashboard' element={<Dashboard />}/>
                    <Route path='movie/:id' element={<Movie/>}/>
                    <Route path='movie/ticket-plan/:id' element={<TicketPlan />} />
                    <Route path='movie/movie-seat/:id' element={<MovieSeat />} />
                    <Route path='movie/movie-checkout/:id' element={<MovieCheckout />} />
                    <Route path='movie-list' element={<MovieList />} />
                    <Route path='history-booking' element={<HistoryTicket />} />
                    <Route path='newfeed' element={<Newfeed />} />
                    <Route path='huong-dan-dang-nhap-tai-khoan-beta-cinemas' element={<Newfeed01 />} />
                    <Route path='beta-cinemas-ung-van-khiem-sieu-pham-trong-thoi-gian-toi' element={<Newfeed02 />} />
                    <Route path='thanh-toan-shopeepay-giam-ngay-5' element={<Newfeed03 />} />
                    <Route path='chi-9-000d-ve-phim-khi-dat-qua-zalopay' element={<Newfeed04 />} />
                    <Route path='beta-ve-re-momo-mua-lien' element={<Newfeed05 />} />
                    <Route path='thanh-vien-beta-dong-gia-45k' element={<Newfeed06 />} />
                    <Route path='thu-3-vui-ve' element={<Newfeed07 />} />
                    <Route path='user-information' element={<UserInfo />} />
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
                  <Route path='/admin' element={<Navigate to='/admin/dashboard' replace/>} />   
                </Route>
                <Route path="theatre" element={<TheatreLayout />}>
                  <Route path='home' element={<Home />}/>
                  <Route path='add-movie' element={<TheatreAddMovie />} />
                  <Route path='view-screen' element={<ViewScreen />} />
                  <Route path='today-show' element={<TodayShow />} />
                  <Route path='add-show' element={<AddShow />} />
                  <Route path='add-screen' element={<AddScreen />} />
                  <Route path='history-booking' element={<HistoryBooking />} />
                  <Route path='/theatre' element={<Navigate to='/theatre/home' replace/>} />
                </Route>
                <Route path='/' element={<Navigate to='/portal/dashboard' replace/>} />
            </Routes>
        </Provider> 

    );
}

export default App;
