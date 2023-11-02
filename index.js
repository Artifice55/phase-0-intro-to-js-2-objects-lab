// Write your solution in this file!
const employee = {name: "Sam",streetAdress: "11 broadway"}
   
    function updateEmployeeWithKeyAndValue(obj, key, value) {
   
    const newObj = {...obj};
   
    newObj[key] = value;
   
    return newObj;
   
    }
   
    function destructivelyUpdateEmployeeWithKeyAndValue(Obj, key, value) {
       
        Obj[key] = value;
   
    return Obj;
   
    }
   
    function deleteFromEmployeeByKey (obj, key) {
   
    const newObj = {...obj};
   
    delete newObj[key];
   
    return newObj;
   
    }
   
    function destructivelyDeleteFromEmployeeByKey(obj,key) {
   
    delete obj[key];
   
    return obj;
    }



