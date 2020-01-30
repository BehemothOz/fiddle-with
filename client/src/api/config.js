const api = {
    development: 'http://localhost:4444',
    production: 'https://fiddle-wth-api.herokuapp.com'
};

const config = {
    url: process.env.NODE_ENV === 'production' ? api.production : api.development,
    timeout: 30000
}

export default config;