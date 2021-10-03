exports.up = function (knex) {
    return knex.schema.createTable("cohorts", table => {
        table.increments("id");
        table.string("logoUrl");
        table.string('name');
        table.text('members');
        table.timestamp('createdAt').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("cohorts", table => {
        
    })
};
