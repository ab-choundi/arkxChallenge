// Read the city name from the "input.txt" file.
// Retrieve the weather data for the chosen city.
// Delete any existing file for the chosen city.
// Write the temperature result into a new file named "cityname.txt".
// Handle any errors that may occur during file operations, API requests, or other steps.


const fs = require('fs');

const getCityName = (fileName, temperature) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
        if (err) {
            console.log(err);
        } else {
            const textWriteInsideMyNewFile = `The Temperature of ${content} Is ${temperature}*C`;
            fs.writeFile(`${content}.txt`, textWriteInsideMyNewFile, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('The File Has Been Created With Success !');
                }
            });
        }
    });
};

getCityName('input.txt', 34);
