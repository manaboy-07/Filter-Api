const filter = document.getElementById('filter-input')
const usersList = document.getElementById('people-list')
const peopleList = []

filter.addEventListener('input', (e) => filterData(e.target.value))
window.setTimeout(getData, 2000)

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=80')
    const {results} = await res.json()
    console.log(results)
    usersList.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        peopleList.push(li)

        li.innerHTML = `<img src=${user.picture.large} alt=${user.name.first} class="people-image">
        <div class="name-location">
            <h2>${user.name.first} ${user.name.last}</h2>
            <h4>${user.location.country}, ${user.location.city}</h4>
            <small>Email: ${user.email}</small>
        </div>`

        usersList.appendChild(li)
    })
   
    
}

function filterData(searchItem){
    peopleList.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}