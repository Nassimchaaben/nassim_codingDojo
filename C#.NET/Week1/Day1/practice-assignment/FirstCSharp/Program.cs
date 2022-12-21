// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
Random rand = new Random();
for(int val = 0; val < 10; val++)
{
    //Prints the next random value between 2 and 8
    // Console.WriteLine(rand.Next(2,8));
}

// int start = 0;
// int end = 255;
// // loop from start to end including end
// for (int i = start; i <= end; i++)
// {
//     Console.WriteLine(i);
// }

// int start = 0;
// int end = 100;
// // loop from start to end including end
// for (int i = start; i <= end; i++)
// {
// if (!((i%5==0)&&(i%3==0))){
//     if (i%3==0){
// Console.WriteLine(i);
//     } 
//     else if (i%5==0){
// Console.WriteLine(i);
//     }
// }
// }

// int start = 1;
// int end = 100;
// // loop from start to end including end
// for (int i = start; i <= end; i++)
// {
// if (i%5==0 && i%3==0){
//     Console.WriteLine(i+"FizzBuzz");

  
// }
//     else if (i%3==0)
//     {
//         Console.WriteLine(i+"Fizz");
//     } 
//     else if (i%5==0)
//     {
//         Console.WriteLine(i+"Buzz");
//     }
// }

int i = 1;
while (i < 100)
{
    if (i%5==0 && i%3==0){
    Console.WriteLine(i+"FizzBuzz");

  
}
    else if (i%3==0)
    {
        Console.WriteLine(i+"Fizz");
    } 
    else if (i%5==0)
    {
        Console.WriteLine(i+"Buzz");
    }
    i ++;
}