import React from 'react';
import { Home } from './pages/Home/Home';
import { NotFound } from '../src/pages/NotFound/NotFound';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <html lang="en">
      <body>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </body>
    </html>
  );
}

export default App;
