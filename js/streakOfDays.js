// Function to calculate the day streak since a given start date
const getDayStreak = (startDate) => {
    // Convert start date to Date object
    const start = new Date(startDate);
  
    // Clear time portion for accurate day calculation
    start.setHours(0, 0, 0, 0);
  
    // Get today's date and clear time portion for accurate calculation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // Calculate difference in milliseconds and convert to days
    const diffInTime = today.getTime() - start.getTime();
    const streak = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  
    return streak;
  };
  
  // Start date
  const startDate = '2025-01-01';
  
  // Calculate the streak in days
  const newSongsFound = getDayStreak(startDate);
  console.log(newSongsFound);
  
  // Get the element where the result will be displayed
  const elemMeditation = document.querySelector('.newSongsFound');
  
  // Set the text content of the element to the streak value
  elemMeditation.textContent = newSongsFound;
  
  