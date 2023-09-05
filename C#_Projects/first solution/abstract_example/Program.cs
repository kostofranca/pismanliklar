namespace abstract_example;
class Program
{
    static void Main(string[] args)
    {
        Child_class.Telefon();
        Child_class.Hesap();

        Parent_2.Para(); // Abstarct classlar içerisinde static metodlar var ise bunlar erişim sağlayabilriiz
                         // Fakat normal metodlara erişim yapmak için abstract metodu yeni bir nesne alarak oluşturmamız gerekmez.
                         // abstact classlardan nesne oluşturulmaz
                         //Parent_2 dede = new Parent_2();

        
    }
}

