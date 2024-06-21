import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AboutPage from './pages/AboutPage/AboutPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
  
  console.log(test);

  return (
    <div>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
