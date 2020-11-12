/*
Copyright (c) 2020 Elias Mäkelä
*/

import fi from '../i18n/fi.json'
import en from '../i18n/en.json'
import appConfig from '../appConfig.json'

const getLanguage = () => 
{
    switch (appConfig['current_lang']) {
    
    case 'en':
        return en["generic"]
        
    case 'fi':
        return  {"generic": fi["generic"], "navBar": fi["navBar"]}
    }
}

export default getLanguage;