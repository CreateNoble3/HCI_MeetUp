function changeInfo() { 
    let email, password, firstN, lastN, birthDate, address, interests

    email = document.getElementById('EA').value
    password = document.getElementById('Pass').value
    firstN = document.getElementById('FN').value
    lastN = document.getElementById('LN').value
    birthDate = document.getElementById('BD').value
    address = document.getElementById('Ad').value
    interests = document.getElementById('Ints').value

    document.getElementById('ea').innerHTML = email
    document.getElementById('pass').innerHTML = password
    document.getElementById('fn').innerHTML = firstN
    document.getElementById('ln').innerHTML = lastN
    document.getElementById('bd').innerHTML = birthDate
    document.getElementById('ad').innerHTML = address
    document.getElementById('ints').innerHTML = interests
}

