function GerarQRcode(){

    var inputUser = document.querySelector('textarea').value;

    document.getElementById('txtQrcode').innerHTML = document.querySelector('textarea').value;

    //Api gerador de QR-code Google
    var APIqrcode = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';

    var conteudoQRcode = APIqrcode + encodeURIComponent(inputUser);

    document.querySelector('#QRCodeImage').src = conteudoQRcode;

}


 function GerarPDF(){

    document.getElementById('Expo_print').innerHTML = document.getElementById('expo_card').textContent;
    document.getElementById('Txt_print').innerHTML = document.getElementById('txtQrcode').textContent;
    document.querySelector('#img_print').src = document.querySelector('#QRCodeImage').src;
    window.print();

    
 }   

//  function gerarpdf(){

//     var pegar_dados=document.querySelector('.print').innerHTML;
//     var janela = window.open( '  ' ,  '  ' , 'width=800,heigth=600');
//     janela.document.write('<html><head>');
//     janela.document.write('<title>Sou o Pdf</title></head>');
//     janela.document.write('<body>');
//     janela.document.write(pegar_dados);
//     janela.document.write('</body></html>');
//     janela.document.close();
//     janela.print();

//  }