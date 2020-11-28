/* 
Copyright (c) 2020 Elias Mäkelä
*/

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import fi from '../i18n/fi.json'
import en from '../i18n/en.json'

let resources = { 
en: { translation: en },
fi: { translation: fi},
};

i18n
  .use(initReactI18next)
  .init({
    initImmediate: false,
    lng: getLocales()[0].languageCode,
    fallbackLng: 'fi',
    resources: resources
  });


export default i18n;