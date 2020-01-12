import createMethods from './utils/createMethods';

const methods = ['GET', 'POST', 'PATCH', 'DELETE'];

const api = createMethods(methods);

export default api;
