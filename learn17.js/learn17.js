// learn17.js | indexArray.js [items]
        //--------------------------------------------------
        // variables = ['','','','',''];
        // creat [list] array
        // array_name = [item1, item2, ...];
        // An array is a special variable, which can 
        // hold more than one value.
        // For our Clinical Vital Signs in Hospitals-ICU
        // HR: Heart Rate | RR: Respirator Rate
        // BP: Blood Pressur | BT: Body Temperature
        // CL: Conscious Level | PL: Pain Level
        // BE: Body Exposure 
        var vitSigns = ['HR','RR','BP','BT','CL','PL','BE'];
        //  vitSigns - [ '0', '1', '2', '3', '4', '5',];
        document.write(vitSigns); // print over page
        //document.write(vitSigns[0]); //
        for (i in vitSigns){   // create new i var to get 
          // index items, print over console.
          console.log(vitSigns[i]);
        }
        /* Why Use Arrays?
          If you have a list of items (a list of car names, 
          for example), storing the cars in single variables
          could look like this:

            var car1 = "Saab";
            var car2 = "Volvo";
            var car3 = "BMW";
            However, what if you want to loop through the cars
            and find a specific one? And what if you had not 3 
            cars, but 300?
            # The solution is an array!
              An array can hold many values under a single name, 
              and you can access the values by referring to an 
              index number.

        */
       //=========================================================