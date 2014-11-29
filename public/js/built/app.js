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

    var AppRepository = React.createClass({displayName: 'AppRepository',
        render : function () {
            return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "large-12 columns"}, 
                        React.createElement(ComponentList, {data: this.props.data})
                    )
                )    
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
               React.createElement(AppRepository, {data: components}),
               document.getElementById('react-app')
            );
         }   
 
    });
    var router = new routerApp(); 
    Backbone.history.start();

   }); 
});