// NAMESPACES
var componentList = 'js/built/componentList/componentList.js';
var content = 'js/built/content/content.js';

define(['js/require-config.js'],function () {
   require(['backbone','react',componentList,content],function(Backbone,React,ComponentList,Content) {
  
    var components = [
        { name : 'Calendar', 
          namespace : 'js/built/calendar',
          description : 'Calendar for pick up a date o a range',
          author : 'Rey Guerra' 
        },
        { name : 'Chat', 
          namespace : 'js/built/chat',
          description : 'Complete Chat using REACT',
          author : 'Rey Guerra'
        }
    ];

    var AppRepository = React.createClass({
        render : function () {
            return (
                <div className="row">
                    <div className="large-12 columns">
                        <ComponentList data={this.props.data} />
                    </div>
                </div>    
            );
        }
    });

    var routerApp = Backbone.Router.extend({
         routes : {
         	''          : 'index',
            '*default'  : 'index'
         },
         index : function () {
         	React.render(
               <AppRepository data={components}/>,
               document.getElementById('react-app')
            );
         }   
 
    });
    var router = new routerApp(); 
    Backbone.history.start();

   }); 
});