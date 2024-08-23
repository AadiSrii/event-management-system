const { EntitySchema } = require('typeorm');

module.exports = {
  Participant: new EntitySchema({
    name: 'Participant',
    tableName: 'participants',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      name: {
        type: 'varchar',
      },
      email: {
        type: 'varchar',
      },
    },
    relations: {
      session: {
        type: 'many-to-one',
        target: 'Session',
        inverseSide: 'participants',
      },
    },
  }),
};
