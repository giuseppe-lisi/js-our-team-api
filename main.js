axios.get('https://boolean-teachers.github.io/mock/api/members/')
    .then(response => drawCards(response.data))
    
    .catch(error => console.log(error));

function drawCards(members){
    const cardContainer = document.getElementById('cardContainer');

    for (const member of members) {
        cardContainer.innerHTML += `
            <div class="col-3 py-3 my-5 border rounded-2 shadow">
                <img src="${member.img}" class="rounded-2 w-100">
                <div class="lead bold fw-bold">${member.name}</div>
                <div>${member.role}</div>
                <div>${member.email}</div>
            </div>
        `
    }
}