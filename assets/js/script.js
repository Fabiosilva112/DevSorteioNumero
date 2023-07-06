function raffleNumber(){
    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)
    const paragraph = document.querySelector('.result')
    const numberMax = document.querySelector('.first-number')
    const numberMin = document.querySelector('.secund-number')
    const numberResult = document.querySelector('.drawn')
    const button = document.querySelector('.raflle')
    const result =  Math.floor(Math.random() * (max - min + 1)) + min;
    
    paragraph.style.display = "block"
    numberMax.innerHTML = min
    numberMin.innerHTML = max
    numberMax.style.color = "red"
    numberMin.style.color = "red"
    numberResult.style.color = "green"
    numberResult.innerHTML = result 

}