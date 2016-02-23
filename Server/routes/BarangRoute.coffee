express = require 'express'
Barang = require '../models/Barang'
Logger = require '../utils/Logger'

router = express.Router()
uuid = require 'node-uuid'

router.get '/barang', (req, res) ->
  Barang.find((err, barang) ->

    if err
      Logger.error 'error bung', err
      return res.json err

    Logger.debug 'data berhasil diakses', barang
    res.json barang
)

router.post '/barang', (req, res) ->
  barang = new Barang(
    idBarang: req.body.idBarang
    namaBarang: req.body.namaBarang
    jenisBarang: req.body.jenisBarang
    tanggalKadaluarsa: req.body.tanggalKadaluarsa
  )

  barang.save (err) ->
    if err
      Logger.error 'error bung', err
      return res.json err

    Logger.debug 'data berhasil disimpan'
    res.json
      success: true
      message: 'data berhasil disimpan'

router.put '/barang/:idBarang', (req, res) ->
  idBarang = req.params.idBarang

  Barang.findOne {idBarang: idBarang}, (err, barang) ->
    if err
      Logger.debug 'error bung', err
      return res.json err

    barang.namaBarang = req.body.namaBarang
    barang.jenisBarang = req.body.jenisBarang
    barang.tanggalKadaluarsa = req.body.tanggalKadaluarsa
    barang.save()

    Logger.debug 'data berhasil diupdate bung', barang
    res.json
      success: true
      message: 'data berhasil di update'

router.delete '/barang/:idBarang', (req, res) ->
  idBarang = req.params.idBarang

  Barang.remove {idBarang: idBarang}, (err) ->
    if err
      Logger.debug 'error bung', err
      return res.json err

    Logger.debug 'data berhasil di hapus'
    res.json
      success: true
      message: 'data berhasil dihapus'

module.exports = router
