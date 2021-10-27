document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
}); //Adicione um observador de eventos//

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); //transforma string em array//
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //criando variavel audioElement e selecionando o id com um template ``//
    let keyElement =  document.querySelector(`div[data-key="${sound}"]`);//procurando na div com o atributo data-key com um template string//

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    
    let wait = 0;
    
    
    for(let songItem of songArray) {
        setTimeout(()=>{
        playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}