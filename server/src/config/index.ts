import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  nodeEnv: process.env.NODE_ENV,
  port: 3000,
  database_url: 'mongodb+srv://sanketwalhekar83:9665998329@cluster0.sevwc.mongodb.net/invetory',
  jwt_secret: 'eyjHbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9'
};
