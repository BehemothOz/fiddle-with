import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import MuiPaper from '@material-ui/core/Paper';
import useStyles from './styles';

const Paper = props => {
    const styles = useStyles();
    const { className, noindent, children } = props;
    console.log(styles)
    return (
        <MuiPaper
            className={
                cn(className, {
                    [styles.indent]: !noindent
                })
            }
        >
            {children}
        </MuiPaper>
    )
}

Paper.defaultProps = {
    className: '',
    noindent: false
}

Paper.propTypes = {
    className: PropTypes.string,
    noindent: PropTypes.bool
}

export default Paper;
