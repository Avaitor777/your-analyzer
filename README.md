# your-analyzer
 making data analysis very pro-creative and visual with common MERN software standard. 

# website
   - Note that sufficiennt time will be taking on opening the web domain as per "render.com" restrictions and rules. It works but takes time on first approach. 
   

 Briefing of Project:
   ------------------------------------------------------------
   This Project is the least complex but, complex enough and more focused on the backend development and efficient data fetching for analysis purpose.
   The data that is provided is not taken from any offical source. This data is a a generated example and the correct match to the SCHEMA that i have deployed withen the project code lines.

   The Purpose of this project is to give companies or organizations a helping hand to manage their data in a simple format given their required attributes to be rendered. If used for such purpose, certain prerequisites and changed must be followed.
   They include
    type of data base (here mongodb)
    connection code and env files.
    api call changes (to visualize data that is fetched)
    addition things which may require changes.

   You can refer Youtube or certain Documentations as to bring changes to this project. Majority of this build is all referenced from Documentations and Videos.
   Please try to make it even better with more functionalities or features and update me via email.
   Hope its Useful.

   -------------------------------------------------------------

 Project Working:

   There are 2 major folders
      1: client
      2: server
   each should be run seperatly on your vs-terminal or Terminal.
   for client:-
   1. install node_module and dependencies via npm commands
   2. simply run "npm audit fix"
   3. run "npm run start" as specfied in package.json
   4. if any doubts on the scripts, refer the package.json of client

   for server:-
   NOTE: nodemon is used.
   1. install node_modules and dependencies via npm
   2. simply run "npm audit fix"
   3. run "npm run dev" as specfied in package.json
   4. if any doubts as such, refer package.json of server

   make sure to "cd" to the folders before start.

 Files and website to visit for code extraction:

   - Certain particular codes have been fully      imported or used from sources/packages thats MIT licensed. Do REFER them to make design or structural changes to the component.

      1. https://reactdatepicker.com
      2. https://mui.com/material-ui/react-drawer/#persistent-drawer
      3. https://nivo.rocks/line/
      4. https://nivo.rocks/choropleth/
      5. https://nivo.rocks/pie/
      6. https://reactdatepicker.com/#example-date-range

 error fox required:
   from @mui/x-data-grid:
      - some packages are unable or not recognized by the react compiler.
      - try updating npm or try for a fix into the packages
      - the imports are 
         1. GridFilterMenuItem
         2. HideGridColMenuItem
      - I have tried replacing them but on replacement, the parameters also changes. research required.
      - component active at http://localhost:3000/admin
      - related tag calls and components are disabled for the time being.

