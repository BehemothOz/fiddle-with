import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Header from '../../components/Header';
import { Switch, Logout } from '../../shared';
import useStyles from './styles';

const Layout = props => {
    const styles = useStyles();
    return <div className={styles.layout}>{props.children}</div>
}

const BaseTemplate = props => {
    // console.count('<BaseTemplate /> RENDER');
    return (
        <>
            <Header>
                <Switch />
                <Logout />
            </Header>
            <Toolbar />
            <Container maxWidth="sm">
                <Layout>
                    {props.children}
                </Layout>
            </Container>
        </>
    )
}

export default BaseTemplate;