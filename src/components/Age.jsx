export const calculateAge = (dateOfBirth) => {
    const [day, month, year] = dateOfBirth.split(/[-/]/); // Handle both '-' and '/' separators
    const dob = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    const days = now.getDate() - dob.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
  
    if (days < 0) {
        months--;
        if (months < 0) {
            years--;
            months = 11;
        }
    }
  
    return { years, months };
  };
  