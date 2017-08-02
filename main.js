function createBio(datum) {  //receives ONE object, which will be customers.results[i]

  let name    = (datum.name.first + " "+ datum.name.last);
  let email   = datum.email;
  let street  = datum.location.street;
  let city    = datum.location.city;
  let state   = datum.location.state;
  let zip     = datum.location.postcode;
  let phone   = datum.phone;
  let social  = datum.id.value;
  let photoURL= datum.picture.large;

  let block ="";

  block += "<li>";
  block += `\n<img src="${photoURL}">`
  block += `\n<h2 class="name">${name}</h2>`;
  block += "<hr>"
  block += `\n<h3 class ="email">${email}</h3>`
  block += '\n<div class="address">'
  block += `\n\t<h4 class="address-item">${street}</h4>`
  block += `\n\t<h4 class="address-item">${city}, ${state} ${zip}</h4>`
  block += `\n\t<h4 class="address-item">${phone}</h4>`
  block += "\n</div>"
  block += `\n<div class="ssn-wrapper"><h5 class = "ssn">${social}</h5></div>`
  block += "\n </li>"

  return(block);
}

// console.log(createBio(customers.results[0]));
let theList = document.getElementById('the-list');
console.log(theList);

function processData(data){  //receives the "customers" object

  let people = data.results;

  people.forEach( function(person){
    // console.log(theList);
    // console.log(person);
    // console.log(createBio(person));
    theList.innerHTML += createBio(person);

  });

}

processData(customers);



// NAME (name) = datum.name.first  +   datum.name.last
// EMAIL (email) = datum.email
// ADDRESS (street / City, State / Phone)
//   datum.location.street
//   datum.location.city + datum.location.state + datum.location.postcode
//   datum.phone
// SSN (ssn) [*blurry*]
//   datum.id.value
