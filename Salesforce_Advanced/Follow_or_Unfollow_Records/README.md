# Follow and Unfollow Records in Chatter

While its not talked about too much,  Salesforce Chatter is a powerful way to let teams collaborate. A feature that makes it superior to Slack or other external tools,  is that users can chose to follow individual records, and then stay notified about activity and conversation related to that record.  Create a conversation around particular accounts, cases, etc. 

Skuid pages can be configured to include this process.  The example below shows how to follow and un-follow particular account records.  The concepts in this page can be applied to record detail pages,  or list pages in other entities. 

<img src="Follow_Records.png" width="300"></img>

## Instructions:  
- V2 Page API Used
- Data source: Uses default Salesforce data source
- Design system: None 
- Page XML:  [Copy the XML from this page](FollowRecords.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

## Notes:
- Chatter must be turned on in the org for this to function correctly. 

- Remember that a single user can only follow 500 records.  A Skuid page showing all entity subscription records by User may be helpful to see if your users are getting close. 

## Related Links: 
- [Salesforce Developer Docs](hhttps://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_entitysubscription.htm) 
- [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=Follow_Records) (for Skuid Employees only)



<!--
Rnh Notes. 

Approval and Reject actions:  If you immediately requery the approval process models,  the APEX required to perform the actions may not have completed.  Bug with components not listening to requery changes. 

I don't yet understand Lock and Unlock of parent record,  and how I can see this?  Do we have a way of controlling the interface if a record is locked?  Can we conditionally enable?

Message block - Dont use conditional rendering via field values,  use component actions to show message block.   There is still a problem with message block not merging {{$CurrentAction.error}} 
-->