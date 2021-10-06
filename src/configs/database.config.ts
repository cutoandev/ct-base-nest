const env = process?.env;
const databaseConfig = {
  host: env?.DB_HOST,
  port: env?.DB_PORT,
  user: env?.DB_USER,
  pwd: env?.DB_PWD,
  name: env?.DB_NAME,
};

const getDBUrl = () => {
  try {
    return `mongodb://${databaseConfig.user}:${databaseConfig.pwd}@${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.name}?authSource=admin`;
  } catch (e) {
    throw new Error('Error when getting DB url');
  }
}

export default {
  databaseConfig,
  getDBUrl,
};
