import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import { Switch, Logout } from '../../shared';
import styles from './styles.module.scss';

const Layout = props => {
    return <div className={styles.layout}>{props.children}</div>
}

const Content = props => {
    return (
        <main className={styles.content}>
            <Layout>
                {props.children}
            </Layout>
        </main>
    )
}

const BaseTemplate = props => {
    // console.count('<BaseTemplate /> RENDER');
    return (
        <>
            <Header>
                {/* <Layout> */}
                    {/* <Logout /> */}
                    {/* <Switch />
                    <Logout /> */}
                <Switch />
                <Logout />
            </Header>
            <Container maxWidth="sm">
                {props.children}
            </Container>
        </>
    )
}

export default BaseTemplate;