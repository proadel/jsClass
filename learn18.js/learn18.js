// learn18.js | if(cond){code}else.js
        //================================================
        // Math. and Logical Operators : 
        // if --> else , and = && or = ||
        // > < = == === ...etc.
        /* Conditional statements are used to perform different 
           actions based on different conditions.
           Very often when you write code, you want to perform 
           different actions for different decisions.
           You can use conditional statements in your code 
           to do this. In JavaScript we have the following 
           conditional statements:
             - Use if to specify a block of code to be executed, 
             if a specified condition is true
             - Use else to specify a block of code to be executed, 
             if the same condition is false
             - Use else if to specify a new condition to test, if 
             the first condition is false
             - Use switch to specify many alternative blocks of code 
             to be executed
        
        # Comparison and Logical operators are used 
           to test for true or false.
           Comparison operators are used in logical 
           statements to determine equality or difference 
           between variables or values.
           
        */
        //================================================
        // Example1---------------------------------------
        /*
        if (3 < 6){
            document.write('Yes, its True.');
        }
        */
        // Example2--------------------------------
        /*
        if (3 > 6){
            document.write('Yes, its True.');
        }else{
            document.write('No, its False!');
        }
        */
        // Example3--------------------------------
        // 
        /*
        var nameAdmin = 'Adel';
        if (nameAdmin == 'Romel'){
            document.write('Yes, Its admin account.')
        }else{
            document.write('No, Its user account not Admin !!');
        }
        */
        // Example4-----------------------------------------------
        // && used when (all cond == True) if not --> # else
        // || usen when only (one cond = True) in not --> # else 
        // Logical Operators !!!
        /* and = &&
        var num1 = 3;
        var num2 = 9;
        if (num2 != 9 && num1 == 3){
        //if (num2 == 9 && num1 == 3){
            document.write('Yes, Its True');
        }else{
            alert('err: its False');
        }
        */
        // Example5---------------------------------------------
        // or = ||
        /*
        var name = 'user-js';
        var age = 99;
        if (name == 'user-js1' || age ==12 ){
            document.write('its True. learn js 2022');
        }else{
            alert('Flase, no learning registeration.');
        }
        */
        // Example6---------------------------------------------
        //======================================================