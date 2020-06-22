
exports.up = function(knex) {
    return knex.schema.creatTable('users', tbl => {
        tbl.increments('userID').primary();
        tbl.string('username').notNullable().unique();
        tbl.string('crypt_password').notNullable().unique();
        tbl.sting('salt');
        tbl.string('email').unique();
        tbl.string('first_name');
        tbl.string('surname');
        tbl.timestamp('created').notNullable().defaultTo(knex.fn.now());
        tbl.timpestamp('last_log').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
