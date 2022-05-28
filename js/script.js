function GerarQRcode(){

    var inputUser = document.querySelector('textarea').value;

    document.getElementById('txtQrcode').innerHTML = document.querySelector('textarea').value;

    //Api gerador de QR-code Google
    var APIqrcode = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';

    var conteudoQRcode = APIqrcode + encodeURIComponent(inputUser);

    document.querySelector('#QRCodeImage').src = conteudoQRcode;

}

