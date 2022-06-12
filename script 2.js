var temp = '';
var temp2 = '';

function calculate(type, value){
 
    if (type === 'action') {

        if (value=='c') {
            document.getElementById("result").value = '';
            temp = ''; 
            temp2 = '';
            resulted = '';           
        }
        if (value=='=') {
            temp2=temp+document.getElementById("result").value;
            var resulted = eval(temp2);
            document.getElementById("result").value = resulted;
            
        }
        if (value == '.') {
            document.getElementById("result").value += value;
            
        }
        if( value == '/' || value == '*' || value == '-' || value == '+'){
            temp = document.getElementById("result").value + value;
            document.getElementById("result").value = '';

        }
        
    } else if(type === 'value') {
        
        document.getElementById("result").value += value;

    }
    console.log(temp)
}