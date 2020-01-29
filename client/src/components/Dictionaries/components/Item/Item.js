import React from 'react';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Paper } from '../../../../shared';
import styles from './styles.module.scss';

const Item = props => {
    const { title, description, date, onEditClick } = props;

    // TODO: Need optimization!

    const edit = () => onEditClick({ title, description });
    const { url } = useRouteMatch();
    return (
        <Paper noindent>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <Link to={`${url}/${props._id}`}>Go</Link>
                    <Button color="primary" size="small" onClick={edit}>Edit</Button>
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