var skor1 = 0;
var skor2 = 0;

function oyna(){
    var sayi1;
    var sayi2;

    document.getElementById("name1").innerText = document.getElementById("name1-in").value;
    document.getElementById("name2").innerText = document.getElementById("name2-in").value;



    if(skor1 == 10 || skor2 == 10){
        document.write(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>While</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css"
                integrity="sha512-YFENbnqHbCRmJt5d+9lHimyEMt8LKSNTMLSaHjvsclnZGICeY/0KYEeiHwD1Ux4Tcao0h60tdcMv+0GljvWyHg=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />


            <script src="/assets/js/loops-while.js"></script>
        </head>
        <body>
                <div class="container">
                    <div class="row justify-content-center align-items-center" style="height: 100vh;">
                        <div class="col-4 bg-success h-50">
                            <div class="card" style="margin-top: 150px;">
                                <div class="card-body">
                                    <p class="text-center">Tebrikler!\nKazanan: ${skor1>skor2?document.getElementById("name1").innerText:document.getElementById("name2").innerText}</p>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
        </body>
        </html>
        `)
    }

    sayi1 = Math.floor(Math.random()*6) + 1;
    sayi2 = Math.floor(Math.random()*6) + 1;

    if(sayi1 > sayi2){
        skor1++;
    }
    else if(sayi2 > sayi1){
        skor2++;
    }
    
    document.getElementById("resim1").innerHTML = `<img class="card-img" src="/zar/zar-${sayi1}.png" alt="">`
    document.getElementById("resim2").innerHTML = `<img class="card-img" src="/zar/zar-${sayi2}.png" alt="">`

    document.getElementById("skor1").innerText = skor1;
    document.getElementById("skor2").innerText = skor2;

    
}
