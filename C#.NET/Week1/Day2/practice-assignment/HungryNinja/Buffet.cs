public class Buffet
{
    public List<Food> Menu;
     
    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            new Food("Pizza", 500, false, false),
            new Food("Sandwish",700, true, false),
            new Food("Spaghetti",900, true, false),
            new Food("Makloub", 1000, true, false),
            new Food("icecream", 500, false, true),
            new Food("candy", 1200, false, true),
            new Food("orange", 300, false, true),
        };
    }
     
    public Food Serve()

    {
        Random rand = new Random();
        Food lunch = Menu [rand.Next(Menu.Count())];
        return lunch ;
    }
}
 