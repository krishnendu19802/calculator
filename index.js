(function(){
    let darea=document.querySelector('#displayarea');
    let buttons=document.querySelectorAll('.btnc');
    let equals=document.querySelector('#equals');
    let clear=document.querySelector('#clear');
    let dell=document.querySelector('#dellast');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let val=e.target.dataset.num;
            darea.value+=val;
        })
    });
    equals.addEventListener('click',function(e){
        if(darea.value===""){
            darea.value="";
        }
        else
        {
            let val=Number(eval(darea.value));
            if(Math.floor(val)-Number(eval(darea.value))!=0)
            darea.value=val.toPrecision(6);
            else
            darea.value=val;
            // screen.value=ans;
        }

    });
    clear.addEventListener('click',function(e){
        darea.value="";
    })
    dell.addEventListener('click',function(e){
        let text=darea.value;
        darea.value=text.substring(0,text.length-1);
    })

})();