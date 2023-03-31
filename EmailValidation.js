//UC2 - Email has to have @ symbol

const emailRegex = RegExp("^(?=.{3,20}@)[a-zA-Z]{2,}[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-_.][a-zA-Z0-9-]+$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}

try{
    validateEmail("rahul@ggg");   //valid
    validateEmail("rahulkkk");  //invalid - email has to have @ symbol
}catch(e){
    console.error(e);
}
