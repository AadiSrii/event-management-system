const { EntitySchema } = require('typeorm');

module.exports = {
  Session: new EntitySchema({
    name: 'Session',
    tableName: 'sessions',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      title: {
        type: 'varchar',
      },
      speaker: {
        type: 'varchar',
      },
    },
    relations: {
      event: {
        type: 'many-to-one',
        target: 'Event',
        inverseSide: 'sessions',
      },
      participants: {
        type: 'one-to-many',
        target: 'Participant',
        inverseSide: 'session',
        cascade: true,
      },
    },
  }),
};
