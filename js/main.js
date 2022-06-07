document.querySelector('button').addEventListener('click', loadAdventure)
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      loadAdventure();
    }
  });

async function loadAdventure(){
    const stateName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-wanderlust-api.herokuapp.com/api/${stateName}`)
        const data = await response.json()

        console.log(data.state)
        document.querySelector('.name').innerText = "Name: " + data.name
        document.querySelector('.location').innerText = "Location: " + data.location
        document.querySelector('.description').innerText = "Description " + data.description
        document.querySelector('.website').innerText = "Website: " + data.website
    }catch(error){
        console.log(error)
    }
}