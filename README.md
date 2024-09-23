Debouncing:
typing slow = 200ms
typing Fast = 30ms

Performance
iphone pro mx = 14 letter * 1000 people are there = 14 thousand api call made because every key stroke it will make api call
iphone pro mx = 3 API Calls * 1000 people are there = 3 thousand api call made

Debouncing  with 200ms
If the difference between the two key stroke is <200ms  - decline api call
> greater than 200ms then make a api call
