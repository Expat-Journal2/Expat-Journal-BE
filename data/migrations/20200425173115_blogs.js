
exports.up = function(knex) {
    return knex.schema.createTable('blogs', tbl => {
        tbl.increments();

        tbl.string('title', 255)
            .notNullable();

        tbl.string('textbox', 4000)
            .notNullable();
        
        tbl.string('created_at', 128)
            .notNullable();

        tbl.string('img', 255);

        // Foreign Keys
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('blogs');
};
