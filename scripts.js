
let fromCityDisplay = document.getElementById("fromCity");
let toCityDisplay = document.getElementById("toCity");
let returnCityDisplay = document.getElementById("returnCity");
let departDateDisplay = document.getElementById("departDate");
let returnDateDisplay = document.getElementById("returnDate");


//Passengers//

let passengerDropBox = document.getElementById('passengersBox');

var values = ["1","2","3","4","5","6","7","8","9","10"];

for(var passengers = 0 ; passengers < values.length; passengers++) {
  var passengerOption = document.createElement("option");
  passengerOption.textContent = values[passengers];
  passengerOption.value = values[passengers];
  passengerDropBox.appendChild(passengerOption);
}

// Modes of Travel Button

let oneWayButton = document.querySelector('.triplinkOneWay');
let twoWayButton = document.querySelector('.triplinkTwoWay');

let returnDateBox = document.querySelector('#returnDateBox');

let returnCityText = document.querySelector('#returnCity');

let returnText = document.querySelector('#returnText')


function oneWayTravel() {
  returnDateBox.style.display = 'none';
  returnCityText.style.display = 'none'
  returnText.style.display = 'none'

  oneWayButton.style.backgroundColor = '#7C83FD';
  oneWayButton.style.color = 'white';

  twoWayButton.style.backgroundColor = 'white';
  twoWayButton.style.color = 'black';

}

function twoWayTravel() {
  returnDateBox.style.display = 'block';
  returnCityText.style.display = 'block'
  returnText.style.display = 'inline-block'
  twoWayButton.style.backgroundColor = '#7C83FD';
  twoWayButton.style.color = 'white';

  oneWayButton.style.backgroundColor = 'white'
  oneWayButton.style.color = 'black'
}



//Price Slider//

let price = document.getElementById('price');
let rangeSliderInput = document.querySelector('#rangeSlider');

let priceValue = 0;


function priceSlider(priceGot) {
  price.innerText = priceGot;
  // priceValue = priceGot
  return priceGot
}


//Price Range Selector

// function priceRangeChecker(price, priceRangefromUser) {
//   if(price > 0 && price <= priceRangefromUser) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Display Search

// function resultBox(boingPrice) {
//   let searchModel = document.createElement('div');
//   searchModel.className = 'model';
//   searchModel.style.display = 'block';
//   let resultsContainer = document.querySelector('#searchResult');
//   resultsContainer.appendChild(searchModel);

//   boingPriceDetails(boingPrice);
// }

// function boingPriceDetails(price) {

//   let priceDetailsContainer = document.createElement('div');
//   priceDetailsContainer.className = 'priceDetails';


//   let priceTag = document.createElement('h2');
//   priceTag.textContent = price;
//   document.querySelector('.priceDetails').appendChild(priceTag);
// }

//Quotes Remover

function quoteRemover(value) {
  return JSON.parse(value);
}

