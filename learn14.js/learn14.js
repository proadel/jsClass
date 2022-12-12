// learn14.js | eval() Magic-method
      //-----------------------------------------
      // mathematical case
      //x = eval(1+800-234/9.8**3);
      //document.write(x);
      //--------------------------
      info = eval(" note = ('lets learn js!') ; alert(note)");
      // The eval() method evaluates or executes an argument.
         /*
         If the argument is an expression, eval() evaluates 
         the expression. If the argument is one or more 
         JavaScript statements, eval() executes the statements.
         -------------------------
         Do NOT use eval()
         Executing JavaScript from a string is an BIG security risk.
         With eval(), malicious code can run inside your application 
         without permission. With eval(), third-party code can see 
         the scope of your application, which can lead to possible attacks.
          */
         //================================================================
         //================================================================