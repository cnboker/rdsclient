var {unzip} = require('../unzip')
jest.useRealTimers();

it("unzip file",   function (done) {
    
     unzip('./__test__/Archive.zip','./__test__/aa',()=>{
        console.log('zip end ........')
        done();
     })
    
})