import pyttsx3
import sys
# input string as command line argument to say text
engine = pyttsx3.init()
engine.say(str(sys.argv[1]))
engine.runAndWait()





