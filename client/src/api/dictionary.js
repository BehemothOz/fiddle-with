import {
    LOGIN,
    REGISTRATION,
    DICTIONARIES_GET,
    DICTIONARY_GET,
    DICTIONARY_POST,
    TRANSLATION_GET,
    TRANSLATION_POST
} from './keys';
import { arrayState, objectState, authState } from './state';
import api from './index';

const { get, post } = api;

export default {
    [LOGIN]: { method: post, url: '/login', state: authState },
    [REGISTRATION]: { method: post, url: '/registration', state: authState },
    [DICTIONARIES_GET]: { method: get, url: '/dictionaries', state: arrayState },
    [DICTIONARY_GET]: { method: get, url: '/dictionaries', state: objectState },
    [DICTIONARY_POST]: { method: post, url: '/dictionaries', state: objectState },
    [TRANSLATION_GET]: { method: get, url: '/translation', state: arrayState },
    [TRANSLATION_POST]: { method: post, url: '/translation', state: objectState }
}
