const totalvoice = require('totalvoice-node');
const client = new totalvoice("2000f104a54ee88f67deb063e61c4ef4");

let opcoes = {velocidade: 2, tipo_voz: "br-Vitoria"};
client.audio.enviar("63992698509","https://www.condominiolivre.com.br/app/firestorecreato/tmpejrud8i9.mp3")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

 
