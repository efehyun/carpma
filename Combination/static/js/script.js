function carp() {
    var sayı1 = prompt('Çarpmak istediğiniz ilk sayıyı giriniz.');
    var sayı2 = prompt('Çarpmak istediğiniz ikinci sayıyı giriniz.');
    var sonuç = sayı1 * sayı2;

    var h1 = document.createElement('h1');
    var yazıCevap = document.createTextNode('Sonucunuz: ' + sonuç);
    h1.setAttribute('id', 'carp');
    h1.appendChild(yazıCevap);
    document.getElementById('flex-box-sonuc').appendChild(h1);
}



function yeniden() {
    document.getElementById('carp').remove()
}