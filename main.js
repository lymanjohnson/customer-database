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

//<embarrasment src="I'm pretty embarrassed about this next part. I didn't realize that back-ticks parsed white space nicely. I'd re-do it if this were a weekly assignment but as it is it works so I'm happy.">

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

// </embarrasment>

  return(block);
}

let theList = document.getElementById('the-list');

function processData(data){  //receives the "customers" object

  let people = data.results;

  people.forEach( function(person){  //goes through each person object and pipes it to the createBio function
    theList.innerHTML += createBio(person);
  });

}

processData(customers); //runs the program on our data file
