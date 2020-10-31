    var readline = require('readline')
    var fs = require('fs');

    try
    {
        var myInterface = readline.createInterface({
        input: fs.createReadStream('D:\\NODEJS Algorithms\\screenRecorder.txt')
        });

    var lineno = 0;
    myInterface.on('line', function (line) {
    lineno++;
    if(line.includes('pa'))
        console.log(line);
    });
}
catch(er){
    console.log('You have not provided the correct path to the file ')
    console.log(er)
}

