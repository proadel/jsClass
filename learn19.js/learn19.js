// learn19.js | objects in JS
        //-------------------------------------------------------------
        //
        // 
        /*
           In JavaScript, objects are king. If you understand objects, 
           you understand JavaScript.

           In JavaScript, almost "everything" is an object.

           - Booleans can be objects (if defined with the new keyword)
           - Numbers can be objects (if defined with the new keyword)
           - Strings can be objects (if defined with the new keyword)
           - Dates are always objects
           - Maths are always objects
           - Regular expressions are always objects
           - Arrays are always objects
           - Functions are always objects
           - Objects are always objects
           - All JavaScript values, except primitives, are objects.
         
        */
        //====Start of example 1=============================================
        /*
       // Example 1:-----------------------------------------------
       // variable`s = {name:'' , age:14 , }
       // variables  = {var1:value , var2:value , ... }
       //            = {key: value , ......., ... , }
       // do not loss to use inspectors of webpage by right click
       // developers tools ::::::::::::::::::::::::::::::::::::::::
          var students = {
                  name: 'student1' ,
                  age: 14 ,
                  address: 'Mars' ,
                  homeTel: '911' ,
                } 
              document.write(students);
              // // print = [object Object] over webpage !!
              // we need info to display .... 
              // if you go to console dev tools------------
              console.log(students);
              alert('reading reading as you can JS ');
              // // print in console :
              // {name: 'student1', age: 14, 
              // address: 'Mars', homeTel: '911'}
              /*
                   address: "Mars"
                   age: 14
                   homeTel: "911"
              */ // but if use for loop like below !!!!!!!!!!!!!!!!
              //    and after creating a new object 
              //   to go for students and get all info from keys
              //   and items to choice of display over webpage ... etc.
              //------------------------------------>------------->
              /*
              for (stud in students  ){ // creat new object | var
                    document.write(students[stud]);
                    // print = student114Mars911 // reback above
                    // reading reading as you can to understanding...
                    console.log(students[stud]);
                    //------------------------------.................
                    //*/
        //====End of Example 1 ============================================== 
        //-------------------------------------------------------------------           
        //===================================================================
        //====Start Example 2  ==============================================           
            // example 2 :
            // 
            //-------------------------------------
            // emp1 = employee number1, ...........
            var company = {
                emp1:{
                    name: 'Dode',
                    age: 43 ,
                    address: 'X8D00r',
                    },
                emp2:{
                    name: 'Mode',
                    age: 43,
                    address: 'Earth',
                    },
                emp3:{
                    name: 'Soso',
                    age: 43 ,
                    address: 'Mars',
                     }
            }
            alert ("this example 2 - oop learn js 2022");
            for (var emp in company){
                document.write(company[emp]);
                //print [object].....
                console.log(company[emp]);
                //print info ........

            }
        //=====End of example 2====================================================