import React from 'react';
import { Form as FormikForm } from 'formik';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { TextField, FormItem } from '../../../../shared';
import { TITLE, DESCRIPTION } from '../../../../constants/dictionaries';
import Button from '@material-ui/core/Button';

const Form = props => {
    const { handleSubmit, isSubmitting } = props;

    return (
        <Grid component={FormikForm} onSubmit={handleSubmit} container spacing={2}>
            <Grid item xs={12}>
                <FormItem
                    name={TITLE}
                    component={TextField}
                    label="Enter title"
                    helperText="Least 2 characters"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <FormItem
                    name={DESCRIPTION}
                    component={TextField}
                    label="Enter description"
                    multiline
                    rows="2"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <Box paddingBottom={3} paddingTop={1}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Add
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Form;