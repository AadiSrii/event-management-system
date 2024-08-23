const { EntitySchema } = require('typeorm');

module.exports = {
  Event: new EntitySchema({
    name: 'Event',
    tableName: 'events',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      name: {
        type: 'varchar',
      },
      description: {
        type: 'varchar',
      },
      date: {
        type: 'date',
      },
    },
    relations: {
      sessions: {
        type: 'one-to-many',
        target: 'Session',
        inverseSide: 'event',
        cascade: true,
      },
    },
  }),
};
