define(['react','./component.js'],function (React,Component) {
	
   	var ComponentList = React.createClass({displayName: 'ComponentList', 
    	getInitialState : function () {
            return { filter : '' };
    	},
    	handleInput : function () {
    		console.log(this.refs.search.getDOMNode().value)
    		this.setState({ filter : this.refs.search.getDOMNode().value });
    	},
    	render : function () {
    		var filterList = this.props.data.filter(function (item) {
                var patt = new RegExp(this.state.filter);
                return patt.test(item.name);  
    		}.bind(this));
    		var list = filterList.map(function (item) {
    				return (
                        React.createElement(Component, {data: item})
    				);
    			});
    		return (
    			React.createElement("div", {className: "listComp"}, 
    			    React.createElement("div", {className: "row"}, 
	                    React.createElement("div", {className: "search large-4 columns"}, 
		    				React.createElement("input", {type: "text", className: "search", ref: "search", onInput: this.handleInput})
		    			)
		    		), 	
	    			React.createElement("table", {className: "large-12 columns providersList"}, 
		    			React.createElement("thead", null, 
		    			    React.createElement("tr", null, 
		    			      	React.createElement("th", null, "Component"), 
		    			      	React.createElement("th", null, "Last update"), 
		    			      	React.createElement("th", null, "Donwloads")
		    			    )
                        ), 
	                    React.createElement("tbody", null, 
	                    	list
	                    )
	    			)
	    		)	
    		);
    	}
    });

	return ComponentList;
});