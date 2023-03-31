//UC1 - Email has to start with characters and have atleast 3 characters

const emailRegex = RegExp("^[a-zA-Z][._@a-zA-Z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}

try{
    validateEmail("rahul@ggg.com");   //valid
    validateEmail(".rahul@kkk.com");  //invalid - email has to start with a letter
}catch(e){
    console.error(e);
}
