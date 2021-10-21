const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
        .then(()=>console.log('Connected successfully'))
        .catch(()=>console.log('Something went wrong'))