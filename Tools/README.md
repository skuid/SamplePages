# Tools for Subscription Management

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

### <a href="SubscriptionManagement.xml" download="SubscriptionManagement.xml">Subscription Management </a>  

Where are all the Skuid licenses in my Salesforce org? This report shows all users that have been assigned a Skuid license - even the Guest Site User and Chatter Free users that don't normally show in the Salesforce assigned license page.  It also has a tab where you can see what Skuid Permission sets have been assigned to users in your org. 

Instructions: 

Current Skuid Release.  (This page may not work for Skuid Versions before 13.0) 
   - Page API:  V2
   - Data source: Uses default Salesforce data source
   - Design System: Default 
   - Page XML:  [Copy the XML from this page](SubscriptionManagement.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Prior Releases
   - Page API:  V1
   - Page XML:  [Copy the XML from this page](LicenseManagement.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  


Related Links:  
   - [Skuid Documentation](https://docs.skuid.com/latest/en/skuid/deploy/salesforce/user-access/#skuid-sample-page-license-management)
   - [Community Post](https://community.skuid.com/skuid/topics/the-users-show-2-users-and-4-licenses-but-none-available)
   - [Internal link in Demo Org](https://skuid-demo--skuid.na137.visual.force.com/apex/skuid__ui?page=SubscriptionManagement) (for Skuid Employees only)

### <a href="SubscriptionAnalysis.xml" download="SubscriptionAnalysis.xml">Subscription Analysis </a>  

Skuid Licenses assigned in your Salesforce org aggregated by Profile and User Type.  This report will show you how many Customer Portal users are currently licensed to use Skuid. 

Instructions: 

   - Page API:  V2
   - Data source: Uses default Salesforce data source
   - Design System: Default 
   - Page XML:  [Copy the XML from this page](SubscriptionAnalysis.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  


 ### <a href="SkuidLicenseUse_V2.xml" download="SkuidLicenseUse_V2.xml">Skuid User Logins - Last Six Months</a>  

Summary report that shows logins by month for users that have license to the Skuid Package.  Report shows 6 months of login activity. 

Instructions: 

Current Skuid Release.  (This page may not work for Skuid Versions before 13.0)
   - Page API:  V2
   - Data source: Uses default Salesforce data source
   - Design System: Default 
   - Page XML:  [Copy the XML from this page](SkuidLicenseUse_V2.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  


Prior Releases
   - Page API:  V1   
   - Data source: Uses default Salesforce data source
   - Design System: None 
   - Page XML:  [Copy the XML from this page](SiteLicenses_6months.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Related Links:  
   - [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=SkuidLicenseUse_V2) (for Skuid Employees only)




### <a href="SkuidLicenseUse__1Month_V2.xml" download="SkuidLicenseUse__1Month_V2.xml">Skuid User Logins - One Month</a>  

Summary report that shows a summary of logins for a single month for users that have license to the Skuid Package.  (Useful when the 6 month report attempts to load too much data and you get an Apex Heap Size error)

Instructions: 

Current Skuid Release.  (This page may not work for Skuid Versions before 13.0)
   - Page API:  V2
   - Data source: Uses default Salesforce data source
   - Design System: Default 
   - Page XML:  [Copy the XML from this page](SkuidLicenseUse__1Month_V2.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org. 

Prior Releases
   - Page API:  V1  
   - Data source: Uses default Salesforce data source
   - Design System: None 
   - Page XML:  [Copy the XML from this page](SiteLicenses_1Month.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

Related Links:  
   - [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=SkuidLicenseUse__1Month_V2) (for Skuid Employees only)
