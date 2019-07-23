const btn = document.querySelector('.SpeakButton');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ['Hello', 'Hi', 'Whats up', 'What do you want'];
const other = ["I am not saying anything", 'I am no snitch', 'None of your business', 'Depends who is asking', 'You wont get anything out of me', 'My lips are sealed', 'Go away'];


recognition.onstart = function() {
    console.log('Ask now');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    readOut(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I dont know what you mean';

    if (message.includes('hi' || 'hello')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else {
        const finalText = other[Math.floor(Math.random() * other.length)];
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}