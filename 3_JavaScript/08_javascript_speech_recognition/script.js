// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const s = new SpeechRecognition();
// s.lang = 'en-US';
// s.interimResults = true;


// const p = document.createElement('p')
// const d = document.querySelector('.words');
// d.appendChild(p)
// s.addEventListener('result',e=>{
//     let transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join("");

//     if(e.results[0].isFinal){
//         const p = document.createElement('p');
//         p.textContent = transcript;
//     }
//     console.log(transcript);
// })
// s.addEventListener('end', s.start);
// s.start();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const s = new SpeechRecognition();
s.lang = 'en-US';
s.interimResults = true;

const d = document.querySelector('.words');

document.getElementById('startButton').addEventListener('click', () => {
    s.start();
});

s.addEventListener('result', e => {
    let transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

    if (e.results[0].isFinal) {
        const p = document.createElement('p');
        p.textContent = transcript;
        d.appendChild(p);
    }
    console.log(transcript);
});