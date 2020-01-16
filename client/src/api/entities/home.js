import api from '../';

export default {
    get: (...args) => api.get('/home', ...args)
}
