const dataBaseModel = require("./database.model");
const mysql = require('mysql')


class Categories extends dataBaseModel  {
    
    static async addCategories(categoryName) {
        let sql = `INSERT INTO categories (categoryName) VALUES ('${categoryName}');`
        await this.querySql(sql)
    };
    

};
module.exports = Categories
