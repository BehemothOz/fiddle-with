import React from 'react';
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
                <Layout>
                    {/* <Switch />
                    <Logout /> */}
                </Layout>
            </Header>
            <Content>
                {props.children}
            </Content>
        </>
    )
}

export default BaseTemplate;