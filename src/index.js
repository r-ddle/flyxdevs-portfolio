import ReactDOM from 'react-dom/client';
import "preline/preline";
import './index.css';
import Page from './routes/Page.js'
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Page />
    </Router> 
);