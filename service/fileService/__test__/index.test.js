const resize = require("../imageResize");
//const should =  require("should")
test("resize image file",  function (done) {
  resize("./__test__/test.png", 800)
    .then(function (bas64) {
      console.log("buff", bas64);
      //should.exist(bas64);
      done();
    })
    .catch(function (err) {
      console.log("err", err);
      done();
    });
});
