let input = prompt("what do you like to do ?")
const todos = ['Collect chicken eggs', 'GUITAR']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******')
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
    }
    input = prompt("what do you like to do?")
}
console.log("OK QUIT THE APP")