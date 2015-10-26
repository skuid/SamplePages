(function($) {
	var $xml = skuid.utils.makeXMLDoc;

	skuid.builder.core.registerBuilder(new skuid.builder.core.Builder({
		id: "progressindicator__progress_indicator",
		name: "Progress Indicator",
		icon: "sk-icon-arrow-right",
		description: "Connect to a Tab Set or Wizard Component to track users' progress through processes",

		// How it's rendered in the composer view in desktop
		componentRenderer: function(component) {

			// Create some shortcut variables
			var $ = skuid.jQuery;
			var bc = skuid.builder.core;

			var content = $j('<div class="progress-indicator">');
			var cTable = $('<table>');
			var cRow = $('<tr>');

			content.append(cTable.append(cRow));
			component.stepsWrapper = $('<div>');

			var  stepBuilder = new bc.Builder({
				id : 'step',
				name : 'Step',
				hideWrapper: true,
				componentRenderer : function (stepComponent) {
						// The main display of the stepBuilder
						var disp = $('<div class="progress-chunk">');
						
						var text = $('<div class="progress-text">');
						var icon = stepComponent.state.attr('icon');
						if(icon){
							text.append($('<div>').addClass('nx-step-icon ' + icon + ' sk-icon inline'));
						}
						text.append('<div class="text-content">' + stepComponent.state.attr('label') + '</div>');

						disp.append(text);
						disp.append('<div class="progress-triangle"></div>');
						disp.append('<div class="progress-triangle-outline"></div>');
						
						// Add the component element to the display div,
						// instead of the other way around (read more at bottom)
						disp.append(stepComponent.element);

						// Adds the configurable parts to the specific div
						component.stepsWrapper.append(disp);

						disp.find('.progress-text').on('click', function(e){
							stepComponent.element.click();
							// Prevent the parent component from being selected
							return false;
						});

						// If this is a new step, give it a new id
						if(stepComponent.state.attr('data-id') === undefined){
							var idIndex = Number(component.state.attr('id-index'));
							stepComponent.state.attr('data-id', idIndex);
							component.state.attr('id-index', idIndex + 1);
						}

						stepComponent.previewElement = disp;

						stepComponent.addActionItem('Remove Step','sk-bi-tab-delete',function() {
							// Remove the display portion
							stepComponent.element.remove();
							disp.remove();
							
							// Remove it from the xml 
							var findString = '[data-id="' + stepComponent.state.attr('data-id') + '"]';
							component.state.find(findString).remove();
							component.save();
						});
				},
				propertiesRenderer : function (propertiesObj,stepComponent) {
					// The header that appears across all property pages at the top left
					propertiesObj.setHeaderText('Step Properties');
									
					// We only have one page of properties, basic in this case
					var propertyPages = [{
						name: 'Basic',
						props : [
							{
								id : 'label',
								type : 'string',
								label : 'Step Label',
								onChange : function(val) {
									// Update the text in the preview
									stepComponent.previewElement.find('.progress-text .text-content').text(stepComponent.state.attr('label'));

									// Update the actual data
									var findString = '[data-id="' + stepComponent.state.attr('data-id') + '"]';
									component.state.find(findString).attr('label', stepComponent.state.attr('label'));

									component.save();
								}
							},
							{
								id : 'icon',
								type : 'icon',
								label : 'Icon',
								onChange : function(val) {								
									var text = stepComponent.previewElement.find('.progress-text');
									var iconelem = text.children('.nx-step-icon');
									if (iconelem.length) {
										iconelem.remove();
									}
									
									if (val) {
										iconelem = $('<div>').addClass('nx-step-icon ' + val + ' sk-icon inline');
										text.prepend(iconelem);
									}

									// Update the actual data
									var findString = '[data-id="' + stepComponent.state.attr('data-id') + '"]';
									component.state.find(findString).attr('icon', stepComponent.state.attr('icon'));
								}
							}
						]	
					}];
					
					propertiesObj.applyPropsWithCategories(propertyPages,stepComponent.state);	
					
				},
				defaultStateGenerator : function () {
					return $xml('<step label="I\'m a step!"/>').append($xml('<components/>'));
				}
			});
	
			// Adds a new step to the display and data
			var addStep = function(index, stepDef) {
				// Default to creating a new step, if one is not defined
				var newStep = stepDef === undefined;
				if(newStep){
					stepDef =  stepBuilder.defaultStateGenerator();
				}

				var stepComponent = bc.componentFactory(stepDef, stepBuilder,true);

				// If this is a new component, we gotta let the xml know about it
				if(newStep){
					component.state.children('steps').append(stepComponent.state);
				}
				
			};

			// Add step button
			component.addActionItem('Add Step','sk-bi-tab-add',function() {
				var steps = component.state.children('steps');
				
				addStep(0);

				// Lets the component now that the state has been changed
				component.save();
			});

			// The actual rendering
			component.idIndex = component.state.attr('id-index');

			// A nice 'for each' 'loop' (not exactly either of those
			// but it may help some to look at it that way)
			component.state.children('steps').children().each(function(index, element){
				// Seems like theres a better way to do this...
				addStep(0, $(this));
			});

			// Make steps sortable
			component.stepsWrapper.sortableComponent({
				axis: 'x',
				component: component,
				parentStateSelector: 'steps'
			});
			
			component.setTitle(component.builder.name);


			component.body.html('');
			component.body.append(content.append(component.stepsWrapper));

		},

		// The inputtable properties
		propertiesRenderer: function (propertiesObj,component) {
			propertiesObj.setTitle("Progress Indicator Component Properties");
			var state = component.state;
			var propCategories = [];

			var propsList = [
				{
					id: "friendId",
					type: "string",
					label: "Tabset/Wizard Id",
					helpText: "The id of the tabset or wizard component that you would like this progress indicator to be bound to.",
					onChange: function(){
						component.refresh();
					}
				},
				{
					id: "current-color",
					type: "color",
					label: "Current Step Color",
					onChange: function(){
						component.refresh();
					}
				},
				{
					id: "done-color",
					type: "color",
					label: "Done Step Color",
					onChange: function(){
						component.refresh();
					}
				},
				{
					id: "future-color",
					type: "color",
					label: "Future Step Color",
					onChange: function(){
						component.refresh();
					}
				}
			];

			// Page 1 Properties
			propCategories.push({
				name: "Basic",
				props: propsList,
			});

			propertiesObj.applyPropsWithCategories(propCategories,state);
		},
		defaultStateGenerator : function() {
			var progressIndicator = $xml('<progressindicator__progress_indicator/>')
				.attr('id-index', '0')
				.attr('future-color', '#eeeeee')
				.attr('current-color', '#555')
				.attr('done-color', '#888888');

			// Always wrap lists in plural nodes
			steps = $xml('<steps/>').appendTo(progressIndicator);
			steps.append($xml('<step label="New Step"/>').append($xml('<components/>')));
			return progressIndicator;
		}
	}));
})(skuid);

