
// Code your solutions in this file

const writeCards=function(name){

    const newArr=[];
    for(let i=0;i<name.length;i++){
       const mssges= `Thank you, ${name[i]}, for the wonderful surprise gift!`
        newArr.push(mssges) 
    }
    return newArr
    
}

const countDown=function(integer){
    let i=0;
    while (i<=integer) {
        console.log(integer)

         --integer
      }

}