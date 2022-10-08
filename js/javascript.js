function validate(){
    if(!document.getElementById("height").value == null || !document.getElementById("weight").value == null){
        imc();    
    } else{
        imc();   
     }
}
function imc(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = (weight/((height * height)/10000)).toFixed(2);
    if(result <= 18.4){
        document.getElementById("resultField").style.color="#b30000";
        document.getElementById("resultField").value="Malnutrition";    
    }else if(result >= 18.5 && result <= 24.9){
        document.getElementById("resultField").style.color="gray";
        document.getElementById("resultField").value="Normal";
    }else if(result >= 25 && result <= 29.9){
        document.getElementById("resultField").style.color="#c0ce00";
        document.getElementById("resultField").value="Overweight";
    }else if(result >= 30 && result <= 39.9){
        document.getElementById("resultField").style.color="#ff0000";
        document.getElementById("resultField").value="Obesity";    
    }else if(result >= 40 ){
        document.getElementById("resultField").style.color="#b30000";
        document.getElementById("resultField").value="Severe Obesity";
    }
}
