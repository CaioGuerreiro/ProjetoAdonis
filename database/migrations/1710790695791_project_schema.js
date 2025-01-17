'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 200)
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('cutomers.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
