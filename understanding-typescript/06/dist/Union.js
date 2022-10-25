"use strict";
function speedTest(s) {
    var speed;
    switch (s.type) {
        case 'bird':
            speed = s.fly;
            break;
        case 'horse':
            speed = s.run;
            break;
        default:
            break;
    }
    console.log('The animal speed is ' + speed);
}
speedTest({ type: 'bird', fly: 75 });
speedTest({ type: 'horse', run: 35 });
