const drizzleSqlTemplate = `import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connetion = await mysql.createConnection({
    host: "localhost",
    user: "user",
    database: "database",
    password: "password",
});

export const db = drizzle(connetion);`;

const drizzlePostgresTemplate = `import { drizzle } from "drizzle-orm/node-postgres";
const { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://user:password@localhost:5432/database",
});

await client.connect();
export const db = drizzle(client);
`;

export { drizzleSqlTemplate, drizzlePostgresTemplate };
