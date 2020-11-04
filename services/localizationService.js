import fi from '../i18n/fi.json'
import en from '../i18n/en.json'
import appConfig from '../appConfig.json'

const getLanguage = () => 
{
    switch (appConfig['current_lang']) {
    
    case 'en':
        return en["displayText"]
        
    case 'fi':
        return fi["displayText"]
    }
}

export default getLanguage;