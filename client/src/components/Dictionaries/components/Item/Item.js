import React from 'react';
import { Button, Paper } from '../../../../shared';
import styles from './styles.module.scss';

const Item = props => {
    const { title, description, date, onEditClick } = props;

    // TODO: Need optimization!

    const edit = () => onEditClick({ title, description });

    return (
        <Paper noindent>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <Button type="primary" size="small" onClick={edit}>Edit</Button>
                </div>
                <div className={styles.body}>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
        </Paper>
    )
};

export default Item;