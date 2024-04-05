const course = {
    couseName : "Js in hindi",
    courseInstructor : "Hitesh",
    price : "999"
}

//accessing vlaues from course object
console.log(course.courseInstructor);
//instead of writing this we can destructure object so that we have to write less every time we need access something from object

const {courseInstructor} = course
console.log(courseInstructor);      //now to access course instructor from course object we dont need to use dot operator

//another way of destructuring
const {courseInstructor : instructor} = course
console.log(instructor);


//Just like objects we can also destructure arrays

/*
    api - the values we get from backend is done using api and the there are different formats to wtite them
    earlier it was done in XML format but now its mostly in JSON

    JSON is also a type of object rather a special type of obj with no name
    but in json the keys are also a string and the values string, numbers or boolean

    eg:  
    {
        "course" : "js in hindi",
        "price": 999
        "mode" : "online"
    }


    sometimes we get api in the form of array
    eg:
    [
        {},
        {},
        {}
    ]

    here we can use different array methods to access values
*/