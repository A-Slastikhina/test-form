export const validateFunction = ()=>{
   let passwordInput = document.querySelector('#password');
   let textInput = document.querySelector('#textInput');
   let inputInforming = document.querySelectorAll('.input-informing');
   let validationInfo = {
    password:false,
    message: false
   }

   const passwordValidationFunc = function(){
    if(passwordInput.value.length < 4 || passwordInput.value.length > 12 ){
        passwordInput.classList.add('input-error');
        inputInforming[0].classList.add('input-informing--error');
       }
       else {
        passwordInput.classList.remove('input-error');
        inputInforming[0].classList.remove('input-informing--error');
        validationInfo.password = true;
       }
   }
   const textInputValidationFinc= function(){
    if(textInput.value.length < 10){
        textInput.classList.add('input-error');
        inputInforming[1].classList.add('input-informing--error')
    } else {
        textInput.classList.remove('input-error');
        inputInforming[1].classList.remove('input-informing--error');
        validationInfo.message = true;
    }
   }
  passwordInput.addEventListener('input', passwordValidationFunc)

  textInput.addEventListener('input', textInputValidationFinc)
  const form = document.querySelector('form');

  form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
   if( validationInfo.message === true &&  validationInfo.password === true){
    const myFormData = new FormData(evt.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    alert(JSON.stringify(formDataObj));
   } else{
    if( validationInfo.password === false){
        passwordValidationFunc()
       } else {
        if(validationInfo.message===false){
            textInputValidationFinc()
        } 
       }
   } 
  })
}
