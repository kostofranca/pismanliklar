using System;
namespace polymorphism
{
	public class Process: BackupProcess
	{
        public void writeText()
        {
            Console.WriteLine("Hello World!");
        }
        public void readText()
        {
            Console.Write(" Enter  Text: ");
            string text = Console.ReadLine();
            Console.WriteLine("Entered Text: " + text);
        }
        public override void Delete() // override edilecek olan metod kalıtım yapılan
                                     // metodda olması gerekmez
        {
            Console.WriteLine("b. Deleted Text");
        }
    }
}