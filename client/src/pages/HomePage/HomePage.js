import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import Dictionaries from '../../components/Dictionaries';
import DictionariesProvider from '../../providers/DictionariesProvider';

const HomePage = () => {
    return (
        <BaseTemplate>
            <DictionariesProvider>
                <Dictionaries />
            </DictionariesProvider>
        </BaseTemplate>
    )
}

export default HomePage;