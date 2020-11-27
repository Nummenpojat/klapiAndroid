/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import Main from './components/Main'
import './services/i18n'
import {useTranslation} from 'react-i18next'

const App = () => {
    const { t, i18n}  = useTranslation();
    return <Main t={t} i18n={i18n} />;
  };
    
export default App;