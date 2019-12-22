console.log('works')

const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')
const bottonSave = document.querySelector('#button-save')
const bottonclear = document.querySelector('#button-clear')
const list = document.querySelector('#lists')
const TotalAument = document.querySelector('#total')

let total = 0

const createProduct =(name, price)=>{
  const ionCard = document.createElement('ion-card')
  const ionCardheader =  document.createElement('ion-card-header')
  ionCardheader.textContent = name + ' price: ' +  price
  ionCard.appendChild(ionCardheader)
  list.appendChild(ionCard)
}

const clear = ()=>{
     productName.value  =  ""
     productPrice.value = ""
}

const presentAlert = ()=>{
    const alert = document.createElement('ion-alert')
    alert.header ='Invalid data '
    alert.subHeader = 'please verify your inputs',
    alert.message =  'Incorrect name or price'
    alert.buttons = ['Ok']
    document.body.appendChild(alert)
    return alert.present()
}


// validation
const isEmpty = srt => !srt.trim().length;

bottonSave.addEventListener('click', ()=>{
    const name  = productName.value
    const price = productPrice.value
    if(isEmpty(name) || price <= 0){
         presentAlert()
         return ;
    }
      createProduct(name, price)
      total += +price  
      TotalAument.innerHTML = total 
     clear()    
})

bottonclear.addEventListener('click',  clear)