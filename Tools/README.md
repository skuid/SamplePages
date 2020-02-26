# Tools for license management

The pages in this directory are useful for understanding how Skuid is being used in your Salesforce Org. 

To use one of the sample pages in the this folder, follow these steps:

1. Copy the raw XML from the sample page you'd like to use.
2. Click **Create new Page** within Skuid.
3. Name your Skuid page.
4. Click **Next Step**.
5. For "Starting point", select **Paste in XML from a prebuilt page**.
6. Click **Paste XML**.
7. Paste the copied XML into the "Page XML" pane.
8. Click **Create Page**.

You will be directed to the App Composer, displaying your newly created sample page.

To see your page in action, click **Preview**.

Otherwise, modify to your heart's content and click **Save** to retain your changes.

Pages: 

 - <a href="LicenseManagement.xml" download="LicenseManagement.xml">License Management </a>  
    - Report that shows all users that have been assigned a Skuid license - even guest user and Chatter free users - that don't normally show in the Salesforce assigned license page. 

 - <a href="SkuidLicenseUse.xml" download="SkuidLicenseUse.xml">License Use </a>  
    -   Summary report that shows logins by month for users that have license to the Skuid Package.  Report shows 6 months of login activity. 

 - <a href="SkuidLicenes_1Month.xml" download="SkuidLicenes_1Month.xml">License Use </a>  
    -   Summary report that shows a summary of logins for a single month for users that have license to the Skuid Package


<!--Title: Skuid License Management - Where are all my Skuid licenses on Salesforce? -->
<!-- Instructions:  Create a new page in your Salesforce org.  Copy the XML below into it. 
 You will be able to see all users that have been granted Skuid Licenses, 
 Even Guest Site Users,  Chatter Free users and others that don't normally show in standard User lists-->
<!-- Related Links:  
Docs: https://docs.skuid.com/latest/en/skuid/deploy/salesforce/user-access/#skuid-sample-page-license-management
Community Post: https://community.skuid.com/skuid/topics/the-users-show-2-users-and-4-licenses-but-none-available
-->
<!-- DataSource: Salesforce  (no new datasource needed)-->
<!-- Design System: None -->
<!-- Origin: SFDC Demo Org -->