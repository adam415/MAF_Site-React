const dbUrl    = 'mongodb://localhost:27017/mafdb';
const apiUrl   = 'http://localhost:8000/api/';
const usersUrl = `${apiUrl}users/`;

module.exports = {
    port: 8000,
    devPort: 8000,
    dbUrl: dbUrl,
    apiUrl: apiUrl,
    usersUrl: usersUrl
};