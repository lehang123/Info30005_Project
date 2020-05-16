# Info30005_Project

# install misssing dependency
go in to folder(server and client), then :
npm install


# install concurrently globally
npm install -g concurrently

# Run project (for dev)

cd Code
if concurrently is installed, type:
    npm run dev 
    this will open both client and server concurrently

else : (open them separately)
    cd server
    npm start
    cd ..
    cd client
    npm start

# progress for the project so far: 

we have done the mock up server, and post it to the heroku server 
URL : https://team-vaccine.herokuapp.com/

server function done so far:

    5 routes:

        users: to manage signup and login for patient so they can have a appointment for the vaccine

            request: 
                GET: https://team-vaccine.herokuapp.com/users
                to get all the users listing on the databse, shows only (id, username, account_id)

                POST: https://team-vaccine.herokuapp.com/users/signup
                to sign up a user by a json format of information
                    (* is a must have information)
                {
                    account_id* : a patient's account id, 
                    password* : password to login, encrpyted and salt,
                    username* : to shows on the website,
                    birthday* : to identify the patients' age
                    gender* : record a patient's gender
                    contact* : the contact information(i.e. phone number)
                    emergency_contact : the emergency contact information
                    heatlh_detail : history of health for the patient
                    location : where the patient live (town)
                    vaccine_history : vaccine history of patient
                    language : what language patient speaks
                }

                POST: https://team-vaccine.herokuapp.com/users/login
                to login a user by a json format of information (* is a must have information)
                {
                    account_id* : a patient's account id, 
                    password* : password to login
                }
                dummy account: 
                    account_id: ”lehanTesting2“
                    password: ”12345“
        
        vaccines: to store and record all vaccines information

            request:
                GET: https://team-vaccine.herokuapp.com/vaccines
                to get all the vaccines listing, show only (_id name alleries prevent_disease good_for_groups recommend_star)

                GET: https://team-vaccine.herokuapp.com/vaccines/:vaccineId
                to get a specific vaccine by it's id, shows (all information)

                POST: https://team-vaccine.herokuapp.com/vaccines
                to post a new vaccine into the database, with a json format of information
                    (* is a must have information)
                {
                    name* : name of the vaccine,
                    cost* : cost of a vaccine for a patient, 
                    stock* : how many in stock,
                    alleries* : what alleries might cause,
                    prevent_disease* : what immunity does it gives
                    good_for_groups: who are the suitable/recommend to take the vaccine
                    recommend_star* : how recommended this vaccine to the public
                    available_at* : where can we get the vaccine
                    manufacturer* : manufacturer of the vaccine
                }

                PATCH: https://team-vaccine.herokuapp.com/vaccines/:vaccineId
                to update partial resource by a json format of information (vaccine by id)

                DELETE: https://team-vaccine.herokuapp.com/vaccines/:vaccineId
                delete vaccine by id

        hospital: to store and record all hospitals information

            request:
                GET: https://team-vaccine.herokuapp.com/hospitals
                to get all the hospital listing, show only(_id name location language)

                GET: https://team-vaccine.herokuapp.com/hospitals/:hospitalId
                to get a specific hospital by it's id, shows(all information)

                POST: https://team-vaccine.herokuapp.com/hospitals
                 to post a new hospital into the database, with a json format of information
                    (* is a must have information)

                {
                     name*: the name of hospital, 
                    location*: where is the hospital,
                    language*: what kind of language consutation this hospital can offer 
                }

                PATCH: https://team-vaccine.herokuapp.com/hospitals/:hospitalId
                to update partial resource by a json format of information (hospital by id)

                DELETE: https://team-vaccine.herokuapp.com/hospitals/:hospitalId
                to delete a hospital from database by Id
        
        hospitals_vaccines: since hospital and vaccine is a many to many relationship, so we need a middle collection to store
            their relationship

            request: 
                POST: https://team-vaccine.herokuapp.com/hospitals_vaccines
                post a new relationship bewteen a hospital and a vaccine, by json format
                {
                    hospital_id*: to find the hospital in hospital collection, 
                    vaccine_id*: to find the vaccine in vaccine collection,
                    stocks*: how many vaccine stocks in the hospital
                }

                PATCH: https://team-vaccine.herokuapp.com/
                to update partial resource on the query format of information (need both hosptital id and vaccine id)
                i.e. 
                    https://team-vaccine.herokuapp.com/hospitals_vaccines/?hospital_id=5e7edb416d356988c2cbe1de&vaccine_id=5e7c298a5f96c7e24141ddc9&update_number=3 
        
        appointment: to store and record all appointments information

            request:
                GET: https://team-vaccine.herokuapp.com/appointments
                get all the appoinment listing

                POST: https://team-vaccine.herokuapp.com/appointments

                    (* is a must have information)
                {
                    patient_id* : who books the appointment, 
                    hospital_id* : the hospital that the patient booked,
                    date_time* : when is the appoinment,
                    cost* : How much for the appoinment(vaccine cost),
                    vaccine_id* : the vaccine that patient is booking for
                }

                DELETE: https://team-vaccine.herokuapp.com/appointments/:appointmentId

                delete a appointment by id




Client functions done so far:

    3 core functionalities:
        Vaccines:

	The vaccines page display all the vaccines (in summary form) stored in our database. Each Vaccine will also have their individual pages.
	
	To access the vaccines' summary page, click Vaccines at the Navibar or go to "https://team-vaccine.herokuapp.com/vaccines" and there will be lists showing the summaries of each vaccine.
	To access individual vaccine page, click the vaccine you are interested in on the summary page.

	Account:

	User can have their own account on our website. They need to have an account first for appointment function. They can access their information stored in our database and manage information and appointments through 		having an account.
	
	User needs to Sign up to have an account.
	To sign up, click the Log In button at the Navi bar or go to "https://team-vaccine.herokuapp.com/login" then click sign up at the bottom of the login box. Then you will be brought to information fill in page. After 		successfully sign up you need to log in.

	After having an account, user can log in.
	To log in, click the Log In button at the Navi bar or go to "https://team-vaccine.herokuapp.com/login" then the login box will show up. Authentication is implemented so you need to input the correct username and 		password.

	Appointment:

	After logged in user can make an appointment on our website. They can also view the appointment history and edit existing appointments(will be implemented soon).
	
	To book an appointment, click Appointment at the Navi bar or go to "https://team-vaccine.herokuapp.com/appointment". After logged in, personal details will be auto-filled for you, but you should still choose vaccine, 	hospital, and time. Vaccine, hospital, and time will be live data fetch from the database. At each step of the appointment, you can go back and change the information entered previously. After all information is 		filled in, you will be shown with the confirmation page to check appointment details. Then you can submit your appointment. Please note, if you did not login, the appointment will not be successful and the database 		will reject requests without user id.

	To view appointment history, click Appointment at the Navi bar or go to "https://team-vaccine.herokuapp.com/appointment" then click History button on the right hand side of the application bar. All the history 		appointment summary will be displayed in a table.





                 

    
    
    
