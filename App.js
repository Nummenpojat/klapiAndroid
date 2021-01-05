/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import Main from './components/Main'
import {useTranslation} from 'react-i18next'
import {Text} from 'react-native'

//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import './services/i18n'


const App = () => {
    const { t, i18n }  = useTranslation();
    return <Main t={t} i18n={i18n} />;
  };
    
export default App;