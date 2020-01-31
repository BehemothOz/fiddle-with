import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    row: {
        marginBottom: theme.spacing(1),

        '&:last-of-type': {
            marginBottom: 0
        }
    }
}))