# Extend HubSpot with SkuidDB
This is only available when using Skuid NLX. This sample page shows how you can store and track scoring of an in-progress deal over time in SkuidDB. 

# Features
* Query single record using URL parameter
* Connect to a table in SkuidDB to store deal scoring based on SPICED methodology
* Save the deal score back to HubSpot CRM as a custom field on the Deal object

## Instructions
- Page API:  V2
- Data source: REST data source named "HubSpotTestApp" connecting to your HubSpot instance per [instruction](REST_HubSpot)
- Design system: None 
- Page XML:  [Copy the XML from this page](HubSpot_Extend_with_SkuidDB_SamplePage.xml?raw=true), or save it as an XML file, and upload it as a new page in Skuid's Pages.