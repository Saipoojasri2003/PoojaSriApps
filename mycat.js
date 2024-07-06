const today= new Date(); /* create current date */

/* Function to format date*/

function Dategen(){

 return(

  new Intl.DateTimeFormat(

    'en-US', {dateStyle:'long'}

  ).format(today)

 );

}

{ /* by using curly braces javscript inserted within the element*/}

export default function Catprofile(){

  return(

    <>

    <h1>Cat Looks on {Dategen(today)} </h1>

    <img src="https://play-lh.googleusercontent.com/Hv6wSP7YVpV-rZXgotOEKL5JOnwuWn_WA2dC2V3oDe0F7pw86ScZ8cL3tHZwTIrrmjg=w600-h300-pc0xffffff-pd" alt="cat"

    width={500} height={300}></img>

    <hr/>

   {/* <img src="https://i.imgur.com/SzHrMO5.jpeg" alt="nature"

    width={600} height={350}></img>*/}

    </>

  );

}










