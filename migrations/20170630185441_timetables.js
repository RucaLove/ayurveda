
exports.up = function(knex) {
  return knex.schema.createTable('timetables', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('image').notNullable()
    table.string('date').notNullable()
    table.string('day').notNullable()
    table.string('start_time').notNullable()
    table.string('end_time').notNullable()
    table.string('color').notNullable()
    table.string('description').notNullable()
    table.string('state').notNullable().defaultTo('1')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('timetables');
};
