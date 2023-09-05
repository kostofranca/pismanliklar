using System;

namespace firstProject;

internal class Program
{

    private static void Main(string[] args)
    {
        Console.WriteLine("BMI HEsaplamaya Hoşgeldiniz!");
        Console.WriteLine("----------------------------");

        Console.WriteLine("Boyunuzu Giriniz (m): \n");
        double height = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Kilonuzu Giriniz (kg)");
        double weight = Convert.ToDouble(Console.ReadLine());

        double BMI;

    point:
        try
        {
            BMI = weight / (height*height);

            if(BMI > 35.0)
            {
                Console.WriteLine(Math.Round(BMI, 2) + " Az yesen de yaramaz sen doktora görün");
            }
            else if(BMI > 30.0)
            {
                Console.WriteLine(Math.Round(BMI, 2) + " Az ye");
            }
            else if (BMI > 25.0)
            {
                Console.WriteLine(Math.Round(BMI, 2) + " Az ye");
            }
            else if (BMI > 18.50)
            {
                Console.WriteLine(Math.Round(BMI, 2) + " Az ye");
            }
            else
            {
                Console.WriteLine(Math.Round(BMI, 2) + " Biraz ye");
            }
        }
        catch
        {
            Console.WriteLine("Hatalı giriş yaptınız");
            goto point;
        }

    }
}

