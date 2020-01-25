import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import { Paper } from '../../shared';
import Dictionaries from '../../components/Dictionaries';

const HomePage = () => {
    return (
        <BaseTemplate>
            <Dictionaries></Dictionaries>
        </BaseTemplate>
    )
}

export default HomePage;