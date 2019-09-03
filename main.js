function arrayToObj(array) {
   console.log(array)
   let arrayToObj = {};
   
   
   array.forEach(e=>

      arrayToObj[e[0]] = e[1]
      
   );
   

   console.log(arrayToObj)
   return arrayToObj; 
   
}
 


module.exports = arrayToObj;
