
function renderLevelOfService(ride) {

  let levelOfService

  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else if (ride[0].purpleRequested == true) {
    levelOfService = 'Noober Purple'
  } else {
    levelOfService = 'Noober X'
  } 

  return levelOfService

}

function renderPassenger(ride) {

  //Identify level of service

  let outputElement = document.querySelector('.rides')

  outputElement.insertAdjacentHTML('beforeend',`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${renderLevelOfService(ride)}</span>
    </h1>`
  )

  //Identify passenger details within each ride
  
function renderBorderColorHTML(ride) {

  let borderColorHTML

  if (ride[0].purpleRequested == true) {
    borderColorHTML = `purple`
  } else {
    borderColorHTML = `gray`
  } 

  return borderColorHTML

}

  for (let s = 0; s < ride.length; s++){
    let service = ride[s]

    let fullName = `${service.passengerDetails.first} ${service.passengerDetails.last}`
    let phoneNumber = `${service.passengerDetails.phoneNumber}`
    let quantity = `${service.numberOfPassengers}`
    let pickupAddress = `${service.pickupLocation.address}`
    let dropoffAddress = `${service.dropoffLocation.address}`
    let pickupCity = `${service.pickupLocation.city}`
    let dropoffCity = `${service.dropoffLocation.city}`
    let pickupState = `${service.pickupLocation.state}`
    let dropoffState = `${service.dropoffLocation.state}`
    let pickupZip = `${service.pickupLocation.zip}`
    let dropoffZip = `${service.dropoffLocation.zip}`
    let pickupCityStateZip = `${pickupCity}, ${pickupState} ${pickupZip}`
    let dropoffCityStateZip = `${dropoffCity}, ${dropoffState} ${dropoffZip}` 

    let outputElement = document.querySelector('.rides')

    outputElement.insertAdjacentHTML('beforeend',`
      <div class="border-4 border-${renderBorderColorHTML(ride)}-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${fullName}</h2>
            <p class="font-bold text-gray-600">${phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-${renderBorderColorHTML(ride)}-600 text-white p-2">
              ${quantity} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAddress}</p>
            <p>${pickupCityStateZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAddress}</p>
            <p>${dropoffCityStateZip}</p>
          </div>
        </div>
      </div>`
    ) 
  }  
}


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < json.length; i++){
    let ride = json[i]
              
      renderPassenger(ride)

    }
  }


window.addEventListener('DOMContentLoaded', pageLoaded)

