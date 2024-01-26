import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherReport from './components/WhetherReport';
import {ShowReports} from './components/ShowReports'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* define the routes */}
          <Route path="/"  element={<WeatherReport/>} />
          <Route path="/reports" element={<ShowReports/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
