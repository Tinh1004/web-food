function card(id,img,title,cmt){
    this.id = id,
    this.img = img,
    this.title = title,
    this.cmt = cmt
}

var arrayCard = [
    new card(
        id = 1,
        img = "cf.jpg",
        title= 'Cà phê sữa - Feeltea',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 2,
        img = "comga.jpg",
        title= 'Cơm gà Hội An',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 3,
        img = "hutieu.jpg",
        title= 'Hủ tiếu Nam Vang',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 4,
        img = "miquang.jpg",
        title= 'Mì quảng Đà Nẵng',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 5,
        img = "banhmi.jpg",
        title= 'Bánh mì thịt nướng',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 6,
        img = "banhtran.jpg",
        title= 'Bánh tráng trộn',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 7,
        img = "bokho.jpg",
        title= 'Bò kho - Ba Hưng',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
    new card(
        id = 8,
        img = "comchien.jpg",
        title= 'Cơm chiên hải sản',
        cmt = '49 Hồ Biểu Chánh, Hải Châu,Đà Nẵng'
    ),
];

function indanhsachcard(arr){
    var showDiv = document.getElementsByClassName('body-today-card');
    var html = arr.map(card=>`
        <div class="today-card-subcard">
            <div class="subcard-image">
                <a href="#"><img src="assets/images/${card.img}" alt=""></a>
            </div>
            <div class="subcard-title">
                <h6><a href="#">${card.title}</a></h6>
                <p>${card.cmt}</p>
            </div>
        </div>
        `).join('');
        for(var i = 0;i<showDiv.length;i++){
            showDiv[i].innerHTML = html
        }
}
indanhsachcard(arrayCard);