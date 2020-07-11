function RepeitWord(word,repets){
    console.log(word)
    if(repets == 1){
      return 1
    }
    RepeitWord(word,repets -1)
}

RepeitWord("Never Stop To Learn",2);