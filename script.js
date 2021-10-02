const age = 47; 
const isFemale = true;
const driverStatus = "bob"; 
const firstName = "Kees";
const totalAmount = 30;

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je krijgt geen 50% korting!");
}

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Omdat je Bram of Sarah heet, heb je recht op een gratis biertje!");
  } else {
    console.log("Omdat je geen Bram of Sarah heet, heb je helaas geen recht op een gratis biertje!");
  }

  if (totalAmount > 100) {
    console.log("Je hebt voor meer dan € 100 aan drankjes besteld en je krijgt daarom een gratis flesje champagne!");
  } else if (totalAmount > 50) {
    console.log("Je hebt voor meer dan € 50 aan drankjes besteld en je krijgt daarom een gratis portie nachos");
  } else if (totalAmount > 25) {
    console.log("Je hebt voor meer dan € 25 aan drankjes besteld en je krijgt daarom een gratis portie (vega)bitterballen!");
  } else {
    console.log("Je hebt helaas te weinig aan drankjes besteld om iets gratis te krijgen");
  }