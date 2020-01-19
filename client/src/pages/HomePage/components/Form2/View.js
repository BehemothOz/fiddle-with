import React from 'react';
import { Form } from 'antd';
import { Button, TextField, FormItem } from '../../../../shared';
import styles from './styles.module.scss';

const DictionaryForm = props => {
    const { handleSubmit, isSubmitting } = props;

    return (
        <div className={styles.root}>
            <div>Create Word</div>
            <Form onSubmit={handleSubmit}>
                <FormItem
                    name="word"
                    component={TextField}
                    placeholder="Enter.."
                    disabled={isSubmitting}
                />
                <FormItem
                    name="transfer"
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