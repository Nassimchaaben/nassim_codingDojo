// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// int[] Array = {0,1,2,3,4,5,6,8,9};

int[] array;
array = new int[] {0,1,2,3,4,5,6,8,9};

Console.WriteLine(array);

string[] array1;
array1 = new string []{"Tim", "Martin", "Nikki",  "Sara"};
Console.WriteLine(array1);

Boolean[] array3;
array3 = new Boolean[]{true,false,true,false,true,false,true,false,true,false};

List<string> flavor = new List<string>();
//Use the Add function in a similar fashion to push
flavor.Add("strowberry");
flavor.Add("chocolate");
flavor.Add("speculose");
flavor.Add("crunch");
flavor.Add("ornage");

flavor.Remove("crunch");

Dictionary<string,string> profile = new Dictionary<string,string>();
//Almost all the methods that exists with Lists are the same with Dictionaries
Random rand = new Random();

for(int val = 0; val < profile.Count; val++)
{
rand.Next(0,profile.Count);
profile.Add(array1[0], flavor[0]);
profile.Add(array1[1], flavor[1]);
profile.Add(array1[2], flavor[2]);
profile.Add(array1[3], flavor[3]);
}

// Console.WriteLine(rand.Next(0,profile.Count));


foreach (KeyValuePair<string,string> entry in profile)
{
    Console.WriteLine(array1[0] + " - " + flavor[0]);
}
// Console.WriteLine("Instructor Profile");
// Console.WriteLine("Name - " + profile["Name"]);
// Console.WriteLine("From - " + profile["Location"]);
// Console.WriteLine("Favorite Language - " + profile["Language"]);





//Accessing a generic list value is the same as you would an array
Console.WriteLine($"We currently know of {flavor.Count} flavor.");
Console.WriteLine(flavor[3]); //Prints "crunch"

