import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath)); // test.txt

// dirname()
console.log(path.dirname(filePath)); // ./dir1/dir2

// extname()
console.log(path.extname(filePath)); // .txt

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);

// join
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);
