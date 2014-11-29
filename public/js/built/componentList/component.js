define(['react','backbone'],function (React,Backbone) {

    var Author = React.createClass({displayName: 'Author',
    	render : function () {
    		var style = {
               'font-size' : '16px'
    		};
    		return (
 				React.createElement("span", {style: style},  ' by ' + this.props.name)
    		);
    	}
    });

	var Component = React.createClass({displayName: 'Component',
    	componentDidMount : function () {
            this.props.href = this.props.data.name;
    	},
    	render : function () {
    		return (
    			React.createElement("tr", {onClick: this.handleClick}, 
                    React.createElement("td", null, 			   
	    			  	React.createElement("h2", {className: "componentName"}, this.props.data.name, 
	    			  	React.createElement("span", {className: "author"}, ' by ' + this.props.data.author)	
	    			  	), 
	    			  	React.createElement("p", null, this.props.data.description)
	    			), 
	    			React.createElement("td", null, "2 week ago"), 
	    			React.createElement("td", null, "456")	
    			)
    		);
    	},
    	handleClick : function () {
    		var r = new Backbone.Router();
    		r.navigate(this.props.href);
    	}
    });

	return Component;

});