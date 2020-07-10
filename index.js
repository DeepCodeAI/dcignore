import fs from 'fs'
import path from "path";
module.exports = fs.readFileSync(path.resolve(__dirname, 'default.dcignore'), 'utf8');