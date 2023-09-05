using System;

namespace classes
{
	public class Test_class
	{
        static int b = 0;
        public void hesap( int a )
        {
            b += a;
            Console.WriteLine(b);
        }

        public static void hesap2(int a)
        {
            b += a;

            Console.WriteLine(b);
        }
    }
}

