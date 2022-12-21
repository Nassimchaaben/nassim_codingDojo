public class Human
{
    // Properties for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    public int Health;
    // Add a constructor that takes a value to set Name, and set the remaining fields to default values

public Human (string n ) 
{
    Name = n ;
    Strength = 3;
    Intelligence = 3;
    Dexterity = 3 ;
    Health = 100;
}
     
    // Add a constructor to assign custom values to all fields

public Human (string n , int s , int i , int d ,int h)
{
    Name = n ;
    Strength = s;
    Intelligence = i;
    Dexterity = d ;
    Health = h;
}

     
    // Build Attack method
public int Attack(Human target)
    {
      int damage = Strength * 3;
        target.Health -= damage;
        Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!");
        return target.Health;
    }
}