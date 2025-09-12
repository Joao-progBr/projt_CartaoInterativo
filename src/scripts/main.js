document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form')
    const inputCardName = document.getElementById('name')
    const inputNumberCard = document.getElementById('number')
    const monthExp = document.getElementById('month')
    const yearExp = document.getElementById('year')
    const cvc = document.getElementById('cvc')



    // estilos validativos
    const errorNumberCard = document.getElementById('error-number')
    const errorDateCard = document.getElementById('error-date')
    const errorCvcCard = document.getElementById('error-cvc')
    


    // resultado cartão final
    const resultCardNumber = document.getElementById('resultCardNumber')
    const resultCardName = document.getElementById('resultCardName')
    const resultCardDate = document.getElementById('resultCardDate')
    const resultCardCvc = document.getElementById('resultCardCvc')

    form.addEventListener('submit', function(e){
        e.preventDefault()
        
        cardNumber(inputNumberCard.value)
        cardName(inputCardName.value)
        cardDate(monthExp.value, yearExp.value)
        cardCvc(cvc.value)

    })
    
    
    function cardNumber(cardNumber){
        
        const value = cardNumber.trim();
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

       // se for vazio OU não for só dígitos
       if (formattedValue === '' || !/^\d+$/.test(value)) {
           errorNumberCard.style.display = 'block';
            resultCardNumber.textContent = '0000 0000 0000 0000';
       } else {
           errorNumberCard.style.display = 'none';
           resultCardNumber.textContent = formattedValue
       }
    }

    // nome
    function cardName(name){
        resultCardName.textContent = name
    }


    // date
    function cardDate(date, year){

       if (date === '' || !/^\d+$/.test(date) || year === '' || !/^\d+$/.test(year) ) {
            errorDateCard.style.display = 'block';
            resultCardDate.textContent = '00/00';

       } else {
           errorDateCard.style.display = 'none';
           resultCardDate.textContent = `${date}/${year}`
       }
    }


    // cvc
    function cardCvc(cvc){
         if (cvc === '' || !/^\d+$/.test(cvc)) {
            errorCvcCard.style.display = 'block';
            resultCardCvc.textContent = '000';

       } else {
           errorCvcCard.style.display = 'none';
           resultCardCvc.textContent = cvc
       }
    }

})
