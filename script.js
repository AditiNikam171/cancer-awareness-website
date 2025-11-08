// Inspirational quotes array
const quotes = [
    {
        content: "Hope is the only thing stronger than fear.",
        author: "Suzanne Collins"
    },
    {
        content: "You never know how strong you are until being strong is your only choice.",
        author: "Bob Marley"
    },
    {
        content: "Cancer may have started the fight, but I will finish it.",
        author: "Unknown"
    },
    {
        content: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
        author: "Rikki Rogers"
    },
    {
        content: "Every day is a gift. That's why we call it the present.",
        author: "Bill Keane"
    },
    {
        content: "The human spirit is stronger than anything that can happen to it.",
        author: "C.C. Scott"
    },
    {
        content: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
        author: "Mary Anne Radmacher"
    },
    {
        content: "We cannot control the wind, but we can adjust our sails.",
        author: "Unknown"
    },
    {
        content: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
        author: "Hippocrates"
    },
    {
        content: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    }
];

// Get random quote
function getNewQuote() {
    const quoteLoading = document.getElementById('quoteLoading');
    const quoteContent = document.getElementById('quoteContent');
    
    // Show loading
    quoteLoading.classList.remove('hidden');
    quoteContent.classList.add('hidden');
    
    // Simulate loading delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        document.getElementById('quoteText').textContent = `"${quote.content}"`;
        document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
        
        // Show content
        quoteLoading.classList.add('hidden');
        quoteContent.classList.remove('hidden');
    }, 500);
}

// Initialize with first quote
getNewQuote();

// Scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Hide form, show success message
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Reset form and show it again after 3 seconds
    setTimeout(() => {
        document.getElementById('contactForm').classList.remove('hidden');
        document.getElementById('successMessage').classList.add('hidden');
        document.querySelector('form').reset();
    }, 3000);
}
