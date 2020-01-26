import { LOGIN, REGISTRATION, DICTIONARY_GET, DICTIONARY_POST, WORD_GET, WORD_POST } from './keys';
import { arrayState, objectState, authState } from './state';
import api from './index';

const { get, post } = api;

export default {
    [LOGIN]: { method: post, url: '/login', state: authState },
    [REGISTRATION]: { method: post, url: '/registration', state: authState },
    [DICTIONARY_GET]: { method: get, url: '/dictionary', state: arrayState },
    [DICTIONARY_POST]: { method: post, url: '/dictionary', state: objectState },
    [WORD_GET]: { method: get, url: '/word', state: arrayState },
    [WORD_POST]: { method: post, url: '/word', state: objectState }
}
