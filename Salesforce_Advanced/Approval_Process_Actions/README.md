# Salesforce Approval Processes

Salesforce approval processes allow for very complicated workflows and multi-party transactions to be managed and tracked effectively. Its a powerful platform.  Often Skuid builders want to expose approval history for a particular record,  as well as enable the relevant approval actions to facilitate these workflows. 

This sample page uses a chain of models to show approval history, and uses Salesforce datasource actions to enable the various forms of approval actions. 

<img src="ApprovalActions.png" width="300"></img>

## Instructions:  
- V2 Page API Used
- Data source: Uses default Salesforce data source
- Design system: None 
- Page XML:  [Copy the XML from this page](ApprovalProcessActions.xml), or save it as an XML file, and upload it as a new page in your Salesforce Org.  

## Notes:
- Before this page can run - an approval process must be created on the Case object. 

- In order to use the "Unlock" action the following Salesforce setting you must to go to `Salesforce  Setup->Create-> Workflows and Approvals -> Process Automation Settings` and set checkbox Enable record locking and unlocking in Apex as true



## Related Links: 
- [Skuid Documentation](https://docs.skuid.com/latest/en/data/salesforce/#approval-process-actions)
- [Internal link in Demo Org](https://skuid-demo--skuid.na37.visual.force.com/apex/skuid__ui?page=ApprovalProcessActions&id=500U0000004ieGnIAI) (for Skuid Employees only)




Notes. 

To use the "unlock" o


Approval and Reject actions:  If you immediately requery the approval process models,  the APEX required to perform the actions may not have completed.  Need a timer.. 

