

namespace Fundamental
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] testArray = new int[]
            {
                23, 34, 12, 51, 1, 2, -1, -244, 1000
            };
         
            int[] odds = Practice.OddArray();
            object[] objArr = Practice.NumToString(testArray);


        }
    }
}
