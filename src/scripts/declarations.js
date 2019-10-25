
parksDiv = document.getElementById("container")

const parkUrl = "http://localhost:8088/parks"

const parseJSON = response => response.json()

function putParksOnDOM(parks) {
    parks.forEach(function (park) {
        parksDiv.innerHTML += `
        <article>
             <h3>${park.name}</h3>
             <p>${park.state}</p>
        </article>
         `
    })
}




const fetchParkData = () => {
    fetch(parkUrl)
    .then(parseJSON)
    .then(putParksOnDOM)
        
}
        
        


