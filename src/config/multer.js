const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'), //rota da pata destino do arquivo
    //local de armazenamento dos arquivos
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp')) //resolve os destinos
        },
        filename: (req, file, cb) => { //gerador de nome único para cada arquivo
            crypto.randomBytes(16, (err, hash) =>{
                if(err) cb(err);
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};