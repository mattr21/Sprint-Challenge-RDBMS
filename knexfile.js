module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/project_tracker.db3' // ie lambda.db3
    },
    useNullAsDefault: true,
  },
};