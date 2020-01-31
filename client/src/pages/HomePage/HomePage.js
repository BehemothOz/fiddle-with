import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Dictionaries from '../../components/Dictionaries';
import DictionariesProvider from '../../providers/DictionariesProvider';
import Dictionary from '../../components/Dictionary';

const HomeRouter = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:id`} component={Dictionary} />
            <Route exact path={path}>
                <DictionariesProvider>
                    <Dictionaries />
                </DictionariesProvider>
            </Route>
        </Switch>
    )
}

const HomePage = () => <HomeRouter />;

export default HomePage;