import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BaseTemplate from '../../templates/BaseTemplate';
import Dictionaries from '../../components/Dictionaries';
import DictionariesProvider from '../../providers/DictionariesProvider';
import Dictionary from '../../components/Dictionary';

const HomePage = () => {
    let { path } = useRouteMatch();

    return (
        <BaseTemplate>
             <Switch>
                <Route path={`${path}/:id`} component={Dictionary} />
                <Route exact path={path}>
                    <DictionariesProvider>
                        <Dictionaries />
                    </DictionariesProvider>
                </Route>
            </Switch>
        </BaseTemplate>
    )
}

export default HomePage;