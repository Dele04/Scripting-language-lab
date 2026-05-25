class QueueError(IndexError):
    pass


class Queue:
    def __init__(self):
        self.queue = []

    def put(self, elem):
        #append elements to the beginning of the list
        self.queue.insert(0, elem)

    def get(self):
        #remove elements from the end of the list
        if len(self.queue) > 0:
            elem = self.queue[-1]
            del self.queue[-1]
            return elem
        else:
            raise QueueError

#testing
que = Queue()
que.put(1)
que.put("dog")
que.put(False)

try:
    for i in range(4):
        print(que.get())
except QueueError:
    print("Queue error")
