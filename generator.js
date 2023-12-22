var topTextInput = document.getElementById('topText');
var bottomTextInput = document.getElementById('bottomText');

topTextInput.addEventListener('input', updateMemePreview);
bottomTextInput.addEventListener('input', updateMemePreview);

function updateMemePreview() {
    var topTextValue = topTextInput.value;
    var bottomTextValue = bottomTextInput.value;

    document.getElementById('topTextPreview').innerText = topTextValue;
    document.getElementById('bottomTextPreview').innerText = bottomTextValue;
}

var saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', saveMeme);

// Fonction pour enregistrer le meme
function saveMeme() {
    // Logique pour enregistrer le meme
    alert('Meme enregistré !');
}