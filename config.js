module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'test_secret',
    },
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'oracle12c',
        database: process.env.MYSQL_DB || 'db_social_network',
    },
    mysqlService: {
        port: process.env.MYSQ_SERVICE_PORT || 3001,
        host: process.env.MYSQ_SERVICE_PORT || 'localhost',
    },
    postService: {
        port: process.env.POSTS_SERVICE_PORT || 3002,
        host: process.env.POSTS_SERVICE_PORT || 'localhost',
    }
}