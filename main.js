

for (let i = 0; i < customers.results.length; i++) {

  let customer = customers.results[i]

  let div = document.createElement("div")

  let img = document.createElement("img")
  img.src = customer.picture.medium

  let first = document.createElement("label")
  first.innerHTML = `${customer.name.first} ${customer.name.last}`

  let email = document.createElement("label")
  email.innerHTML = customer.email

  let customerInfo = document.createElement("label")
  customerInfo.innerHTML = `${customer.location.street} ${customer.location.city} ${customer.location.state} ${customer.location.postcode} ${customer.phone}`

  let ssn = document.createElement("label")
  ssn.innerHTML = customer.id.value

  div.appendChild(img)
  div.appendChild(first)
  div.appendChild(email)
  div.appendChild(customerInfo)
  div.appendChild(ssn)
  document.body.appendChild(div)
}


const page = `
<head>INTERNAL COMPANY DIRECTORY</head>
`;

let header = document.createElement("header")
header.innerHTML = page
