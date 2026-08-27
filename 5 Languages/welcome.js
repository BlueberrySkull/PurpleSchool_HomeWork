function languageChoise (language) {
    language = language.toLowerCase()
    switch (language) {
        case 'ru':
            console.log('Здравствуйте!');
            break;
        case 'de':
            console.log('Gutten tag!');
            break;
        case 'pl':
            console.log('Cześć!');
            break;
        case 'en':
        default:
            console.log('Welcome!')
    }
}

const welcome = languageChoise('RU');