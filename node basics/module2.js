const fs = require('fs');
const { parse } = require('csv-parse');
const arr = [];

function potentialplanet(planet){
  return planet['koi_disposition']==='CONFIRMED' && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 && planet['koi_prad']<1.6;

};
function response(file, callback) {
  fs.createReadStream(file)
    .pipe(parse({
      comment: '#',
      columns: true,
    }))
    .on('data', (data) => {
      if (potentialplanet(data)) {
        arr.push(data['kepler_name']);
      }
    })
    .on('error', (error) => {
      callback('error');
    })
    .on('end', () => {
      callback(arr);
    });
};


module.exports = {
  response
};
