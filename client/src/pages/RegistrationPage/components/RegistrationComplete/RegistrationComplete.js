import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import useStyles from './styles';

const REDIRECT_TIME = 5;
const TIMEOUT = 1000;

const RegistrationComplete = () => {
    const [ time, setTime ] = React.useState(REDIRECT_TIME);
    const history = useHistory();
    const { root, icon, title, link } = useStyles();

    const decreaseTime = useCallback(() => setTime(time => time - 1), []);

    React.useEffect(() => {
        const timeId = setTimeout(() => {
            if (time <= 1) {
                clearTimeout(timeId);
                history.push('/');
            }
            else decreaseTime();
        }, TIMEOUT);
        return () => clearTimeout(timeId);
    }, [time, decreaseTime, history]);

    return (
        <div className={root}>
            <div className={icon}>
                <CheckCircleOutlineIcon fontSize="inherit" color="primary"/>
            </div>
            <h3 className={title}>Complete</h3>
            <Typography variant="body2">
                Redirect to login after{' '}
                <Typography component="span" variant="body2" color="secondary">{time}</Typography>...
            </Typography>
            <div className={link}>
                <Button component={Link} to="/" color="secondary">Login</Button>
            </div>
        </div>
    )
}

export default RegistrationComplete;