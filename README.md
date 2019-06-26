# Resturo
Progressive Web App for restaurant management


#by Ragheb
1-I made a folder with the name Admin side  i suggest that all the admin side development will be there 
2-i made another folder called sign in it's contain three file: 
   1-input form.js => have the two input username and password
   2-signinCont.js => is the container of the sign in form have main head and the submit button 
   3-input.css for the styling 

   note: i didn't use any third party library for styling and the stying is only for tablet and mobile for now

   #by Ragheb second commit 
   1-i add new folder called the adminPanel inside you will find panelTest.js file
    it's about the panel that the admin can access it after signed in 
   2-i add config folder inside you will find the config.js that contain all the firebase config object 
   3-i add props for input-form.js for that the input can accept value 
   4-i add state for email and password input in the signinCont component using React hooks 
   5-i add two methods (changeEmail,changePassword) in the signinCont component to manage the state of the two inputs
   6-i add login method in the signinCont component to mmanage firebase login method
   7-i add logout button and method for the Panel component for managing the firebase logout method
    conclusion => the fire auth developed succesfully you only need new email and password after we finish developing the admin side i used a test email and password 
