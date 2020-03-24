var Sequelize = require('sequelize');

//var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
var sequelize = new Sequelize('sequelize', 'ghmd86', '1qaz!QAZ', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT,
    }
}, {
    // timestamps: false,
    freezeTableName: true,

    // define the table's name
    tableName: 'user_details'
});

function test() {
    // User.sync({
    //     force: true
    // }).then((sync) => {
    //     console.log(sync);
    //User.create('GHULAM MOHAMMEd')
    User.findAll({
        group: ['name', 'createdAt'],
        attributes: [
            ['name', 'product'],
            [sequelize.literal('extract(YEAR FROM "createdAt")'), 'year'],
            [sequelize.literal('sum  (id )'), 'sum']
        ]
    }).then((inn) => {
        console.log(JSON.stringify(inn))
    });
    // })
}
test();