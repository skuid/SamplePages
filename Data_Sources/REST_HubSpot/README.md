## Connect to your HubSpot instance
### Data Source
* Go to Data Sources and create a new data source with these attributes:
    * For Type, choose REST
    * For URL / Endpoint, use `https://api.hubapi.com`
    * For Common request headers, for field, use Authorization, and for value, use `Bearer <your API Key>`
    * Save

Notes:
* To obtain an API key from your HubSpot instance, follow [HubSpot's documentation](https://developers.hubspot.com/docs/api/private-apps) 
* If you don’t want to expose your API key in the request, there’s a way to set it as a variable instead. Check this post on the community


## List of sample pages
* [Standard Objects](StandardObjects)
* [Custom Objects](CustomObjects)
* [Extend HubSpot with Skuid DB](Extend_SkuidDB)

### Sample page 1: Work with standard objects
Featuring:
* Connect to standard objects like Deals and Line Items
* CRUD operation on that record
* List > Detail view layout
* Send Batch request to HubSpot REST API to create multiple Line Items associated with a Deal
* Wizard component: Step by step form to add items to quote
* Override metadata for Deal Stage field to have a user friendly picklist dropdown

### Sample page 2: Single record detail view + Custom object
Featuring:
* Query single deal record using URL parameter
* CRUD operation on that record
* Connect to a custom object called Booking
* Calendar component

### Sample page 3: Extend HubSpot with SkuidDB
Featuring:
* Query single record using URL parameter
* Connect to a table in SkuidDB to store deal scoring based on SPICED methodology
* Save the deal score back to HubSpot CRM as a custom field
