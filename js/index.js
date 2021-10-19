// Iteration 1: Names and Input
var hacker1 = "Snehith";
console.log(`hacker1 name is ${hacker1}.`);
var hacker2 = "Ana";
console.log(`Hacker1 name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
  }else if (hacker2.length > hacker1.length){
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
  }else{
  console.log(`Wow, you both have equally long names, same characters!`)
  }

// Iteration 3: Loops
//3.1

hacker1 = hacker1.split("").join(" ");
//3.2
function reverseString(hacker1){
  return hacker1.split("").reverse().join("")
}
console.log(reverseString("Snehith"));
//3.3

function lexOrder(hacker1, hacker2) {
    if(hacker1 === hacker2) {
        return `What?! You both have the same name?`;
    }

   else if (hacker1 > hacker2) {
        return `The ${hacker1} name goes first`;
    }else

    return `Yo, the ${hacker2} goes first definitely`;
}

console.log(lexOrder("snehith", "ana"));
//bonus1
var str  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula lectus, gravida at hendrerit a, condimentum ac odio. Morbi pulvinar urna quis arcu consequat condimentum. Integer non pharetra sapien. Cras hendrerit fringilla urna, id ornare ex ornare finibus. Aenean cursus dignissim erat eu euismod. Curabitur placerat ac erat ut vehicula. Sed iaculis ante quis odio suscipit, et ornare dolor placerat. Sed tempus quam ut nibh egestas cursus.Aliquam fermentum elit eu nunc laoreet, pretium rutrum dui mollis. Nunc dignissim mauris non gravida vulputate. Nulla rutrum lectus nisl, ut venenatis tortor elementum in. Praesent felis felis, finibus non sollicitudin in, gravida quis tortor. Ut semper ac tortor sit amet malesuada. Donec sollicitudin eleifend nulla, at sodales magna aliquet eget. Donec fringilla finibus orci. Nulla facilisi. Nam vel augue ante.Vivamus ac libero lacus. Phasellus faucibus metus ut risus mattis scelerisque. Quisque vel diam ut sem facilisis rutrum vitae et elit. Donec maximus, tellus a tincidunt porttitor, nisi libero tempus sem, sed imperdiet ipsum sem ultrices nulla. Morbi mattis imperdiet enim eget euismod. Aenean nec leo vitae sem tincidunt porttitor eu ut augue. Integer eleifend vel nibh non tincidunt. Vivamus bibendum, dolor ut venenatis volutpat, mauris sem pellentesque nisl, vitae accumsan leo libero at metus. Nam quam purus, lacinia ut convallis et, placerat et nisi. Pellentesque elementum sem vitae ultrices luctus. Cras ac dui pretium, imperdiet erat volutpat, fermentum est. Integer fringilla, sapien sit amet finibus pellentesque, massa velit tincidunt ligula, sed semper felis ipsum auctor ipsum."
var wordCount = str.match(/(\w+)/g).length;
console.log(wordCount);
//occerrence
function countOccurences(string,word){
    return string.split(word).length -1;
}
var str  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula lectus, gravida at hendrerit a, condimentum ac odio. Morbi pulvinar urna quis arcu consequat condimentum. Integer non pharetra sapien. Cras hendrerit fringilla urna, id ornare ex ornare finibus. Aenean cursus dignissim erat eu euismod. Curabitur placerat ac erat ut vehicula. Sed iaculis ante quis odio suscipit, et ornare dolor placerat. Sed tempus quam ut nibh egestas cursus.Aliquam fermentum elit eu nunc laoreet, pretium rutrum dui mollis. Nunc dignissim mauris non gravida vulputate. Nulla rutrum lectus nisl, ut venenatis tortor elementum in. Praesent felis felis, finibus non sollicitudin in, gravida quis tortor. Ut semper ac tortor sit amet malesuada. Donec sollicitudin eleifend nulla, at sodales magna aliquet eget. Donec fringilla finibus orci. Nulla facilisi. Nam vel augue ante.Vivamus ac libero lacus. Phasellus faucibus metus ut risus mattis scelerisque. Quisque vel diam ut sem facilisis rutrum vitae et elit. Donec maximus, tellus a tincidunt porttitor, nisi libero tempus sem, sed imperdiet ipsum sem ultrices nulla. Morbi mattis imperdiet enim eget euismod. Aenean nec leo vitae sem tincidunt porttitor eu ut augue. Integer eleifend vel nibh non tincidunt. Vivamus bibendum, dolor ut venenatis volutpat, mauris sem pellentesque nisl, vitae accumsan leo libero at metus. Nam quam purus, lacinia ut convallis et, placerat et nisi. Pellentesque elementum sem vitae ultrices luctus. Cras ac dui pretium, imperdiet erat volutpat, fermentum est. Integer fringilla, sapien sit amet finibus pellentesque, massa velit tincidunt ligula, sed semper felis ipsum auctor ipsum."
var count = countOccurences(str,"et");
//bonus 
function checkPolindrome(str){
    const len = string.length;
    for(let i = 0; i < len/2;i++){
        if(string[i] !== [string - 1 -i]){
            return `it is not polidrome`;
        }
    }
    return `it is polidrome`
}
const string = promt(`string is: "put it up"`);
const value = checkPolindrome(string);
console.log(value);