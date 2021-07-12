const names = ["Lisa", "Kaitlin", "Jan"]

const typeOfGift = `surprise`
function writeCards(names) {
    let messages = [];
    for(let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`);
        
    } 
    return messages
}

function countDown(i) { 
    
    while(i >=0) {
      console.log(i)  
    i--;
    }
    return i
}
countDown(4)
