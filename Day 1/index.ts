// 2. Personal Message: Store a person's name in a variable, and print a message to that person. Your message 
//should be simple,such as,"Hello Eric,would you like to learn some python today?"

let personName: string = "Eric";
console.log(`Hello ${personName},would you like to learn some Python today`);

// 3. Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,
// uppercase, and titlecase.

let secondpersonName: string = "Laiba Marrie";

// in lowercase
console.log("lowercase:",secondpersonName.toLowerCase());

// in uppercase
console.log("uppercase:",secondpersonName.toUpperCase());

// titlecase
console.log("titlecase:",secondpersonName.replace(/\b\w/g,c=> c.toUpperCase()));