function resultBox(ticketPrice) {

  //Empty Text
  let emptyTextDiv = document.querySelector('.emptyText');
  emptyTextDiv.style.display = 'none';

  //Result Divs
  let searchModel = document.createElement('div');
  let priceDetailsContainer = document.createElement('div');
  let priceTag = document.createElement('h2');

  let boingDetailContainer = document.createElement('div');
  let fromDetailContainer = document.createElement('div');
  fromDetailContainer.className = 'fromDetails';
  let toDetailContainer = document.createElement('div');
  toDetailContainer.className = 'toDetails';

  //From Details
  let fromAiNumber = document.createElement('p');
  let fromPlaceShortCode = document.createElement('h3');
  let fromDepartTime = document.createElement('h4');
  let fromArriveTime = document.createElement('h4');

  //To Details
  let toAiNumber = document.createElement('p');
  let toPlaceShortCode = document.createElement('h3');
  let toDepartTime = document.createElement('h4');
  let toArriveTime = document.createElement('h4');

  //Booking Button
  let bookingDiv = document.createElement('div');
  bookingDiv.className = 'bookingDetails';

  let bookingButton = document.createElement('button');
  bookingButton.className = 'booking';
  bookingButton.innerText = "Book this Flight"
  bookingButton.setAttribute('onclick','showModel()')


  //Main Div
  let mainResultContainer = document.querySelector('#searchResult');
  searchModel.className = 'model';
  searchModel.style.display = 'block';
  mainResultContainer.appendChild(searchModel);

  //Details Div
  priceDetailsContainer.className = 'priceDetails';
  searchModel.appendChild(priceDetailsContainer);


  //Price Div
  priceTag.className = 'priceTag';
  priceTag.textContent = quoteRemover(JSON.stringify(ticketPrice.price));
  priceDetailsContainer.appendChild(priceTag);

  searchModel.appendChild(boingDetailContainer);

  //From Details

  boingDetailContainer.appendChild(fromDetailContainer);
  
  fromDetailContainer.appendChild(fromAiNumber);
  fromAiNumber.textContent = quoteRemover(JSON.stringify(ticketPrice.fromNum));

  fromDetailContainer.appendChild(fromPlaceShortCode);
  fromPlaceShortCode.textContent = quoteRemover(JSON.stringify(ticketPrice.fromShort)); 

  fromDetailContainer.appendChild(fromDepartTime);
  fromDepartTime.textContent = quoteRemover(JSON.stringify(ticketPrice.departFrom));

  fromDetailContainer.appendChild(fromArriveTime);
  fromArriveTime.textContent = quoteRemover(JSON.stringify(ticketPrice.arriveFrom));



  //To Details

  boingDetailContainer.appendChild(toDetailContainer);

  toDetailContainer.appendChild(toAiNumber);
  toAiNumber.textContent = quoteRemover(JSON.stringify(ticketPrice.fromNum));

  toDetailContainer.appendChild(toPlaceShortCode);
  toPlaceShortCode.textContent = quoteRemover(JSON.stringify(ticketPrice.toShort));

  toDetailContainer.appendChild(toDepartTime);
  toDepartTime.textContent = quoteRemover(JSON.stringify(ticketPrice.departFrom));

  toDetailContainer.appendChild(toArriveTime);
  toArriveTime.textContent = quoteRemover(JSON.stringify(ticketPrice.arriveFrom));
  

  //Booking Details

  boingDetailContainer.appendChild(bookingDiv);
  bookingDiv.appendChild(bookingButton);

}


//Validation

function validatation(originCity, destinationCity, departureDate, passengers) {
  if(originCity == "" || null || destinationCity == "" || null ||
     departureDate == null || passengers == "Passengers" || passengers < 1) {
      return false;
  } else {
    return true
  }

}

//Flight Search


const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', (e) => {
  e.preventDefault()

  let flightJson = new Request("./flights.json");

  let originCity = document.getElementById('originCity').value;
  let destinationCity = document.getElementById('destinationCity').value;

  let departureDate = document.querySelector('#departureDateBox').value;
  let returnDate = document.querySelector('#returnDateBox').value;

  let passengers = document.querySelector('#passengersBox').value;

  console.log(departureDate)
  console.log(returnDate)


  if(validatation(originCity, destinationCity, departureDate, passengers)) {
    fetch(flightJson)
      .then(res => res.json())
      .then(data => {
        let boingsLen = data.boings.length;
        for(var i = 0; i < boingsLen; i++) {
          if(data.boings[i].fromPlace == originCity 
            && data.boings[i].toPlace == destinationCity) {
              if(data.boings[i].departDate == departureDate ) {
                // console.log(data.boings[i]);
                fromCityDisplay.innerHTML = data.boings[i].fromPlace;
                toCityDisplay.innerHTML = data.boings[i].toPlace;
                returnCityDisplay.innerHTML = data.boings[i].fromPlace;
                departDateDisplay.innerHTML = departureDate;
                returnDateDisplay.innerHTML = returnDate;
                resultBox(data.boings[i]);
              }
          }
        }
      });
  } else {
    alert('All the Fields are Required.')
  }

})


//Model Controls

function showModel() {
  document.querySelector('.popUpModel').classList.add('showModel')
}

function closeModel() {
  document.querySelector('.popUpModel').classList.remove('showModel')
}




