# Info30005_Project

# install misssing dependency
go in to folder, then :
npm install

# install concurrently globally
npm install -g concurrently

# Run project

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
    
    
    
