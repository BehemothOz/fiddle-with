import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';
import { Switch, Logout } from '../../shared';
import useStyles from './styles';

const Layout = props => {
    const styles = useStyles();
    return <div className={styles.layout}>{props.children}</div>
}

const BaseTemplate = props => {
    // console.count('<BaseTemplate /> RENDER');
    const styles = useStyles();
    return (
        <>
            <Header>
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <Typography variant="h6" className={styles.title}>Dictionary</Typography>
                        <Switch />
                        <Logout />
                    </Toolbar>
                </Container>
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