import random

def memory_heap_1():
    characters = '#$%()/&'
    memory = []
    for i in range(4):
        rd_number = random.randrange(0,7)
        memory.append(characters[rd_number])
    print(memory)
    return memory

