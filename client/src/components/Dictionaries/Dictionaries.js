import React from 'react';
import { Card, Empty } from 'antd';
import { Button, Paper } from '../../shared';
import Dictionary from '../Dictionary'
import styles from './styles.module.scss';

const data = [
    { id: 1, title: 'One', description: 'One descriptions', date: '10.12.1230', },
    { id: 2, title: 'Two Two Two Two Two Two Two Two Two Two Two',
    description: 'Two description Two description Two description Two description Two description Two description Two description', date: '15.12.2002', },
]

const Dictionaries = () => {
    const dictionaries = data;

    if (!true) {
        return (
            <Paper>
                <Empty description="You don't have a dictionary yet">
                    <Button type="primary">Create Dictionary</Button>
                </Empty>
            </Paper>
        )
    }

    return (
        dictionaries.map(dictionary => {
            return (
                <div className={styles.row}>
                    <Dictionary key={dictionary.id} {...dictionary} />
                </div>
            )
        })
    )
}

export default Dictionaries;