import React from "react";
import {createRoot} from "react-dom/client";
import Nav from './Component/Nav';
import Logo from './Component/Logo';
import Menu from './Component/Menu';
import App from './Component/App';

createRoot(document.getElementById('root')).render(<Nav/>)
createRoot(document.getElementById('root')).render(<Logo/>)
createRoot(document.getElementById('root')).render(<Menu/>)
createRoot(document.getElementById('root')).render(<App/>)