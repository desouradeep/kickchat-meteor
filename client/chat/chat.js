function size_elements () {
    height = $(window).height()
    $('#chat-container').height(height - 50)
    $('#chat-content').height(height - 93)
}
function scroll_down () {
    objDiv = document.getElementById("chat-content");
    objDiv.scrollTop = objDiv.scrollHeight;
}
function send_message_from_client () {
    var name = Meteor.user().username
    var message = $('#message-box').val()
    var time = new Date(Date.now())
    var time_stamp = time.toLocaleString()
    var data = { name: name, message: message, time: time_stamp }
    Meteor.call("send_message", data, function(error, user_id) {
        $('#message-box').val('')
    });

}
$(document).ready(function(){
    $(window).resize(function(){
        size_elements();
    });

    size_elements();

    $('#send').click(function(){
        send_message_from_client('new_message');
      });
    $("#message-box").keyup(function (e) {
        if (e.keyCode == 13)
            send_message_from_client('new_message');
    });

});

Template.messages.chat_messages = function(){
    return Messages.find({}, { sort: {$natural:-1}});
}

Template.messages.rendered = function(){
    scroll_down();
};
