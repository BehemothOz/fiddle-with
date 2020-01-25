import React from 'react';
import { Button, Paper } from '../../shared';
import styles from './styles.module.scss';

const Dictionary = props => {
    const { title, description, date } = props;
    return (
        <Paper noindent>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <Button type="primary" size="small">Edit</Button>
                </div>
                <div className={styles.body}>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
        </Paper>
    )
}

export default Dictionary;