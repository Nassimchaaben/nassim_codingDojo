class Ninja
{
    private int Calori;
    public List<Food> FoodHistory;

    // add a constructor
    public Ninja()
    {
        Calori = 0;
        FoodHistory = new List<Food>();
    }

 
    bool IsFull
    {
        get
        {
            return Calori > 1200;
        }
    }

    
    public void Eat(Food i)
    {
        
        if (IsFull == false)
        {
            Calori += i.Calories;
            FoodHistory.Add(i);
            Console.WriteLine($"The ninja {i.Name}");
            if (i.IsSpicy)
                Console.WriteLine($" {i.Name} was spicy!!!");
            if (i.IsSweet)
                Console.WriteLine($" {i.Name} is so sweet.");
        }
        else
        {
            Console.WriteLine(" This ninja is  full!");
        }
    }
}