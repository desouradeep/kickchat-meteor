Meteor.methods({
    send_message: function(data) {
        console.log(data)
        Messages.insert({ 
            name: data.name,
            message: data.message,
            time: data.time 
        })
        return 1
    },
});

