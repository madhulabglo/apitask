import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import ListPage from "./api/listpage.js"
import ResourcePage from './api/resourcepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ListPage/>}/>
          <Route exact path="/:id" element={<ResourcePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
