import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Paper = props => {
    const { className, noindent, children } = props;
    return (
        <section
            className={
                cn(styles.paper, className, {
                    [styles.padding]: !noindent
                })
            }
        >
            {children}
        </section>
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
