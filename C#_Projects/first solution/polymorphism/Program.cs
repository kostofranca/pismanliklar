namespace polymorphism;
class Program
{
    static void Main(string[] args)
    {
        // polymorphism class kullanımı
        // kalıtım yoluyla çalıştığında eğer aynı metodlar varsa birbirlerinin
        // yedekleri olarakoluşturulmuş olurlar. Eğer bir metod devre dışı kalırsa
        // kalıtım olarak verilen classın metodu devreye girer.

        Process process = new Process();

        process.writeText();
        process.readText();


    }
}

