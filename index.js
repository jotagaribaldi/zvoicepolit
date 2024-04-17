const totalvoice = require('totalvoice-node');
const client = new totalvoice("2000f104a54ee88f67deb063e61c4ef4");

let opcoes = {velocidade: 2, tipo_voz: "br-Vitoria"};
client.tts.enviar("63992698509", "Brancas, Azuis, Amarelas e pretas. Brincam Na luz As belas Borboletas. Borboletas brancas São alegres e francas. Borboletas azuis Gostam muito de luz. As amarelinhas São tão bonitinhas! Até Logo!", opcoes)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });
