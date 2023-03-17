
function Habla(){
    var dime = document.getElementById('texto').value; 
    var pos = document.getElementById('textos');

    console.log(dime);

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(dime);
    utterThis.lang = 'es-ES';
    synth.speak(utterThis);

    pos.innerHTML = "<b>Ultimo Texto Reproducido: </b>" + dime;


}
