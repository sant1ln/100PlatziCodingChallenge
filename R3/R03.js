const FindOutSecoundsIn = (hours, minute) =>{

    const OneHourHave = 60; //Minutes
    const OneMinuteHave = 60; //Seconds

    let TotalMinutes = (hours * OneHourHave) + minute;
    let TotalSeconds = TotalMinutes * OneMinuteHave

    console.log(TotalSeconds)//116400
}

FindOutSecoundsIn(32,20);