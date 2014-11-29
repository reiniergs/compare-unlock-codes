define(['react'],function (React) {
  
    var Content = React.createClass({displayName: 'Content',
    	render : function () {
    		return (
                React.createElement("h2", null, "Content here!")
    		);
    	}	
    });

   return Content;
});