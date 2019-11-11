import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';

const Logo = props => {
    const { className } = props;
    return <img src={logo} className={cn(styles.logo, className)} alt="logo" />;
}

Logo.defaultProps = {
    className: ''
}

Logo.propTypes = {
    className: PropTypes.string
}

export default Logo;