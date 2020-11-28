
//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import './i18n'

const i18nHelper = () => {
    const { t, i18n }  = useTranslation();
    return (t, i18n)
}

export default i18nHelper