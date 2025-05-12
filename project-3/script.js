
function updateFont() {
    let userInput = document.getElementById('user-input').value;
    let outputDiv1 = document.getElementById('font-output-1');
    let outputDiv2 = document.getElementById('font-output-2');


    outputDiv1.textContent = userInput;
    outputDiv2.textContent = userInput;
}


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


const outputDiv2 = document.getElementById('font-output-2');
makeDraggable(outputDiv2); 


document.getElementById('export-btn').addEventListener('click', function() {
    const elementToExport = document.getElementById('font-output-2');


    html2canvas(elementToExport).then(function(canvas) {
    
        const dataUrl = canvas.toDataURL('image/jpeg', 1.0); 
        
      
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'poster.jpg'; 
        link.click(); 
    });
});
