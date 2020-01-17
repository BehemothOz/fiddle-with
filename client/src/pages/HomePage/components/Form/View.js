import React from 'react';
import { Form } from 'antd';
import { Button, TextField, FormItem } from '../../../../shared';
import { WORD, TRANSFER } from '../../../../constants/dictionary';
import styles from './styles.module.scss';

const DictionaryForm = props => {
    const { handleSubmit, isSubmitting } = props;

    return (
        <div className={styles.root}>
            <Form onSubmit={handleSubmit}>
                <FormItem
                    name={WORD}
                    component={TextField}
                    placeholder="Enter word"
                    disabled={isSubmitting}
                />
                <FormItem
                    name={TRANSFER}
                    component={TextField}
                    placeholder="Enter transfer"
                    disabled={isSubmitting}
                />
                <div>
                    <Button type="primary" htmlType="submit" block>
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default DictionaryForm;