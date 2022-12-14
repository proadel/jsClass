// learn26.js | JS (2) HTML events
        //----------------------------------------------
        // onload - print - reload - copy - focus - blur
        //----------------------------------------------
        //-------------------------------------------------
        //onload
        onload=()=>{
            alert('Welcome To our Site');
        }
        //
        //-------------------------------------------------
        //copy
        function cop(){
            alert('the text is copied');
        }
        //<a href="javascript:window.print()">print</a>
        //<body oncopy="cop();">
        //------------------------------------------------
        //reload
        //<a href="javascript:window.reload()">reload</a>
        //------------------------------------------------
        //focus - blur
           var fForm = document.getElementById('frm1');
           var finput = document.getElementById('inp1');
           var ffont = document.getElementById('fnt1');
           finput.onfocus=function(){ // for focus
                ffont.textContent='write hard password';
           }
           finp.onblur=function(){ // for blur
                ffont.textContent=''; 
           }
        //----------------------------------------------