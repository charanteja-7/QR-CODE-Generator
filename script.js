// //generating qr code
//below code id for  <script src="qrcode.min.js"></script>
// function generateQrCode(){
//   const inputText = document.getElementById('value').value;
//   const qrCodeContainer = document.getElementById('qrcode');
//   qrCodeContainer.innerHTML='';
//    new QRCode(qrCodeContainer, {
//     text: inputText,
//     width: 200,
//     height: 200,
// });
// }

//below code is for  <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>

 

  document.addEventListener('DOMContentLoaded', function() {
    function generateQrCode() {
      const inputText = document.getElementById('value').value;
      console.log('Input Text:', inputText);
      const qrCodeContainer = document.getElementById('qrcode');
      qrCodeContainer.innerHTML='';
      const encodedText = encodeURIComponent(inputText).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1));
      new QRious({
        element: qrCodeContainer, 
        size: 140,
        value: encodedText,
      });
    }
  
    document.getElementById('submit').addEventListener('click', generateQrCode);
  });