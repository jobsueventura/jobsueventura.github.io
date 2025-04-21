// Function to update the font style and text as per user input
function updateFont() {
    let userInput = document.getElementById('user-input').value;
    let outputDiv1 = document.getElementById('font-output-1');
    let outputDiv2 = document.getElementById('font-output-2');

    // Set the font style dynamically
    outputDiv1.textContent = userInput;
    outputDiv2.textContent = userInput;
}

// Draggable functionality (only for #font-output-2)
function makeDraggable(element) {
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    element.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        active = true;
        element.style.cursor = "grabbing";
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        active = false;
        element.style.cursor = "grab";
    }

    function drag(e) {
        if (!active) return;

        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        element.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
}

// Apply the draggable functionality only to #font-output-2
const outputDiv2 = document.getElementById('font-output-2');
makeDraggable(outputDiv2);  // Only make #font-output-2 draggable

// Export functionality
document.getElementById('export-btn').addEventListener('click', function() {
    const elementToExport = document.getElementById('font-output-2');

    // Use html2canvas to take a screenshot of the element
    html2canvas(elementToExport).then(function(canvas) {
        // Convert canvas to a data URL (JPEG format)
        const dataUrl = canvas.toDataURL('image/jpeg', 1.0);  // 1.0 is quality (0 to 1)
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'poster.jpg';  // Name of the file to save
        link.click();  // Trigger the download
    });
});
