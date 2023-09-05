using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

namespace HesapMakinesi
{
    internal class Program
    {
        static void Main(string[] args)
        {

            bool status = true;
            while (status)
            {

            Console.WriteLine("----------------------------");
            Console.WriteLine("Günlük Makro Besin Hesaplama");
            Console.WriteLine("----------------------------");

            Console.WriteLine("İsim Giriniz: ");
            string ad_soyad = Console.ReadLine();

            Console.WriteLine("Cinsiyet Giriniz: (E - K)");
            string cins = Console.ReadLine().ToLower().Substring(0, 1);
            int cinsiyet = cins == "e" ? 6 : -161;
            string cinsiyetYaz = cins == "e" ? "Erkek" : "Kadın";

            Console.WriteLine("Yaş ");
            int yas = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Kilo ");
            int kilo = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Boy Giriniz: (cm) ");
            double boy = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Hareket Katsayısını Giriniz: ");
            Console.WriteLine("Hareketsiz (1)");
            Console.WriteLine("Hafif Aktif (2)");
            Console.WriteLine("Orta Derecede Aktif (3)");
            Console.WriteLine("Çok Aktif (4)");
            Console.WriteLine("Ekstra Aktif (5)");

            int h_katsayısı = Convert.ToInt32(Console.ReadLine());

            double derece = h_katsayısı == 1 ? 1.2 :
                            h_katsayısı == 2 ? 1.375 :
                            h_katsayısı == 3 ? 1.55 :
                            h_katsayısı == 4 ? 1.725 :
                            h_katsayısı == 5 ? 1.9 : 1.55;


            double kal_gun = (10 * kilo + 6.25 * boy - 5 * yas + cinsiyet) * derece;

            double makroKar = kal_gun * .65;
            double makroYag = kal_gun * .20;
            double makroPro = kal_gun * .20;

            double makroKarG = (kal_gun * .65) / 4;
            double makroYagG = (kal_gun * .20) / 9;
            double makroProG = (kal_gun * .20) / 4;

            Console.WriteLine("------Kişisel Bilgiler-----------------------");
            Console.WriteLine("Ad-Soyad: " + ad_soyad);
            Console.WriteLine("Cinsiyet: " + (cinsiyetYaz));
            Console.WriteLine("Yaş: " + yas);
            Console.WriteLine("Boy: " + boy);
            Console.WriteLine("Kilo: " + kilo);

            Console.WriteLine("---------- Günlük Kalori İhtiyacı -----------");

            Console.WriteLine("Toplam Kalori İhtiyacı: " + Math.Round(kal_gun,3));
            Console.WriteLine("Karbonhidrat İhtiyacı: " + Math.Round(makroKar), 3);
            Console.WriteLine("Yağ İhtiyacı: " + Math.Round(makroYag, 3));
            Console.WriteLine("Protein İhtiyacı: " + Math.Round(makroPro, 3));

            Console.WriteLine("---------- Günlük Gram İhtiyacı -------------");

            Console.WriteLine("Karbonhidrat İhtiyacı: " + Math.Round(makroKarG, 3));
            Console.WriteLine("Yağ İhtiyacı: " + Math.Round(makroYagG, 3));
            Console.WriteLine("Protein İhtiyacı: " + Math.Round(makroProG, 3));

                Console.WriteLine("\n-------------------------------------------\n");

                while (true)
                {
                    Console.WriteLine("Başka Bir Hesaplama İçin (D) \nProgramı Kapatmak İçin (K)");
                    ConsoleKeyInfo basilanTus = Console.ReadKey();

                    if (basilanTus.Key.ToString().ToLower() == "k")
                    {
                        Console.WriteLine("\nProgram Sonlandı Ekranı Kapatmak İçin Bir Tuşa Basınız");
                        status = false;
                        break;
                    }
                    else if (basilanTus.Key.ToString().ToLower() == "d")
                    {
                        Console.WriteLine("\nYeni Veri Girişi İçin Bir Tuşa Basınız");
                        break;
                    }
                    else
                    {
                        Console.WriteLine("\nYanlış Bir Tuşa Basıldı Tekrar Deneyiniz");
                    }
                }
                Console.ReadKey();
                Console.Clear();
            }
        }
    }
}