namespace metod_exercise;
class Program
{
    static void Main(string[] args)
    {

        game();

    }

    public static string[] sehileriAl(int n_city)
    {
        string[] cities = new string[n_city];

        for (int i = 0; i < n_city; i++)
        {
            Console.Write($"{i + 1}. Şehri Giriniz: ");
            cities[i] = Console.ReadLine();
        }

        return cities;
    }

    public static void sehileriGoster(int n_city, string[] cities)
    {
        Console.WriteLine("Aşağıdaki Şehirlerden Birisini Seçiyorum. Sen de bil bakalım...");
        for (int i = 0; i < n_city; i++)
        {
            Console.Write($"{i + 1}. Şehir ");
            Console.WriteLine(cities[i]);
        }
    }

    public static int randomCityNumber(int n_city, string[] cities)
    {
        Random random = new Random();
        int rand_city = random.Next(0, n_city);

        return rand_city;

    }

    public static void game()
    {

        Console.Write("Kaç Şehir Olacağını Giriniz: ");
        int n_city = Convert.ToInt32(Console.ReadLine());

        string[] cities = sehileriAl(n_city);
        int skor_p = 0;
        int skor_n = 0;

        sehileriGoster(n_city, cities);

        int rand_city = randomCityNumber(n_city, cities);
        string tahmin;

        while (true)
        {

            Console.Write("Lütfen Tahmininizi Giriniz: ");
            tahmin = Console.ReadLine();

            if (tahmin == cities[rand_city])
            {
                skor_p++;
                Console.WriteLine($"Tebrikler Bildiniz.\nDoğru skorunuz: {skor_p}");
                rand_city = randomCityNumber(n_city, cities);
            }
            else
            {
                skor_n++;
                Console.WriteLine($"Üzgünüm Bilemediniz. Tekrar Deneyiniz...\nYanlış Skorunuz: {skor_n}");
                rand_city = randomCityNumber(n_city, cities);
            }

            if (skor_p == 5)
            {
                Console.WriteLine("Kazandınız!");
                break;
            }

            if (skor_n == 10)
            {
                Console.WriteLine("Kaybettiniz!");
                break;
            }
        }

    }
}
