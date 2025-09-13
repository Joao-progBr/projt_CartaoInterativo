document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form')
    const inputCardName = document.getElementById('name')
    const inputNumberCard = document.getElementById('number')
    const monthExp = document.getElementById('month')
    const yearExp = document.getElementById('year')
    const cvc = document.getElementById('cvc')
    // const btn = document.getElementById('btn')
    const btnContinue = document.getElementById('btn__continue')

    const msgSuccess = document.getElementById('card__success')


    // estilos validativos
    const errorNumberCard = document.getElementById('error-number')
    const errorDateCard = document.getElementById('error-date')
    const errorCvcCard = document.getElementById('error-cvc')
    


    // resultado cartão final
    const resultCardNumber = document.getElementById('resultCardNumber')
    const resultCardName = document.getElementById('resultCardName')
    const resultCardDate = document.getElementById('resultCardDate')
    const resultCardCvc = document.getElementById('resultCardCvc')



    // btn
    // btn.disabled = true
    // btn.classList.add('card__button--disabled')
    

    form.addEventListener('input', checkedForm)


    form.addEventListener('submit', function(e){
        e.preventDefault()
        
       const validNumber = cardNumber(inputNumberCard.value)
        const validName   = cardName(inputCardName.value)
        const validDate   = cardDate(monthExp.value, yearExp.value)
        const validCvc    = cardCvc(cvc.value)
        
        if (validNumber && validName && validDate && validCvc) {
            showSuccessMessage(); 
        }
    })

    btnContinue.addEventListener('click', function(){
        showForm(); 
        errorNumberCard.style.display = "none"
        errorDateCard.style.display = "none"
        errorCvcCard.style.display = "none"
    });

    function showSuccessMessage() {
        msgSuccess.style.display = 'block'
        form.style.display = 'none'      
    }

   function showForm() {
        msgSuccess.style.display = 'none'
        form.style.display = 'block'
        form.reset()    
        checkedForm()                 
        // reseta os resultados do cartão
        resultCardNumber.textContent = '0000 0000 0000 0000'
        resultCardName.textContent = 'Jane Appleseed'
        resultCardDate.textContent = '00/00'
        resultCardCvc.textContent = '000'
    }
    

    
    function cardNumber(cardNumber){
        
        const value = cardNumber.trim();
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

       // se for vazio OU não for só dígitos
        if (formattedValue === '' || !/^\d+$/.test(value)) {
           errorNumberCard.style.display = 'block'
            resultCardNumber.textContent = '0000 0000 0000 0000'
            return false
        } else {
           errorNumberCard.style.display = 'none'
           resultCardNumber.textContent = formattedValue
           return true
       }
    }



    // nome
    function cardName(name){
        if(name){
            resultCardName.textContent = name
            return true
        }
        else return resultCardName.textContent = 'Jane Appleseed'
    }



    // date
    function cardDate(date, year){

        if (date === '' || !/^\d+$/.test(date) || year === '' || !/^\d+$/.test(year) ) {
            errorDateCard.style.display = 'block'
            resultCardDate.textContent = '00/00'
            return false
        } else {
           errorDateCard.style.display = 'none';
           resultCardDate.textContent = `${date}/${year}`
           return true
       }
    }



    // cvc
    function cardCvc(cvc){
        if (cvc === '' || !/^\d+$/.test(cvc)) {
            errorCvcCard.style.display = 'block'
            resultCardCvc.textContent = '000'
            return false
        } else {
           errorCvcCard.style.display = 'none'
           resultCardCvc.textContent = cvc
           return true
       }
    }



    // 
    function checkedForm(){
        const isValidNumber = cardNumber(inputNumberCard.value)
        const isValidName = cardName(inputCardName.value)
        const isValidCardDate = cardDate(monthExp.value, yearExp.value)
        const isValidCvc = cardCvc(cvc.value)

       const isFormValid = isValidNumber && isValidName && isValidCardDate && isValidCvc

        btn.disabled = !isFormValid
    }
})
