# Feature: Log in

#     Scenario: Register a new user
#         Given I am on the Home page
#         When I click on 'Register'
#         Then I expect to be on the page 'register'
#         When i put the email 'costav689@gmail.com', the Birthdate '2022-06-13', the photo 'sadsad', the password 'dasdasda' and the repeat password 'dasdasda'
#         And I click on the button Submit
#         Then I expect to be on the 'login' page
 
#     Scenario: Log in as a user
#         Given I am on the Home page
#         When loggin with the credencials 'costav689@gmail.com' and 'asdfqwer'
#         Then I expect to be on the 'deliveries' page

#     Scenario: Accept delivery in deliveries page
#         Given I am on the Home page
#         When loggin with the credencials 'costav689@gmail.com' and 'asdfqwer'
#         Then I expect to be on the page 'deliveries'
#         When i accept the delivery with the name 'brownies'
#         Then I expect to be on the page 'currentJob' 
#         And see the product name 'brownies'


#     Scenario: See delivery details page
#         Given I am on the Home page
#         When loggin with the credencials 'costav689@gmail.com' and 'asdfqwer'
#         Then I expect to be on the page 'deliveries'
#         When i click on details of the delivery with the name 'brownies'
#         Then I expect to be on the page 'Specification' 
#         And see the product name 'brownies'


#     Scenario: Accompish a job
#         Given I am on the Home page
#         When loggin with the credencials 'costav689@gmail.com' and 'asdfqwer'
#         Then I expect to be on the page 'deliveries'
#         When i accept the delivery with the name 'brownies'
#         Then I expect to be on the page 'currentJob'
#         And see the product named 'brownies'
#         When I accompish the job
#         Then I expect to be on the 'deliveries' page


#     Scenario: logout as a user
#         Given I am on the Home page
#         When loggin with the credencials 'costav689@gmail.com' and 'asdfqwer'
#         Then I expect to be on the page 'deliveries'
#         When I click on 'Logout'
#         Then I expect to be on the 'login' page
