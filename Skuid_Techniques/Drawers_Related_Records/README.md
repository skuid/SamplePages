# Showing Child Related Data in Table Drawers

Skuid offers a number of ways of interacting with related data.  One powerful way is using Table drawers.   This allows a simple list interface in the table,  but then additional details about the primary record,  and multiple related records can be in drawers.   In addition,  drawers let you open up more than one primary record to see the details contained in each on. 



<img src="AccountContactDrawers.png" width="300"></img>

## Instructions:  
- V2 Page API Used
- Data source: Uses default Salesforce data source
- Design system: None 
- Page XML:  [Copy the XML from this page](AccountChildrenTableDrawers.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

## Notes:
Here are the key areas to be reviewed. 
-  Model properties.   The contact model has a filterable condition,  and does not load data on page load. 
-  Table display properties.  Drawers are enabled
-  Drawer icon.  Click icon on left of table to expose Drawer Properties. 
-  Before Load Actions.   This sequence of actions only runs the first time the drawer is opened.  You don't need to query for ACME's contacts on the second time the drawer is opened.  
-  Query Model Action:  Note the "Gets more"  property.  The contacts model will grow as the user interacts with different accounts. 
-  Configure the Drawer to explore the components inside.  Each component has a "Context" property that instructs skuid to only show the data relevant to that Account.  Especially look at this property on the Table of contacts. 

## Related Links: 

- [Tutorial in Skuid Documentation](https://docs.skuid.com/latest/v1/en/skuid/components/original/drawers/)  Note:  This tutorial uses V1 components,  but the concepts are all the same. 
- [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=Account_Children_Table_Drawers) (for Skuid Employees only)

