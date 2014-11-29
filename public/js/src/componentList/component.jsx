define(['react','backbone'],function (React,Backbone) {

    var Author = React.createClass({
    	render : function () {
    		var style = {
               'font-size' : '16px'
    		};
    		return (
 				<span style={style}>{ ' by ' + this.props.name}</span>
    		);
    	}
    });

	var Component = React.createClass({
    	componentDidMount : function () {
            this.props.href = this.props.data.name;
    	},
    	render : function () {
    		return (
    			<tr onClick={this.handleClick}>
                    <td>    			   
	    			  	<h2 className="componentName">{this.props.data.name}
	    			  	<span className="author">{' by ' + this.props.data.author}</span>	
	    			  	</h2>
	    			  	<p>{this.props.data.description}</p>
	    			</td> 
	    			<td>2 week ago</td>
	    			<td>456</td> 	
    			</tr>
    		);
    	},
    	handleClick : function () {
    		var r = new Backbone.Router();
    		r.navigate(this.props.href);
    	}
    });

	return Component;

});