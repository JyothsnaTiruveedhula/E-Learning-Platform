document.getElementById('send-btn').addEventListener('click', function() {
    var input = document.getElementById('chat-input').value;
    var chatbox = document.getElementById('chatbox');
  
    // User's message
    chatbox.innerHTML += 'User: ' + input + '<br>';
  
    // Chatbot's response
    var response = getBotResponse(input);
    chatbox.innerHTML += 'Chatbot: ' + response + '<br>';
  
    // Clear input
    document.getElementById('chat-input').value = '';
  });
  
  function getBotResponse(input) {
    var response;
  
    switch(input.toLowerCase()) {
      case 'hello':
        response = 'Hi there!';
        break;
      case 'how are you':
        response = 'I\'m a bot, I don\'t have feelings, but thanks for asking!';
        break;
      case 'can u clarify my doubt' :
        response = 'yes sure! Go ahead!!!';
        break;
      default:
        response = 'I\'m sorry, I didn\'t understand that.';
    }
  
    return response;
  }
  