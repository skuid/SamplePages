(function(skuid){
	skuid.componentType.register('progressindicator__progress_indicator', function(element, xmlDef, component){
		var $ = skuid.jQuery;
		var id = component.element.attr('id');

		// Our outer content div
		var content = $('<div class="progress-indicator">');
		var cTable = $('<table>');
		var cRow = $('<tr>');

		// Get all of our steps
		var steps = xmlDef.children('steps').children();

		// Iterate through each of our step, and create a 
		// corresponding td element with the proper classes
		// and content
		for (var i = 0; i < steps.length; i++) {
			var td = $('<td class="progress-chunk" data-id="' + steps[i].attributes['data-id'].value + '">');
			
			var text = $('<div class="progress-text">');
			var icon = steps[i].attributes.icon;
			if(icon && icon.value){
				text.append($('<div>').addClass('nx-step-icon ' + icon.value + ' sk-icon inline'));
			}
			text.append('<div class="text-content">' + steps[i].attributes.label.value + '</div>');

			td.append(text);
			td.append('<div class="progress-triangle"></div>');
			td.append('<div class="progress-triangle-outline"></div>');
			cRow.append(td);
		}

		// Add the table to our wrapper content div
		content.append(cTable.append(cRow));

		// Add our content div to the actual component
		component.element.html('');
		component.element.append(content);

		var currentStepColor = xmlDef.attr('current-color');
		var futureStepColor = xmlDef.attr('future-color');
		var doneStepColor = xmlDef.attr('done-color');

		// Make sure it's not undefined or white space
		if(currentStepColor !== undefined && currentStepColor.split(/\s*/).join() !== ''){
			var style = '<style>#' + id + ' .progress-chunk.current {background: red !important;} #' + id + ' .progress-chunk.current .progress-triangle {border-left-color: red;}</style>';
			style = style.split('red').join(currentStepColor);
			component.element.append(style);
		}

		if(doneStepColor !== undefined && doneStepColor.split(/\s*/).join() !== ''){
			var style = '<style>#' + id + ' .progress-chunk.done {background: red !important;} #' + id + ' .progress-chunk.done .progress-triangle {border-left-color: red;}</style>';
			style = style.split('red').join(doneStepColor);
			component.element.append(style);
		}

		if(futureStepColor !== undefined && futureStepColor.split(/\s*/).join() !== ''){
			var style = '<style>#' + id + ' .progress-chunk {background: red !important;} #' + id + ' .progress-chunk .progress-triangle {border-left-color: red;}</style>';
			style = style.split('red').join(futureStepColor);
			component.element.append(style);
		}

		var updateIndex = function(index){
			for (var i = 0; i < steps.length; i++) {
				var td = component.element.find('[data-id="' + steps[i].attributes['data-id'].value + '"]');

				// Clear out all the classes from our element
				td.removeClass('done previous current');

				// Give it the proper ones now
				if(i < index){
					td.addClass('done');
				}
				if(i == index - 1){
					td.addClass('previous');
				}
				else if(i == index){
					td.addClass('current');
				}
			}
		};

		// Set the step initial index 
		updateIndex(0);

		// Bind this component to its firend component
		var bindFriend = function(){
			// If it's already been set
			if(friendComponent)
				return;
			
			// The friend of this components is how this
			// component will determine when to update itself

			var friendComponent = $('#' + xmlDef.attr('friendId'));
			
			// Make sure the friend component exists
			if(friendComponent){

				// Check if the friend component is a tabset
				if(friendComponent.hasClass('ui-tabs')){
					// Add the hoverable class to our step elements
					// since the tabset should be navigatable
					component.element.find('td').addClass('hoverable');
					updateIndex(friendComponent.tabs('option', 'active'));

					// Add a listener to when the tabs are activated
					friendComponent.on('tabsbeforeactivate', function(e, ui) {
						console.log('ui', ui);
						var index = ui.newTab.index();
						updateIndex(index);
					});

					// Add a listener to when our steps are activated
					content.find('td').on('click', function(e){
						var $el = $(this);
						friendComponent.tabs('option', 'active', $el.index());
					});
				}
				// Otherwise assume that the friend is a wizard
				else{
					// Add a listener to when the steps are progressed
					skuid.events.subscribe('skuid.wizard.stepShow', function(data){
						updateIndex(data.step.element.index());
					});
				}
			}
		}


		// This first call will call whenever the Progress Indicator is actually 
		// rendered
		bindFriend()
		// This second one will be called when the page is done loading
		$(document).one('pageload', bindFriend);
	});
})(skuid);
