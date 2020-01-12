import api from '../';

export default {
    login: options => api.post('/login', options),
    registration: options => api.post('/registration', options)
}
