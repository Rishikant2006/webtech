document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        rating: document.querySelector('input[name="rating"]:checked').value,
        feedback: document.getElementById('feedback').value,
        suggestions: document.getElementById('suggestions').value
    };
    
    console.log('Feedback submitted:', formData);
    
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('feedbackForm').reset();
    
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});
