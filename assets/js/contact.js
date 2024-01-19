function submitData(e) {
  event.preventDefault()

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const subject = document.getElementById("subject").value;
  const yourMessage = document.getElementById("yourMessage").value;

  if (name == "") {
    return alert("nama harus diisi")
  } else if (email == "") {
    return alert("email harus diisi")
  } else if (phoneNumber == "") {
    return alert("phone number harus diisi")
  } else if (subject == "") {
    return alert("subjek harus diisi")
  } else if (yourMessage == "") {
    return alert("message harus diisi")
  }

  console.log(name)
  console.log(email)
  console.log(phoneNumber)
  console.log(subject)
  console.log(yourMessage)

  let a = document.createElement('a')

  // a.href= `mailto:${encodeURIComponent(email)}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(Message),"nama saya"= (name), "kontak saya di"(phoneNumber)};`

  a.click()
}
