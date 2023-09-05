using System;
namespace polymorphism
{
	public class BackupProcess
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

        public virtual void Delete()
        {
            Console.WriteLine("b. Deleted Text");
        }
    }
}

