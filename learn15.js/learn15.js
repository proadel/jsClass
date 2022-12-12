// learn15.js | tryCatchError.js
    //-------------------------------------------------------
    /* 
     // TShoot | web-pages , to catch errors in coding 
      Throw, and Try...Catch...Finally
     - The try statement defines a code block to run (to try).
     - The catch statement defines a code block to handle any 
       error.
     - The finally statement defines a code block to run 
       regardless of the result.
     - The throw statement defines a custom error.
     ----------------------------------------------
     // Errors Will Happen!
        # When executing JavaScript code, different 
        errors can occur.
        # Errors can be coding errors made by the 
        programmer, errors due to wrong input, 
        and other unforeseeable things. see below..
        */
    //===E=X=A=M=P=L=E=1====================---------------------------
    var name = 'javascript';
    try{
     //document.write(name);
     document.write(name1); // no var named name1. is it?
    }catch(error){
     document.write(error); // ?
    }
 //===E=X=A=M=P=L=E=2====================---------------------------
    try {
      alert("DEMO: Welcome: Please prepare your DOC. and Input ID!");
      //adddlert("Welcome: Please Input ID!"); // alert = True
     }
     catch(err) { // see this coding ..............................
         document.getElementById("demo").innerHTML = err.message;
     }
     //============================================================?