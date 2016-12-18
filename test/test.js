const chai = require('chai')
const chaip = require('chai-as-promised');
const expect = chai.expect;
const should = chai.should;
const request = require('request');
const yts = require('../index')

// console.log(yts);
chai.use(chaip);

describe('Request', function() {
  describe('/GET requests', function() {
  	describe('List Movies', function() {
      describe('When called without any parameters', function() {
    		it('it should get 20 movies', function(done) {
          // yts.list_movies().then(
          //     function (result) {
          //       expect(result).to.equal("foo");
          //       done();
          //     },
          //     function (err) {
          //       done(err);
          //     }
          // );
          // return expect(Promise.resolve(2+2)).to.eventually.equal(5);
          return expect(yts.list_movies()).to.eventually.have.property('data');
    		})
      });
  	});

  	// describe('Movie Details', () => {
  	// 	it('it should get the details of a movie based on the movie_id', () => {
  	// 		yts.movie_details({movie_id: 2334}).then(data => {
  	// 			expect(data.status).to.equal("ok");
			// 		expect(data.status_message).to.equal("Query was successful");
   //        expect(data.data.movie.imdb_code).to.equal("tt2324324");
  	// 		});
  	// 	});
   //    it('it should return undefined if not passed arguments', () => {
   //      yts.movie_details().then(data => {
   //        expect(data).to.equal("asdf");
   //      });
   //    })
  	// })

  });
});