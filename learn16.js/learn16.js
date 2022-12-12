// learn16.js | innerHTML&Text(js)
      //------------------------------------------------
    /* =================================================
      // The innerHTML property sets or returns the HTML 
          content (inner HTML) of an element.
        // & to replace - inject text - ]  
        # Return the innerHTML property:
           element.innerHTML =
        # Set the innerHTML property:
           element.innerHTML = 'your text'; for code and text.
           element.innerText = 'yor text'; for text only.
       -------------------------------------------------------
     */ // E X A M P L E S //---------------------------------
    //========================================================
       // set the text by .innerHTML= 'text';
       // to h1 see body above..
       document.getElementById('h1').innerHTML='h1- lets learn js 2022';
       document.getElementById('h4').innerHTML='<h1>h4 to h1.HTML- lets learn js 2022<h1>';
       //----------------------------------------------------------------------------------
         //document.getElementById('h2').innerHTML=''; // add null;
        //document.getElementById('h2').innerText=' '; // add null;
       //document.getElementById('h2').innerText='h2- changed by ADMIN.innerText';
       document.getElementById('h5').innerText='<h1>h5 to h1.HTML- lets learn js 2022<h1>';
         alert(h4.outerHTML); // to get all history of edit .... etc.
         alert(h4.innerHTML); // to get last history of edit.
         alert(h3.innerText); // display contents.
    //=====================================================================================