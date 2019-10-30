const express = require('express');
const path = require('path');

const fs = require('fs');
const getStat = require('util').promisify(fs.stat);

const router = express.Router();

router.get('/', (req, res) => {
    res.render('audioplayer');
});

router.get('/cover', (req, res) => {
    const filePath = './public/imgs/LastStandWide.jpg';
    const cover = fs.readFileSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'image/jpg'
    });
    res.end(cover, 'binary');
});

router.get('/audio', async (req, res) => {
    const filePath = './The Price of a Mile.mp3';
    const stat = await getStat(filePath);
    //console.log(stat);

    // informações sobre o tipo do conteúdo e o tamanho do arquivo
    res.writeHead(200, {
        'Content-Type': 'audio/mp3',
        'Content-Length': stat.size
    });

    const stream = fs.createReadStream(filePath);
    /*
    stream.on('data', (chunk) => {
        res.write(chunk);
    });
    stream.on('error', () => {
        res.sendStatus(404);
    });
    stream.on('end', () => {
        console.log('acabou');
        res.end();
    });
    */
    // faz streaming do audio 
    stream.pipe(res);
});

module.exports = router;