import fs from "fs"
import dotenv from "dotenv"

dotenv.config()

const DATA_FILE_PATH = process.env.DATA_FILE_PATH
const DATA = {}

fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(DATA))