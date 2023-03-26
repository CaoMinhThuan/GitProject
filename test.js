function check() {
    let age = +document.getElementById('number').value
    if (0 <= age <= 120) {
        document.write('This is the age of a person')
    } else document.write('This is not a person age')

}