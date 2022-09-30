function validateForm(){
    let x= document.forms['myform']
    ['username'].value;
    if (x==""){
        document.getElementById('errordiv1').innerHTML='Username cannot be empty !';
        document.getElementById('errordiv1').style.color='red';
        document.getElementById('username').style.border='2px solid red';
    return false;
    }
}
function validateForm2(){
    let y= document.forms['myform']
    ['email'].value;
    if (y==""){
        document.getElementById('errordiv2').innerHTML='We need your Email to serve you better !';
        document.getElementById('errordiv2').style.color='red';
        document.getElementById('email').style.border='2px solid red';
    return false;
    }
}
function validateForm3(){
     let z=document.forms['myform']
     ['password'].value;
     if(z.trim()===""){
        document.getElementById('errordiv3').innerHTML='A password is required!';
        document.getElementById('errordiv3').style.color='red';
        document.getElementById('password').style.border='2px solid red';
        return false;
     }
}
/**to add images using DOM(ERROR ICON):
 * const image=document.createElement('img');
 * image.src='/picture.png';
 * document.getElementById('blabla').appendChild(image);
 */

