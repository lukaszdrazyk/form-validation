document.addEventListener('DOMContentLoaded', function(){

var myForm = document.querySelector('form');
    myForm.addEventListener('submit', function(event){
    event.preventDefault();
   
    var formElements = this.elements,
        elmAmount = formElements.length,
        i,
        elementsRequired = [];
        
        for(i=0; i<elmAmount; i++){
            if(formElements[i].dataset.required) {
                elementsRequired.push(formElements[i])
            }  
        }
    var result = validation(elementsRequired);
        
    if(result){
        this.submit()
    }
    
})

function validation(requiredList){
    var i,
        elmAlmount = requiredList.length,
        result=true,
        password = null;
    
    for(i=0; i<elmAlmount; i++){
        var myValue = requiredList[i].value;
        if (myValue ==""){
            result = false;
        }
        if(requiredList[i].type == 'checkbox' && !requiredList[i].checked){
            result = false;
            console.log('nie zgdoziles sie na warunki')
        }
        switch(requiredList[i].dataset.validation){
            case 'email':
                if(myValue.indexOf("@") == -1){
                    result = false;
                    console.log('nie ma @')
                }
            break;
            case 'text':
                 if(myValue.length <= 5){
                     result = false;
                     console.log ('za krótkie');
                 }
            break;
            case 'password':
                if(password && myValue != password) {
                    result = false;
                    console.log('haslo ' + myValue + ' rozni sie od ' + password);
                }
                password = myValue;
            break;
            default:
    
        }
    }
    return result;
}
    
    

})