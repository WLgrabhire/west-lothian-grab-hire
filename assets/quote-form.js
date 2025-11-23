// Frontend handler for posting JSON to /api/quote

const quoteForm = document.getElementById('quote-form');

quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const data = {};
    formData.forEach((value, key) => { data[key] = value });

    try {
        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            // Show modal confirmation
            showModalConfirmation();
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
});

function showModalConfirmation() {
    // Logic to show modal confirmation
    alert('Quote request sent successfully!');
}