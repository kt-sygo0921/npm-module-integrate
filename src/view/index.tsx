import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Top} from './pages/Top';
import {Sample1} from './pages/Sample1';
import {Sample2} from './pages/Sample2';
import { render } from 'react-dom';

const App: React.FC =  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/Sample1" component={Sample1} />
                <Route path="/Sample2" component={Sample2} />
            </Switch>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('root'));

