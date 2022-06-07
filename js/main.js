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

        console.log(data)
        document.querySelector('.name').innerText = data.name
        document.querySelector('.location').innerText = data.location
        document.querySelector('.description').innerText = data.description
        document.querySelector('.website').innerText = data.website
    }catch(error){
        console.log(error)
    }
}