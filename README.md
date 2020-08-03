# Required
* espeak (or other speach synthesis that works with pyttsx3)
* python 2

# What is it
Raspberry pi that host a webserver
can send messages to server
rpi plays messages with tts 

# How to use
1. Run `pip install pyttsx3` then run `sudo apt-get install espeak`
2. Start server `node index.js` 
3. Connect to server (**Note**: you must change the ip in the **index.html** file)
4. Connect to the server running on port 3000
5. Input text in field and press enter or click the button to say a message

