const calculate = (num1,num2,selectedOp)=>{
    switch(selectedOp){
      case '+':
        return num1+num2;
      case '-':
        return num1-num2;
      case '*':
          return num1*num2;
      case '/':
          return num1/num2;
      default:
        throw new Error("Invalid operator");
        return;
    }
    }
module.exports= calculate;