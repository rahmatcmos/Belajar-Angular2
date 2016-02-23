mongoose = require 'mongoose'
Schema = mongoose.Schema

Barang = new Schema({
  idBarang:
    type: 'String'
    require: true
  namaBarang:
    type: 'String'
    require: true
  jenisBarang:
    type: 'String'
    require: true
  tanggalKadaluarsa:
    type: 'String'
    require: true
}, collection: 'tb_barang')

module.exports = mongoose.model('Barang', Barang)
