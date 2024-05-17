console.log('[ 💠 ] جاري التجهيز...');
import {join, dirname} from 'path';
import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {setupMaster, fork} from 'cluster';
import {watchFile, unwatchFile} from 'fs';
import cfonts from 'cfonts';
import {createInterface} from 'readline';
import yargs from 'yargs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const {name, author} = require(join(__dirname, './package.json'));
const {say} = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('The mego\nBot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot mego`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});

let isRunning = false;
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  /** say('[ ℹ️ ] Escanea el código QR o introduce el código de emparejamiento en WhatsApp.', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']}); **/

  setupMaster({
    exec: args[0],
    args: args.slice(1)});
  const p = fork();
  p.on('message', (data) => {
    console.log('[RECIBIDO]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
    console.error('[ ℹ️ ] حدث خطأ غير متوقع:', code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });
  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}
import fs from 'fs';
import firebaseAdmin from 'firebase-admin';

// Get DataBase >>
// حذف ملف database.json إذا كان موجودًا
try {
    fs.unlinkSync('database.json');
    console.log('database.json file deleted successfully.');
} catch (err) {
    console.error('Error deleting database.json file:', err);
}

const serviceAccount = JSON.parse(fs.readFileSync('./firebase-key.json', 'utf8')); // تحميل المفتاح كـ JSON
const id = serviceAccount.project_id
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: `https://${id}-default-rtdb.firebaseio.com`
});

// قراءة البيانات من Firebase
const dbRef = firebaseAdmin.database().ref('/');
dbRef.once('value', (snapshot) => {
    const data = snapshot.val();

    const replacedData = replaceInvalidKeys(data);

    fs.writeFileSync('database.json', JSON.stringify(replacedData, null, 4), 'utf8');
    console.log('Data saved to database.json file successfully.');
});

function replaceInvalidKeys(obj) {
    const newObj = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const newKey = key.replace(/,/g, '.');
            newObj[newKey] = obj[key];
            if (typeof obj[key] === 'object') {
                newObj[newKey] = replaceInvalidKeys(obj[key]);
            }
        }
    }
    return newObj;
}


setTimeout(() => {
    console.log('The next codes are executed after a delay of 26 seconds...');
    start('main.js')
}, 26000);

