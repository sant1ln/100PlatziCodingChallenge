def FindOutSecoundsIn(hour,minutes):
    one_hour_have = 60;
    one_minute_have = 60;

    total_minutes = (hour * one_hour_have)+minutes;
    total_seconds = (total_minutes * one_minute_have);

    print(total_seconds)


FindOutSecoundsIn(32,20)
