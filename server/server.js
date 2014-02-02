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
    create_user: function(data) {
        console.log("CREATING USER");
        console.log(data)
        var USER_id = Meteor.users.insert({
            username: data.username,
            fullname: data.fullname,
            password: data.password,
            email: data.email,
        });
        return user_id;
    },
});

