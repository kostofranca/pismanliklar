namespace firstProject;

internal class Program
{ 

    private static void Main(string[] args)
    {

        Console.WriteLine("Hesap Makinesi");
        Console.WriteLine("--------------");

        Console.WriteLine("1. Sayıyı Giriniz: \n");
        double number1 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("2. Sayıyı Giriniz: \n");
        double number2 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Operatör Giriniz: \n");
        char oprt;

        dene:
        try
        {
            Console.WriteLine("Operatör Giriniz (+-*/): \n");
            oprt = Convert.ToChar(Console.ReadLine());
        }
        catch
        {
            Console.WriteLine("Hatalı Girdiniz");
            goto dene;
        }

        if(oprt == '+')
        {
            Console.WriteLine("Sonuç: " + (number1 + number2));
        }
        else if(oprt == '-')
        {
            Console.WriteLine("Sonuç: " + (number1 - number2));
        }
        else if (oprt == '*')
        {
            Console.WriteLine("Sonuç: " + number1 * number2);
        }
        else
        {
            Console.WriteLine("Sonuç: " + (number1 / number2));
        }
    }
}