const fs = require('fs');
  
var folder = './trollsinbikinis_metadata_opensea/';
  
fs.readdir(folder, (err, files) => {
  if (err) throw err;
  
  for (const file of files) {

      var filePath = folder+file;

      //change filename
      // var newfile = file.replace(/.json/i, '');
      // var filePathRename = folder + newfile;
      // console.log(filePathRename);

      // var filePathRename = folder + "TrollsInBikinis - TIB - First Editions #" + file.substring(35);

      var filePathRename = folder + "TrollsInBikinis - TIB - First Editions #" + file;
      fs.rename(filePath, filePathRename, function(err) {
          if ( err ) console.log('ERROR: ' + err);
  
          console.log(filePathRename + ' :File Rename Successfully.');
      });
      
      
      // Json change Content

      // var data=fs.readFileSync(filePath, 'utf8');
      
      // var words=JSON.parse(data);
      // console.log(words['name']);
      // words.name = "TrollsInBikinis - TIB - First Edition #";

      // fs.writeFile(filePath, JSON.stringify(words), 'utf8', err => {
      //   if(err) throw err;
      //   console.log('file has been changed!');
      // });
      
  }
});

