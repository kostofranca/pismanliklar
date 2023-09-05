namespace classes;


class Program:Abstract_Classes // soyut class başka bir class üzerinden inherit edilebilir
{
    static void Main(string[] args)
    {
        /*
        Calculator calculator = new Calculator();

        Console.Write("Lütfen birinci sayıyı giriniz: ");
        int n1 = Convert.ToInt32( Console.ReadLine());

        Console.Write("Lütfen ikinci sayıyı giriniz: ");
        int n2 = Convert.ToInt32(Console.ReadLine());

        Console.Write("Lütfen işlemi giriniz: ");
        string oprt = Console.ReadLine();

        switch (oprt)
        {
            case ("+"):
                Console.WriteLine("static metod sonucu: " + Calculator.S_Sum(n1, n2));
                Console.WriteLine("public metod sonucu: " + calculator.Sum(n1, n2));
                break;
            case ("-"):
                Console.WriteLine("static metod sonucu: " + Calculator.S_Subtract(n1, n2));
                Console.WriteLine("public metod sonucu: " + calculator.Subtract(n1, n2));
                break;
            case ("*"):
                Console.WriteLine("static metod sonucu: " + Calculator.S_Multiply(n1, n2));
                Console.WriteLine("public metod sonucu: " + calculator.Multiply(n1, n2));
                break;
            case ("/"):
                Console.WriteLine("static metod sonucu: " + Calculator.S_Divide(n1, n2));
                Console.WriteLine("public metod sonucu: " + calculator.Divide(n1, n2));
                break;
        }
        
        Console.ReadKey();
        */

        // Abstarct Classes
        // Nesnesi oluşturulamayan ve sadece başka bir class üzerinden çalıştırılabilir

        int n1 = 2;
        int n2 = 4;

        Calculator calculator = new Calculator();
        //Abstract_Classes abs_test = new Abstract_Classes(); // Soyut olduğu için sadece kalıtım ile ulaşmamız gerekiyor.


        calculator.Sum(n1, n2);

        Program program = new Program();
        program.Abs_Test();



        Console.ReadKey();
    }
}

