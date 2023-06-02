const mysql = require('mysql')
class DatabaseModel {      
    static connect() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'case_md3',
            charset: 'utf8_general_ci'
        });
    }
    static querySql(sql) {
        return new Promise((resolve, reject) => {
            this.connect().query(sql, (err, data) => {
                if (err) {
                    reject(err.message)
                }
                resolve(data)
            })
        });
    }
}
module.exports = DatabaseModel