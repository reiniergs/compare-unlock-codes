define(['react','./component.js'],function (React,Component) {
	
   	var ComponentList = React.createClass({ 
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
                        <Component data={item}/>
    				);
    			});
    		return (
    			<div className="listComp">
    			    <div className="row">
	                    <div className="search large-4 columns">
		    				<input type="text" className="search" ref="search" onInput={this.handleInput} />
		    			</div>
		    		</div>	
	    			<table className='large-12 columns providersList'>
		    			<thead>
		    			    <tr>
		    			      	<th>Component</th>
		    			      	<th>Last update</th>
		    			      	<th>Donwloads</th>
		    			    </tr>
                        </thead>
	                    <tbody>
	                    	{list} 
	                    </tbody>
	    			</table>
	    		</div>	
    		);
    	}
    });

	return ComponentList;
});