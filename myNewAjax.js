const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
const main = document.getElementById("main");
var btn = document.getElementById("ghibli");
btn.addEventListener("click", function() {
    fetchPromise.then(response => {
        return response.json();
    }).then(people => {
        main.innerHTML = listOfNames(people);
    });
    btn.classList.add('hide-me');
});

function listOfNames(people) {
    const names = people.map(person => `<li>${person.name}</li>`).join("\n");
    return `<ul>${names}</ul>`;
};
