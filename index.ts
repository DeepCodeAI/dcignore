import * as fs from 'fs'
import * as path from "path";
const DefaultDCIgnore: string = fs.readFileSync(path.resolve(__dirname, 'default.dcignore'), 'utf8');
export { DefaultDCIgnore };