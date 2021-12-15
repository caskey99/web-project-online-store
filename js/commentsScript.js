const url = 'https://jsonplaceholder.typicode.com/comments'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function addComment(name, body){
    let div = document.createElement('div')
    div.className = "fetch-comment"
    div.innerHTML = name + " : " + body + "<br>" + "<br>" 
    document.querySelector('form').append(div)
}

fetch(url)
    .then(response => response.json())
    .then(data =>  {
        let counter = 7
        let border =  getRandomInt(250)
        for (let item of data) {
            if(item['id'] < border){
                continue
            }
            else{
                addComment(item['name'],  item['body'])
                counter--
                if(counter <= 0){
                    break   
                }
            }
        }
    })
    .catch(err => {
        console.log(err)
    })






