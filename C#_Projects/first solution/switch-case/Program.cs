using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HesapMakinesi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Diziler

            /*
            int[] sayilar = new int[5];//index durumu 0(sıfır)dan başlar n-1 kadar gider
            string[] names = new string[5];

            sayilar[0] = 5;
            sayilar[1] = 10;
            sayilar[2] = 20;
            sayilar[3] = 30;
            sayilar[4] = 40;
            //sayilar[5] = 50;//dizi boyutu

            int[] numaralar = { 1, 2, 3, 4 };//önceden değer tanımlanabilir
            //int[] numaralar=new int[4];

            //Console.WriteLine(numaralar[2]);//index değeri ile ekrana yazma
            //Console.WriteLine("-----");
            for (int i = 0; i < sayilar.Length; i++)
            {
                Console.WriteLine(sayilar[i]);
            }
            //Console.WriteLine("-----");

            foreach (int sayi in sayilar)
            {
                Console.WriteLine(sayi);
            }
            //Console.WriteLine("-----");

            int status = 0;
            while (status < sayilar.Length)
            {
                //Console.WriteLine(sayilar[status]);
                status++;
            }

            //Console.WriteLine("-----");

            int durum = 0;
            do
            {
                //Console.WriteLine(sayilar[durum]);
                durum++;
            }
            while (durum < sayilar.Length);

            //Console.ReadKey();
            */
            // ---------------------------

            /*
            Console.WriteLine("------Kullanıcı Listesi Oluşturma-------");
            Console.WriteLine("----------------------------------------");
            Console.WriteLine("---Listede Kaç Kullanıcı Olacak?--------");
            Console.WriteLine("Kiş Sayısı: ");

            int num = Convert.ToInt32(Console.ReadLine());

            string[] users = new string[num];
            Console.WriteLine("----{0} Kişilik liste oluşuruldu-----", num);

            Console.WriteLine("---- Listeye Kullanıcı Ekle-----");

            for(int i = 0; i<num; i++)
            {
                Console.WriteLine((i + 1) + ". Kişiyi Ekle: ");
                users[i] = Console.ReadLine()+"";
            }

            Console.WriteLine("Kullanıcı Listesi ---------");
            for (int i = 0; i < num; i++)
            {

                Console.WriteLine(users[i]);
            }

            */

            // --------------------------------

            // Çok Boyutlu Diziler

            /*
            string[,] names = new string[2, 3]; // [satır, sütun]

            names[0, 0] = "Ahmet";
            names[0, 1] = "Erbay";
            names[0, 2] = "23";
            names[1, 0] = "Hatice";
            names[1, 1] = "Erbay";
            names[1, 2] = "24";

            for(int i = 0; i < names.GetLength(0); i++)
            {
                for(int j = 0; j < names.GetLength(1); j++)
                {
                    Console.WriteLine(names[i,j]);
                }
                Console.WriteLine();
            }
            */

            /*

            Console.WriteLine("Meyve Sayısı Giriniz: \n");
            int n_meyve = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Sebze Sayısını Giriniz: \n");
            int n_sebze = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Özellik Sayısını Giriniz: \n");
            int n_ozellik = Convert.ToInt32(Console.ReadLine());

            string[,,] manav = new string[n_meyve, n_sebze, n_ozellik];

            for (int i = 0; i < n_meyve; i++)
            {
                for (int j = 0; j < n_sebze; j++)
                {
                        Console.WriteLine($"{i + 1}. Meyveyi Giriniz: ");
                        manav[i, 0, 0] = Console.ReadLine();

                        Console.WriteLine($"{j + 1}. Sebzeyi Giriniz: ");
                        manav[i, j, 0] = Console.ReadLine();

                       
                }
            }

            Console.WriteLine("Manav Meyve-Sebze Listesi");

            for (int i = 0; i < n_meyve; i++)
            {
                Console.WriteLine(manav[i,0,0]);
            }

            */

            Console.Write("Kaç Adet Meyve:");
            int meyveAdet = Convert.ToInt32(Console.ReadLine());
            Console.Write("Kaç Adet Sebze:");
            int sebzeAdet = Convert.ToInt32(Console.ReadLine());
            Console.Write("Kaç Özellik Girilecek:");
            int ozellikSayisi = Convert.ToInt32(Console.ReadLine());
            string[,] liste = new string[meyveAdet + sebzeAdet, ozellikSayisi];

            Console.WriteLine("----------Meyve Bilgileri-------------");
            for (int i = 0; i < meyveAdet; i++)
            {
                for (int j = 0; j < ozellikSayisi; j++)
                {
                    Console.Write("{0}. Meyvenin {1}. Özelliği:", i + 1, j + 1);
                    liste[i, j] = Console.ReadLine();
                }
            }
            Console.WriteLine("--------Sebze Bilgileri----------");
            for (int i = meyveAdet; i < meyveAdet + sebzeAdet; i++)
            {

                for (int j = 0; j < ozellikSayisi; j++)
                {
                    Console.Write("{0}. Sebzenin {1}. Özelliği:", i - meyveAdet + 1, j + 1);
                    liste[i, j] = Console.ReadLine();
                }
            }

            Console.WriteLine("Meyve ve Sebze Listesi");
            for (int i = 0; i < liste.GetLength(0); i++)
            {
                Console.Write(i + 1 + ".");
                for (int j = 0; j < liste.GetLength(1); j++)
                {
                    Console.WriteLine("{0}. Özellik: {1}", j + 1, liste[i, j]);
                }
                Console.WriteLine();
            }
        }
    }
}