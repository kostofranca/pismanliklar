

namespace firstProject;

internal class Program
{
    static int Sum(int a, int b)
    {
        return a + b;
    }

    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, Ahmet");
        Console.WriteLine("\nBitti");

        // Integer variables
        byte number = 15; // +- 128
        short number2 = 250; // +- 32000
        ushort number3 = 300; // +64000 eksili değerleri almıyor.
        int a = 3; // 2147000000
        long x = 20;
        ulong y = 12;

        // Float vaiables
        float variable = 15.8f; // Bilgisayar dilindeki float
        double var = 25.7; // kullanıcı tarafındaki değişken
        decimal c = 23.6m;

        // Bool variables
        bool state = true;

        // char variables
        string name = "Ahmet Kasım";
        char digit = 'E';

        Console.WriteLine(digit + 0);

        // Arithmatic Oprts
        // + - * / %
        Console.WriteLine(name + digit);


        // Assignment oprts
        // = += -= *= /= %=
        Console.WriteLine("Değer Giriniz: \n");
        string input;
        input = Console.ReadLine() + "";
        Console.WriteLine("Girdiğiniz değer: " + input);

        Console.WriteLine("Sayi Giriniz: \n");
        int sayi1 = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Girdiğiniz değer: " + input +"\nGirilen sayi: " + sayi1*2);

    }

}