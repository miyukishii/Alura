function hasSpecialsChar(conditionsNotPassing, password) {
    for (let i = 0; i < password.length; i ++) {
      if (password[i] >= 33 && password[i] <= 47 
        || password[i] >= 58 && password[i] <= 64
        || password[i] >= 91 && password[i] <= 96) {
            return conditionsNotPassing;
      }
    }
       return conditionsNotPassing += 1;

}

function hasLowerCase(conditionsNotPassing, password) {
    for (let i = 0; i < password.length; i ++) {
      if (password[i] >= 97 && password[i] <= 122) {
        return hasSpecialsChar(conditionsNotPassing, password);
}
      }
    
      conditionsNotPassing += 1;
      return hasSpecialsChar(conditionsNotPassing, password);
    }
    

function hasUpperCase(conditionsNotPassing, password) {
    for (let i = 0; i < password.length; i ++) {
      if (password[i] >= 65 && password[i] <= 90) {
        return hasLowerCase(conditionsNotPassing, password);
      }
    }
    conditionsNotPassing += 1;
    return hasLowerCase(conditionsNotPassing, password);
}

function hasOneDigit(conditionsNotPassing, password) {
    for (let i = 0; i < password.length; i ++) {
      if (password[i] >= 48 && password[i] <= 57) {
        return hasUpperCase(conditionsNotPassing, password);
     }
    }
    conditionsNotPassing += 1;
    return hasUpperCase(conditionsNotPassing, password);
}


function minimumNumber(n, password) {
    let ascii = [];
    let conditionsNotPassing = 0;
    
    for (let i = 0; i < password.length; i ++) {
      ascii.push(password[i].charCodeAt());
    }
  
    const result =  hasOneDigit(conditionsNotPassing, ascii);
  
    if (n >= 6) {
      return result;
    }
    return 6 - n;
  }
  
  console.log(minimumNumber(3,'Ab1'));
