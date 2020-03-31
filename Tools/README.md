# Tools for license management

The pages in this directory are useful for understanding how Skuid is being used in your Salesforce Org. 

To use one of the sample pages in the this folder, follow these steps:

1. Copy the raw XML from the sample page you'd like to use.
2. On Pages List - Click **Create** button.
3. Name your Skuid page.
5. Select **XML options**.
6. Click **Paste XML**.
7. Paste the copied XML into the "Page XML" text area.
8. Click **Create**.

You will be directed to the App Composer, displaying your newly created sample page.

To see your page in action, click **Preview**.


## Pages

### <a href="LicenseManagement.xml" download="LicenseManagement.xml">License Management </a>  

Where are all the Skuid licenses in my Salesforce org? This report shows all users that have been assigned a Skuid license - even the Guest Site User and Chatter Free users that don't normally show in the Salesforce assigned license page.

Instructions: 
   - Page API:  V1
   - Data source: Uses default Salesforce data source
   - Design System: None 
   - Page XML:  [Copy the XML from this page](LicenseManagement.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Related Links:  
   - [Skuid Documentation](https://docs.skuid.com/latest/en/skuid/deploy/salesforce/user-access/#skuid-sample-page-license-management)
   - [Community Post](https://community.skuid.com/skuid/topics/the-users-show-2-users-and-4-licenses-but-none-available)
   - [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=ApprovalProcessActions&id=500U0000004ieGnIAI) (for Skuid Employees only)


 ### <a href="SkuidLicenseUse.xml" download="SkuidLicenseUse.xml">License Use - Six Months</a>  

Summary report that shows logins by month for users that have license to the Skuid Package.  Report shows 6 months of login activity. 

Instructions: 
   - Page API:  V1   
   -  Data source: Uses default Salesforce data source
   -  Design System: None 
   - Page XML:  [Copy the XML from this page](SkuidLicenseUse.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Related Links:  
   - [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=SkuidLicenseUse) (for Skuid Employees only)


### <a href="SkuidLicenes_1Month.xml" download="SkuidLicenes_1Month.xml">License Use - One Month</a>  

Summary report that shows a summary of logins for a single month for users that have license to the Skuid Package.  (Useful when the 6 month report attempts to load too much data and you get an Apex Heap Size error)

Instructions: 
   - Page API:  V1  
   - Data source: Uses default Salesforce data source
   - Design System: None 
   - Page XML:  [Copy the XML from this page](SkuidLicenes_1Month.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Related Links:  
   - [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=SkuidLicenses_1Month) (for Skuid Employees only)