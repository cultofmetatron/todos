define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el: function() {
                return $('#todos > ul.todoList');
        },
        render:function() {
            console.log("inside the todoItemView  render function");

            var context = {
                ident:this.model.id,
                title:this.model.get('title'),
                checked:this.model.get('checked'),
            }
            var compiledTemplate = Handlebars.compile(todoTemplate);
            var contextualized = compiledTemplate(context);
            this.$el.append(contextualized);
            //return contextualized;
        },
        events: function(){
            var events = {};
            //handle the delete event
            events["click li#" + this.model.id + ' a.destroy'] = "destructo";
            events["change li#" + this.model.id + ' input[type=checkbox]'] = "oncheck";

            return events;
        },
        oncheck: function(e) {
            var item =  $("li#" +  this.model.id);
            var checkbox = $(item).find("input[type=checkbox]")           //checkbox = true;
            var checked = checkbox[0].checked;
            if (checked) {
                this.model.set({checked:true});
                this.model.save();

                $(item).find('p.info').addClass('done');
            } else {
                this.model.set({checked:false});
                this.model.save();
                $(item).find('p.info').removeClass('done');

            }

        },
        destructo:function(e) {
            e.preventDefault();
            console.log("destroying ", this.model.id);
            var $li = $('li#' + this.model.id ).fadeOut('slow', function() {
                $li.remove();
            })
            this.model.destroy();
        }

    })

    return TodoItemView;
})
