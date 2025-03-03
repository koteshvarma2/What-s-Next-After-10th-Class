// Function to change the background color of the body
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to change the text color of all paragraphs
function changeTextColor(color) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = color;
    });
}

// Example usage
changeBackgroundColor('lightblue');
changeTextColor('darkblue');