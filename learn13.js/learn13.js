// learn13.js | +stringCases.js 
        //-------------------------------------------
        // to make good UserFrindly pages Experiances
        // +TEXT : print functions and methods:
        //=====================
        //document.write();
        //=====================
        fName = 'javascript';
        lName = 'webDevPro'; 
        fulName = '        Coding2022  '; //*
        //-------------------------------------------------
        // case 1. Letter Case forces to upper/lower ... etc.
        document.write(fName.toUpperCase());
        document.write(lName.toLowerCase());
        document.write(fulName.toLowerCase());
        //-------------------------------------------------
        // case 2. var 'text' + var 'text' = .concat
        document.write(fName.concat(lName));
        document.write(fName.concat(fulName));
        //-------------------------------------------------
        // case 3. missUserInputsErrors
         // =============================
         /* see var fulName there are 
         missUserInputsErrors spaces
           to resolve this issues-like you can
           use this command : trim
           document.write(varName.trim());
        */ // try use this to see the miss-spaces:
            //document.write(fulName); 
       document.write(fulName.trim());
       //==========================================
       //==========================================