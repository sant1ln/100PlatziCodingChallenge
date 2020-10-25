const memory_heap_1 = () =>{
    const characters = '#$%()/&'
    let memory = []
    for(let i=0;i<4;i++){
        let random = Math.floor(Math.random() * (0,7))
        memory.push(characters[random])
    }
    console.log(memory)
    return memory
}

memory_heap_1()