/*
	The more you know!
	
	So you wanna make your subcomponents sortable, huh? Well the good news is that it
	is totally possible, and supported. The bad news is it can be a bit tricky. Lets get
	into it a little bit.

	The first thing that you need is child components. You're going to have to build a 
	child component builder (like the step builder I've made in this file), and additionally
	add those child components to the XML of the main component. Also, when you add the child
	components, you must give them a parent node that is not the root. For example

	This is WRONG
	<mycomponent>
		<step>1</step>
		<step>2</step>
		<step>3</step>
	</mycomponent>

	This is RIGHT
	<mycomponent>
		<steps>
			<step>1</step>
			<step>2</step>
			<step>3</step>
		</steps>
	</mycomponent>

	Not only is this more verbose and clear when reading the XML, but also it is necessarry
	for the jQuery.sortable plugin to work. Let's talk about that a bit now.

	The .sortableComponent function is a jQuery plugin that is part of SkuidBuilderCoreJS. 
	It is applied	to a dom element, then makes all the child elements of that element 
	sortable, while simultaneously updating the XML of the given component. Lets look at 
	how I did it in this file.

		component.stepsWrapper.sortableComponent({
			axis: 'x',
			component: component,
			parentStateSelector: 'steps'
		});

	We can see that I've applied .sortableComponent to "component.stepsWrapper", which is the
	div that I've stored all of my steps div. I've chosen the x axis, my parent component is
	"component", and the parentStateSelector is "steps", which is essentially the parent node
	to the corresponding elements that I will be sorting. This all works very nicely, but there
	is a caveat. ".sortableComponent" *does not work when the child elements are components
	themselves.* Any component that you want to be sortable, you must wrap in a non component
	div. Notice how in this file I have "disp.append(stepComponent.element);" I'm wrapping
	the actual component element in a display element. This also means that I have to manually
	trigger the on click event for "stepComponent.element". Once you have that all set up
	though, you should be good to go.

	<3 Andrew

*/
