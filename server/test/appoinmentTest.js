const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest')
const appointments_controllers = require('../controllers/appointments_controller')
const app = require('../app')


// unit testing for counting days
describe('Unit testing counting days for appointment', function(){

    it('test when appoinment is in the past', function(){
        assert.equal(appointments_controllers.countDaysToAppointment('2020-05-24T00:22:00.000+00:00'), 'appoinment date passed');
    })
    it('test when appoinment date is invaild format', function(){
        expect(function (){
            appointments_controllers.countDaysToAppointment('sadas')
        }).to.throw(TypeError, "this is not vaild date")
    })
})

// testing backend for find hospital by id
describe('Integration testing for getting hospital by id', function(){
    it('should return a hospital by the corrsponding id', function(done){
        request(app).get('/api/hospitals/5e85bf5520c0af944747c294').end(function(err, res){
            expect(res.statusCode).to.equal(200)
            let hospital = res.body.hospital
            expect(hospital._id).to.equal('5e85bf5520c0af944747c294')
            expect(hospital.name).to.equal('The Royal Melbourne Hospital ')
            expect(hospital.location).to.equal('300 Grattan Street (corner of Royal Parade) Parkville, Victoria 3050 Australia')
            expect(hospital.language).to.eql(["Australian English, ", "American English"])
        })
        done()
    })

    it('should return error with 500 error invaild id', function(done){
        request(app).get('/api/hospitals/sdas').end(function(err, res){
            expect(res.statusCode).to.equal(500)
        })
        done()
    })

    it('should return error with 404 error id does not exist in db', function(done){
        request(app).get('/api/hospitals/5e85bf5520c0af943747c294').end(function(err, res){
            expect(res.statusCode).to.equal(404)
        })
        done()
    })
})

// combine find patients id, find hospital id and vaccine id
describe('functional testing for getting appointment by patient id', function(){
    it('should return a list of appointments by the corrsponding patient id', function(done){
        request(app).get('/api/appointments/5eb916ceafa0227c0f91ce16').end(function(err, res){
            expect(res.statusCode).to.equal(200)
        })
        done()
    })

    it('should return error with 500 error invaild id', function(done){
        request(app).get('/api/appointments/5e85bf552af943747c294').end(function(err, res){
            expect(res.statusCode).to.equal(500)
        })
        done()
    })
})