let progress = {
    story: 0,
    book: 0,
    art: 0,
    photo: 0
};

function incrementProgress(category) {
    if (progress[category] < 100) {
        progress[category]++;
        updateProgress(category);
    }
}

function updateProgress(category) {
    const circle = document.getElementById(`${category}-circle`);
    const text = document.getElementById(`${category}-text`);
    const percentage = progress[category];
    const offset = 100 - (percentage / 100) * 100;

    circle.style.strokeDasharray = `${percentage}, 100`;
    text.textContent = `${percentage}%`;
}

function uploadFile() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        alert(`File uploaded: ${file.name}`);
    }
}

function sendPrompt() {
    const promptInput = document.getElementById('prompt-input');
    const responseBox = document.getElementById('prompt-response');
    const promptText = promptInput.value;

    if (promptText) {
        const responseText = generateResponse(promptText); // Assuming generateResponse is defined elsewhere
        responseBox.textContent = responseText;
        promptInput.value = '';
    }
}
