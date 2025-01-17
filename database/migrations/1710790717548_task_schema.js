'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 200)
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
