function size_elements () {
    height = $(window).height()
    $('#chat-container').height(height - 50)
    $('#chat-content').height(height - 93)
    scroll_down();
}
function scroll_down () {
    var objDiv = document.getElementById("chat-content");
    objDiv.scrollTop = objDiv.scrollHeight;
}
function send_message () {
    var name = "SDe"
    var message = $('#message-box').val()
    var time = new Date(Date.now())
    var time_stamp = time.toLocaleString()
    Messages.insert({ name: name, message: message, time: time_stamp })
    scroll_down();
    $('#message-box').val('')
    scroll_down();
}
$(document).ready(function(){
    $(window).resize(function(){
        size_elements();
    });

    size_elements();

    $('#send').click(function(){
          send_message('new_message');
           scroll_down();
      });
    $("#message-box").keyup(function (e) {
        if (e.keyCode == 13)
            send_message('new_message');
         scroll_down();
    });

    scroll_down();
});

Template.messages.messages = function(){
    return Messages.find({}, { sort: {$natural:-1}});
}