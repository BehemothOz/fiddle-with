import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from 'antd';
import styles from './styles.module.scss';

const { root, icon, title, link } = styles;

const REDIRECT_TIME = 5;
const TIMEOUT = 1000;

const RegistrationComplete = () => {
    const [ time, setTime ] = React.useState(REDIRECT_TIME);
    const history = useHistory();

    const decreaseTime = () => setTime(time - 1);

    React.useEffect(() => {
        const timeId = setTimeout(() => {
            if (time <= 1) {
                clearTimeout(timeId);
                history.push('/');
            }
            else decreaseTime();
        }, TIMEOUT);
        return () => clearTimeout(timeId);
    }, [time]);

    return (
        <div className={root}>
            <Icon className={icon} type="heart" theme="twoTone" />
            <h3 className={title}>Complete</h3>
            <span>Redirect to login after {time}...</span>
            <div className={link}>
                <Link to="/">Login</Link>
            </div>
        </div>
    )
}

export default RegistrationComplete;