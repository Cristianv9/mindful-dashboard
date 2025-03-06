// Function to calculate the days until an event
const getDaysUntilEvent = (eventDate) => {
    // Create Date objects for now and the event
    const now = new Date();
    const event = new Date(eventDate);
  
    // Clear time portion for accurate day calculation
    now.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
  
    // Calculate difference in milliseconds
    const diffInTime = event.getTime() - now.getTime();
  
    // Convert to days
    const daysUntil = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  
    return daysUntil;
  };
  
  // Event date
  const gradDay = "2025-06-13";
  
  // Calculate days until graduation
  const daysUntilGrad = getDaysUntilEvent(gradDay);
  
  // Get the element where the result will be displayed
  const elemDaysUntilGrad = document.querySelector('.daysUntilGraduation');
  
  // Set the text content of the element to the number of days until graduation
  elemDaysUntilGrad.textContent = daysUntilGrad;
  
  console.log(daysUntilGrad);
  