 
    
    var a = 5;
    a = "Sarah";
    console.log(a);

    var b = 3;
    var c = 8;
    var result = a + " " + b;
    console.log(result + c);

    var a = "Sarah";
    var b = "Javascript";
    console.log(a + b);



    function somme(a, b) {
      var c = a + b;
      console.log(c);
      
    }
    somme(86, 29);
    somme (04, 96);




  
    function somme(a, b) {
        if (typeof a == "number" && typeof b == "number"){
            var c = a + b;
      console.log(c);
        }
        else{
            console.log("a and b must be a number!")
        }
    }
    somme(5,6);

  function addTwoNumbers(n1,n2,n3){
        if(typeof n1 == "number" && typeof n2 == "number" && typeof n3 == "number"){
        if(typeof n1 == "number"){
            if(typeof n2 == "number"){
                if(typeof n3 == "number"){
                    var sum = n1 + n2 + n3;
                    console.log(sum);
                }
                else{
                    console.log("n3 must be a number")
                }
        }
        else{
            console.log("n2 must be a number")
        }
    }
        else{
            console.log("n1 must be a number")
        }
    }

else{
    console.log("No number is entred!")
}
}
    
    addTwoNumbers(9,5,"h")

    /* string*/

    function generateFullName(firstName, lastName){
        if(typeof firstName == "string"){
            if(typeof lastName =="string"){
                 var fullName = firstName +" "+ lastName;
                 console.log(fullName);
            }
            else{ console.log("Enter your lastname again!") }
        }
        else{ console.log("Enter your firstname again!")}
    }

    generateFullName("Sarah", "AROUS")


    /* Name */

    function generateFullName2(stName, lstName){
        if(typeof stName == "string" && typeof lstName == "string"){

        var fulName = stName + " " + lstName;
        console.log(fulName)
    }else{
console.log("Where is Your firstname and lastname?!")
    }
    }
    generateFullName2("Sar","Sari")


    /* boole */
    
    for (var i=0 ; i<5 ; i++){
      console.log(i);
  }



