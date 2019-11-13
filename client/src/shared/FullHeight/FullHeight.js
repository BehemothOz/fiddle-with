import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const FullHeight = props => {
    const { className, children } = props;
    return <div className={cn(styles.root, className)}>{children}</div>;
}

FullHeight.defaultProps = {
    className: ''
}

FullHeight.propTypes = {
    className: PropTypes.string
}

export default FullHeight;
