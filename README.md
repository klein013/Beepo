BeepoExam

Klein Soriano

Requirements:

Below you will see the problem description which you need to design and implement a solution for. A few points to note about the challenge:
* The app just needs to be functional and neat - don't spend excessive amounts of time making it beautiful.
* You may implement the solution using libraries as required however you may not solely use external libraries, the code must reflect some of your own style.
* The solution must use Angular (current version is 12.0.4) and ASP.Net Core.
* After completing please upload to a Git repo and share the link. In the repo please include instructions on how to build and run your solution.
* The exercise tends to take applicants about 5-6 hours on average. You have 7 days to complete the challenge.
Problem Statement
My name is Dr Mark Stephenson and I run a successful Medical General Practice in Brisbane CBD called MyHealthPlus. My administrative team and I are currently struggling to manage the high number of appointments we receive. Currently we utilise a desktop system to manage these appointments which is highly outdated.
We would like to transition to a website that allows our patients to register then self-serve and book an appointment with me. The two main types of appointment we offer are general check-ups and skin cancer checks. To be effective the appointments will need to show the patient details and the appointment details such as date / time. While my staff can monitor for booking conflicts I would prefer if the system stopped double bookings from happening. When I log into the system I should be able to see my appointments for the day and click into them to view details. I should also be able to save a comment against the appointment.
My staff should also be able to log in and view my appointments from their account after they have registered.
Should you have questions, please let me know.


Application Versions:
Angular 13.2.3
ASP.NET Core 3.1
MS SQL Server 2019

How to build/run the application:

1. Create a database in SQL Server  named "BeepoExam".
2. Configure this connection string to be used when building the ASP.NET API.                        
    "Server=<Server>;Initial Catalog=<DBName>;Persist Security Info=False;User ID=<UserID>;Password=<Password>;"
3. Open the ASP.NET Project, it is configured to run on "localhost:8000/".
4. Under appsettings.json replace "DatabaseConnection" string with the connection string you configured.
5. Using dotnet CLI run the following command.                                                
     "dotnet ef database update".
6. Run the ASP.NET project using debug mode only.
7. Open the Angular Project Named "BeepoUI", run ng-serve in the terminal. make sure that you have installed the angular in you workstation.
8. The application is expected to be running, Open the angular application in your web browser.
