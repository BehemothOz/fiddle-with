import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    header: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    content: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    actions: {
        justifyContent: 'flex-end'
    },
    title: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    date: {
        fontSize: '0.62rem'
    }
}))