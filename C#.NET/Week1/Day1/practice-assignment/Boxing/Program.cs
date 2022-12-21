List<object> View = new List<object>();


View.Add(7);
View.Add(28);
View.Add(-1);
View.Add(true);
View.Add("chair");

int sum = 0 ;

foreach (var item in View)
{
    Console.WriteLine(item);
    if (item is int)
    {
        sum += (int)item;
    }
}
Console.WriteLine(sum);

