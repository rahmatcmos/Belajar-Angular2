/**
 * Barang.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('node-uuid');

module.exports = {

  attributes: {
    idBarang: {
      type: 'string',
      primaryKey: true,
      required: true
    },
    namaBarang: {
      type: 'string',
      required: true
    },
    jenisBarang: {
      type: 'string',
      enum: ['cair', 'gas', 'padat'],
      required: true
    },
    tanggalKadaluarsa: {
      type: 'date',
      required: true
    }
  },

  beforeCreate: function(values, callback) {
    values.idBarang = uuid.v4();
    callback();
  }

};
