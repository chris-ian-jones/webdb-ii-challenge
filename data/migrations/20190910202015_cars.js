// changes to make
exports.up = function(knex) {
  //created cars table
  return knex.schema.createTable('cars', tbl => {
    // defined table column fields

    // PRIMARY KEY (defaults to 'id')
    tbl.increments()

    // VIN
    tbl
      .string('VIN', 128)
      .unique()
      .notNullable()

    // MAKE
    tbl
      .string('MAKE', 128)
      .notNullable()

    // MODEL
    tbl
      .string('MODEL', 128)
      .notNullable()

    // MILEAGE
    tbl
      .integer('MILEAGE')
      .notNullable()

    // transmission type
    tbl
      .string('TRANSMISSION_TYPE', 128)

    //status of the title (clean, salvage, etc.)
    tbl
      .string('TITLE_STATUS', 128)
  })
}

// to revert changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}