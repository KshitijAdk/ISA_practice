# queston:answer
import time
now = time.ctime()

qna = {
    "Hi": "hello sir!",

    "how are you": "i am fine and you",
    "what is the time now": now,




}
while True:
    qs = input()

    if (qs == "quit"):
        break

    else:
        print(qna[qs])
