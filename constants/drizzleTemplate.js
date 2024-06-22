const drizzleSqlTemplate = `import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import config from "config";

const databaseUrl = config.get("dbUrl");

const connetion = await mysql.createConnection(databaseUrl);

export const db = drizzle(connetion);`;

const drizzlePostgresTemplate = `import { drizzle } from "drizzle-orm/node-postgres";
import config from "config";
const { Client } from "pg";

const databaseUrl = config.get("dbUrl");

const client = new Client({
    connectionString: databaseUrl,
});

await client.connect();
export const db = drizzle(client);
`;

export { drizzleSqlTemplate, drizzlePostgresTemplate };
