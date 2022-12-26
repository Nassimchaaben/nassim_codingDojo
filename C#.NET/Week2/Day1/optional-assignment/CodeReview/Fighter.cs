public class Fighter : Hunter 
{
    public double Skills {get;set;}

    public Fighter (string name , int age , double S) : base ( name,age) 
    {
        Skills = S;
    }
}