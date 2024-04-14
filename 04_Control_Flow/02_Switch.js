//basic syntax for switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 2
switch (month) {
    case 1:
        console.log('Month is Jan');
        break;
    case 2:
        console.log('Month is Feb');
        break;
    case 3:
        console.log('Month is March');
        break;
    case 4:
        console.log('Month is April');
        break;
    case 5:
        console.log('Month is May');
        break;
    default:
        console.log('Month falls after May');
        break;
}


//break keyword is important because it stops the further flow of code once the condition is satisfied
//if break is not written after a case then code will print all the next conditions untill it finds the next break except default
//default is like else in (if, else), if no case is matched default case is executed
