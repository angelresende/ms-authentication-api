import { Pool } from "pg";

const connectionString = 'postgres://cirxynrh:YtGPuSDS_gUp5WaY_OPTSbQGM1_aFyMn@kesavan.db.elephantsql.com/cirxynrh';

const db = new Pool ({ connectionString });

export default db;
