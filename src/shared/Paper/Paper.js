import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Paper = props => {
    const { className, children } = props;
    return <section className={cn(styles.paper, className)}>{children}</section>;
}

Paper.defaultProps = {
    className: ''
}

Paper.propTypes = {
    className: PropTypes.string
}

export default Paper;
