import { LOGIN, REGISTRATION, HOME_GET } from './keys';
import api from './index';

const { get, post } = api;

export default {
    [LOGIN]: { method: post, url: '/login' },
    [REGISTRATION]: { method: post, url: '/registration' },
    [HOME_GET]: { method: get, url: '/home' }
}
