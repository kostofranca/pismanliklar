using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetodsExample
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //5 farklı metod bulunmakta

            /*
                1. Değer almayan değer döndürmeyen
                2. Değer alan değer döndürmeyen
                3. Değer almayan değer döndüre (return)
                4. Değer alan değer döndren (retrun

                5. constractor metod - classın adından türeyen metod
                class nesnesi oluştuğunda çalışan metod türü

             */

            /*
                public metod
                başka classlarda ve kendi classında çalışan metod türü

                private metod
                sadece kendi classında çalışan metod türü

                static 
                kendi classında class nesnesi oluşturulmadan çağırılan metod yapısıdır

                diğer classlarda ise classın adi ile beraber gelir 
                Program.metod1();

                statik olmayan metodlarda ise class nesnesi oluşturulup cağırılır.
                Program program=new Program();
                program.metod1();
             */

            Program prgm = new Program();//class nesnesi oluşturma
            prgm.metod1();//oluşturulan class nesnesi ile metodu çağırma

            metod2();
            Program.metod2();

            Console.ReadKey();

        }

        //Değer almayan değer döndürmeyen metod

        public void metod1()//normal metod ise sadece class nesnesi oluşturulacak çalışır
        {
            Console.WriteLine("Metod 1");
        }

        public static void metod2()//static metod yapısı bulunduğu classta serbest bir şekilde çalışır
        {
            Console.WriteLine("Metod 2");
        }

        private void metod3() // Kendi classında bir şey değiştirmiyor
        {

        }

        class MyClass
        {
            public void example()
            {
                Program prgrm = new Program();
                prgrm.
            }
        }

    }
}
