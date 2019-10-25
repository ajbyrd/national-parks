
parksDiv = document.getElementById("container")

const parkUrl = "http://localhost:8088/parks"

const parseJSON = response => response.json()

function putParksOnDOM(parks) {
    parks.forEach(function (park) {

    if(park.visited === true) {
        parksDiv.innerHTML += `
        <article id="visited">
             <h3>${park.name}</h3>
             <p>${park.state}</p>
        </article>
         `
    }
else {
    parksDiv.innerHTML += `
    <article id="notVisited">
         <h3>${park.name}</h3>
         <p>${park.state}</p>
    </article>
     `
    }

    })
}




const fetchParkData = () => {
    fetch(parkUrl)
    .then(parseJSON)
    .then(putParksOnDOM)
        
}
        
        


