# Work.com Command Center

Salesforce has responded to the Covid-19 crisis by adding a significant amount of functionality to the Work.com offering.  The Workplace Command Center they quickly rolled out presents a very interesting set of capabilities and starting points for developing effective tools for employers who are managing a crisis of this nature. It helps employers answer these questions: 

- Are all my employment locations available to be opened? 
- Are my employees at risk?  Have they been exposed?  Are they presenting symptoms?  Should they come to work today? 
- Have my facilities received the necessary cleaning to mitigate risk of infection there? 

As should be expected,  Skuid works really well with the new sObjects and relationships that have been rolled out in this solution.  We'd venture that Skuid is the perfect tool for adapting the Work.com Command Center offering to the real-world needs of your company. 

This page will host a number of Skuid extensions to the Work.com solution. 

<img src="WorkDotCom_CommandCenter.png" width="300"></img>

## Getting Started. 
1. Install Work.com command center  
The easiest way to get started exploring the Work.Com solution is to install this in a Scratch org using SFDX.  This means you will need to use your terminal and have GIT and SFDX installed.  Then follow these instructions: 
- Clone a local copy of the repo found here:  (https://github.com/forcedotcom/WorkDotCom-Partners).  `git clone https://github.com/forcedotcom/WorkDotCom-Partners.git`
- Run the orgInit.sh file which will use SFDX to install all the necessary packages and metadata.   `./orgInit.sh`

Now you can see the basic Work.com solution. 

More information: 
- [Help Pages](https://help.salesforce.com/articleView?id=workdotcom.htm&type=5) Overview of the solution and additional installation options. 
- [Developer Docs](https://developer.salesforce.com/docs/atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_overview.htm) for additional configuration of this solution. 
- [Data Model](https://developer.salesforce.com/docs/atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_model.htm). Understanding the Data Model will be particularly important for any Skuid development. 

2. Install Skuid
Get the latests version of Skuid installed in the new Scratch org.  Go to (https://Skuid.com/releases)

# Employee Wellness Assessment

The first use case will be the survey provided to Employees every day before they come to work.  The Work.Com solution uses the Salesforce Survey solution.  This survey is sent every day by email - with a user specific link to a publicly available community page. 

With Skuid this survey can be built in a host of other ways,  and deployed in many other places: 
- Salesforce Mobile App
- Employee Community
- Public force.com site
- Directly in Salesforce.com web application. 

Skuid also allows for rich data entry experiences,  progressively answering questions,  and adjusting responses and outcomes based on the answers provided.  

We also imagined that employers might have additional reporting and data collection requirements that need to be integrated with this wellness survey.  We have a custom PTO request object in our org where we request time off.  Why not automatically create this PTO request with category `Covid-19` for any employee that needs to stay away from work because of their diagnosis. 

Finally - because its Skuid,  it can be beautiful. We used one of the [sample design systems](https://github.com/skuid/SamplePages/tree/master/Design_Systems) and made the page beautiful. 

<img src="WorkDotCom_WellnessForm.png" width="300"></img>

## Instructions
- Page API:  V2
- Data source: Uses default Salesforce data source
- Additional sObject:  The PTO custom object can be deployed from this ZIP file. 
    - [Download this ZIP file](unpackaged.zip) to the directory where you are working on this solution. 
    - With your terminal in that same directory use SFDX command:  `sfdx force:mdapi:deploy -u <<ScratchOrg Alias>> -f unpackaged.zip`

- Design system: [Download this Design System file](https://github.com/skuid/SamplePages/blob/master/Design_Systems/Material/Material.designsystem), and use the Import function on the Design System page to add this system to your org.
    - You might also want to look at the [demo page](https://github.com/skuid/SamplePages/blob/master/Design_Systems/Material/Material_DesignSystem_DemoPage.xml) for that design system. 
- Page XML:  [Copy the XML from this page](ApprovalProcessActions.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

## Notes
- This page uses both the `Employee` and `Individual` sObjects to provide identity.  For testing a condition on the Individual model uses a page parameter to retrieve the context of a single individual.  In production this would be changed so it was the associated with the running user. 

- This page uses a UI Only model to drive the survey - and then creates records in 3 objects based on the answer.  Look at the actions in the `SurveyQuestions` model to see how this works. 

- The form itself builds conditionally.  Look at the render conditions on each field in the form. 

- The final message,  and resulting "submit" button are rendered dynamically based on the answers provided.  Each Submit button does a different sequence of things. 


# Other Explorations Coming Soon
Stay tuned. 
