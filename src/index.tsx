// React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';



// App Components
import App from './App';

// App Pages
import HomePage from './pages/HomePage';
import NoMatch from './components/Error/NoMatch';

// import BMSPage from './pages/BMSPage';
// import RevitApiPage from './pages/RevitApiPage';
// import WebPage from './pages/WebPage';
// import DesktopPage from './pages/DesktopPage';
// import DotNetPage from './pages/DotNetPage';
// import ContactMePage from './pages/ContactMePage';


// Material UI Components
import { ThemeProvider } from '@mui/material';

// Material Ui Theme
import { MuiTheme } from './Themes/MuiTheme'

// Lazy App Pages
const LazyBMSPage = React.lazy(() => import('./pages/BMSPage'))
const LazyRevitApiPage = React.lazy(() => import('./pages/RevitApiPage'))
const LazyWebPage = React.lazy(() => import('./pages/WebPage'))
const LazyDesktopPage = React.lazy(() => import('./pages/DesktopPage'))
const LazyContactMePage = React.lazy(() => import('./pages/ContactMePage'))

// App Functional Component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  // React Render
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={MuiTheme}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<App/>}>
                <Route index path='' element={<HomePage />} />
                <Route path='bms' element={
                  <React.Suspense fallback='loading...'>
                    <LazyBMSPage/>
                  </React.Suspense>
                }/>
                <Route path='revitapi' element={
                  <React.Suspense fallback='loading...'>
                    <LazyRevitApiPage/>
                  </React.Suspense>
                }/>
                <Route path='web/:section' element={
                  <React.Suspense fallback='loading...'>
                    <LazyWebPage/>
                  </React.Suspense>
                }/>
                <Route path='desktop' element={
                  <React.Suspense fallback='loading...'>
                    <LazyDesktopPage/>
                  </React.Suspense>
                }/>
                <Route path='contactMe' element={
                  <React.Suspense fallback='loading...'>
                    <LazyContactMePage/>
                  </React.Suspense>
                }/>
              </Route>
              <Route path='*' element={<NoMatch/>}/>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
