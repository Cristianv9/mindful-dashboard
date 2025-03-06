// Function
const calculateAgeOf = (birthDate) => {
  // Convert birth date string to Date object
  const birth = new Date(birthDate);
  const today = new Date();

  // Get years
  let age = today.getFullYear() - birth.getFullYear();

  // Check if birthday hasn't occurred this year
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

const birthDate = '2002-10-31'; // Replace this with the person's birthdate
const age = calculateAgeOf(birthDate);

console.log(age);

// Get the element where age will be displayed
const elemAge = document.querySelector('.ageOfPerson');

// Set the element's text content
elemAge.textContent = age;