console.log('JavaScript Date Object Lab');

// Create a new Date object called `currentDate` and log the current date and time
const currentDate = new Date();
console.log('Current Date and Time:', currentDate);

// Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Create a function `getDayName` that takes a Date object and returns the day of the week as a string
const getDayName = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

// Export the `formatDate` function using ESM syntax
export { formatDate };
