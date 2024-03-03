const {parse} = require('csv-parse');
const fs = require('fs');
const results = [];

function potentialplanet(planet){
   return planet['koi_disposition']==='CONFIRMED' && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 && planet['koi_prad']<1.6;

}
fs.createReadStream('Kepler_data.csv')
.pipe(parse({
  comment : '#',
  columns : true,
}))
   .on('data',(data)=>{
    if(potentialplanet(data)){
      results.push(data)

    }
    
   })
   .on('end',()=>{
    console.log(`${results.length} no of habital planets`);
    console.log(results.map((planet)=>{
      return planet['kepler_name'];
    }));
   })
   .on('error',(err)=>{
    console.log(err);
   });


// parse()


