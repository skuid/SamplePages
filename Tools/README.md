# Tools for license management

The pages in this directory are useful for understanding how Skuid is being used in your Salesforce Org. 

To use one of the sample pages in the this folder, follow these steps:

1. Copy the raw XML from the sample page you'd like to use.
2. On Pages List - Click **Create** button.
3. Name your Skuid page.
5. Select **XML options**.
6. Click **Paste XML**.
7. Paste the copied XML into the "Page XML" pane.
8. Click **Create**.

You will be directed to the App Composer, displaying your newly created sample page.

To see your page in action, click **Preview**.


Pages: 

 <a href="LicenseManagement.xml" download="LicenseManagement.xml">License Management </a>  
    - Where are all my Skuid licenses on Salesforce? This report shows all users that have been assigned a Skuid license - even the Guest Site User and Chatter Free users - that don't normally show in the Salesforce assigned license page. 

   -  V1 Page API Used
   -  Data source: Uses default Salesforce data source
   -  Design System: None 

   - Related Links:  
      - [Skuid Documentation](https://docs.skuid.com/latest/en/skuid/deploy/salesforce/user-access/#skuid-sample-page-license-management)
      - [Community Post](https://community.skuid.com/skuid/topics/the-users-show-2-users-and-4-licenses-but-none-available)


***

 <a href="SkuidLicenseUse.xml" download="SkuidLicenseUse.xml">License Use - Six Months</a>  
    -   Summary report that shows logins by month for users that have license to the Skuid Package.  Report shows 6 months of login activity. 

   -  V1 Page API Used
   -  Data source: Uses default Salesforce data source
   -  Design System: None 


***

 <a href="SkuidLicenes_1Month.xml" download="SkuidLicenes_1Month.xml">License Use - One Month</a>  
    -   Summary report that shows a summary of logins for a single month for users that have license to the
    Skuid Package.  (Useful when the 6 month report attempts to load too much data and you get an Apex Heap Size error)


   -  V1 Page API Used
   -  Data source: Uses default Salesforce data source
   -  Design System: None 



