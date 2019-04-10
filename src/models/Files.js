const mongoose = require('mongoose');

const File = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true,
    },
 }, {
     timestamps: true,
     toObject: true, //carrega o File.virtual
     toJSON: true
 });

 File.virtual('url').get(function(){
     return `http://localhost:3333/files/${encodeURIComponent(this.path)}`//caminho virtual para acessar os arquivos
 })

 module.exports = mongoose.model('File', File);