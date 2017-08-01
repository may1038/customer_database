

for (let i = 0; i < customers.results.length; i++) {

  let customer = customers.results[i]

  let div = document.createElement("div")

  let img = document.createElement("img")
  img.src = customer.picture.medium

  let firstLast = document.createElement("label")
  firstLast.innerHTML = `${customer.name.first} ${customer.name.last}`
  firstLast.className = "name"

  let email = document.createElement("label")
  email.innerHTML = customer.email
  email.className = "email"

  let address = document.createElement("label")
  address.innerHTML = `${customer.location.street}`
  address.className = "address"

  let cityState = document.createElement("label")
  cityState.innerHTML = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
  cityState.className = "cityState"

  let phoneNumber = document.createElement("label")
  phoneNumber.innerHTML = `${customer.phone}`
  phoneNumber.className = "phone"

  let ssn = document.createElement("label")
  ssn.innerHTML = customer.id.value
  ssn.className = "social"

  div.appendChild(img)
  div.appendChild(firstLast)
  div.appendChild(email)
  div.appendChild(address)
  div.appendChild(cityState)
  div.appendChild(phoneNumber)
  div.appendChild(ssn)
  document.body.appendChild(div)
}
