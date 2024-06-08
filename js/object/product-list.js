console.log('js/object/product-list.js 파일 진입');
// 상품 리스트 객체 관련 파일
// 세원 파트

// 프레임 색상과 소재 리스트
const frameColors = ["White", "Black", "Pink", "Grey", "Red", "Brown", "Clear", "Green", "Gold", "Blue", "Silver", "Yellow", "Other"];
const materials = ["Acetate", "Metal", "Combination"];

// 폴더에 있는 사진 파일 수
const sunglassesPhotoCount = 397;
const glassesPhotoCount = 156;

// 제품 객체가 크기 때문에 조건부로 로컬 스토리지에 저장
// 제품 등록이나 수정 페이지가 없으므로 총 553개 제품 고정으로 사용함
let productList = [];
if (!localStorage.getItem('productList')) {
    console.log('로컬 스토리지에 없으므로 제품리스트 등록하고 변수에 저장');
    productList = saveProductListToLocalStorage();
    localStorage.setItem('productList', JSON.stringify(productList));
} else {
    console.log('로컬 스토리지에 있음. 제품리스트 스토리지에 재등록 하지 않음');
    productList = saveProductListToLocalStorage();
}

function saveProductListToLocalStorage() {
    console.log('saveProductListToLocalStorage() 함수 진입');
    // 제품 리스트
    const productList = [
        {
            "productId": 1,
            "category": "Sunglasses",
            "modelName": "Brilliant Sky D03",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0000.jpg",
            "description": "Distinctive design for a standout look. Designed for everyday wear.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 2,
            "category": "Sunglasses",
            "modelName": "Refined Moon N22",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0001.jpg",
            "description": "Chic and contemporary design. Designed for everyday wear.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 3,
            "category": "Sunglasses",
            "modelName": "Magnificent Zephyr J88",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0002.jpg",
            "description": "Make a statement with these unique frames. An icon of style and elegance.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 4,
            "category": "Sunglasses",
            "modelName": "Splendid Field R15",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0003.jpg",
            "description": "Perfect for both casual and formal settings. A new standard in eyewear.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 5,
            "category": "Sunglasses",
            "modelName": "Refined Forest V36",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0004.jpg",
            "description": "Bold frames for a confident look. Designed with you in mind.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 6,
            "category": "Sunglasses",
            "modelName": "Refined Isle C27",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0005.jpg",
            "description": "Make a statement with these unique frames. Designed to stand out.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 7,
            "category": "Sunglasses",
            "modelName": "Refined Dream H72",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0006.jpg",
            "description": "Sleek and minimalistic for a refined look. Elegant design for a modern look.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 8,
            "category": "Sunglasses",
            "modelName": "Exquisite Hill V05",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0007.jpg",
            "description": "Sleek and minimalistic for a refined look. Inspired by the latest trends.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 9,
            "category": "Sunglasses",
            "modelName": "Bright Glade Y71",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0008.jpg",
            "description": "Lightweight and comfortable for all-day wear. An icon of style and elegance.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 10,
            "category": "Sunglasses",
            "modelName": "Resplendent Stream Z04",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0009.jpg",
            "description": "Make a statement with these unique frames. Designed for everyday wear.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 11,
            "category": "Sunglasses",
            "modelName": "Delightful Glade M01",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0010.jpg",
            "description": "Perfect for making a fashion statement. A symbol of sophistication.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 12,
            "category": "Sunglasses",
            "modelName": "Refined Ridge P22",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0011.jpg",
            "description": "Lightweight frames for maximum comfort. Designed for everyday wear.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 13,
            "category": "Sunglasses",
            "modelName": "Resplendent Blossom L99",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0012.jpg",
            "description": "Perfect for making a fashion statement. Elegant design for a modern look.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 14,
            "category": "Sunglasses",
            "modelName": "Sparkling Valley B50",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0013.jpg",
            "description": "Enhance your look with these elegant frames. Perfect for any fashion-forward individual.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 15,
            "category": "Sunglasses",
            "modelName": "Bold Whisper F65",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0014.jpg",
            "description": "Premium craftsmanship for superior quality. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 16,
            "category": "Sunglasses",
            "modelName": "Plush Summit I99",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0015.jpg",
            "description": "Make a statement with these unique frames. Perfect for any fashion-forward individual.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 17,
            "category": "Sunglasses",
            "modelName": "Radiant Sun N56",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0016.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect for those who appreciate quality.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 18,
            "category": "Sunglasses",
            "modelName": "Opulent Light A42",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0017.jpg",
            "description": "Classic design that never goes out of style. Style that lasts.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 19,
            "category": "Sunglasses",
            "modelName": "Resplendent Breeze B49",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0018.jpg",
            "description": "Designed to complement any outfit. Perfect for the stylish individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 20,
            "category": "Sunglasses",
            "modelName": "Charming Zephyr G92",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0019.jpg",
            "description": "Crafted with precision and care. Sophisticated and timeless.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 21,
            "category": "Sunglasses",
            "modelName": "Mighty Star D72",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0020.jpg",
            "description": "Premium craftsmanship for superior quality. Designed to stand out.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 22,
            "category": "Sunglasses",
            "modelName": "Bold Stream J60",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0021.jpg",
            "description": "Classic design that never goes out of style. Style and functionality combined.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 23,
            "category": "Sunglasses",
            "modelName": "Stunning Shore V49",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0022.jpg",
            "description": "Classic elegance with a modern edge. The epitome of luxury.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 24,
            "category": "Sunglasses",
            "modelName": "Brilliant Haven J29",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0023.jpg",
            "description": "Modern design with a touch of elegance. Designed to stand out.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 25,
            "category": "Sunglasses",
            "modelName": "Mighty Meadow S78",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0024.jpg",
            "description": "Elegant and sophisticated eyewear. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 26,
            "category": "Sunglasses",
            "modelName": "Magnificent Stream T02",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0025.jpg",
            "description": "Sophisticated style for the discerning individual. Perfect for the stylish individual.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 27,
            "category": "Sunglasses",
            "modelName": "Shiny Pine G24",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0026.jpg",
            "description": "High-quality materials for lasting durability. Style and functionality combined.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 28,
            "category": "Sunglasses",
            "modelName": "Jubilant Blossom M77",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0027.jpg",
            "description": "Classic design that never goes out of style. Perfect for the modern professional.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 29,
            "category": "Sunglasses",
            "modelName": "Glorious Glen Y31",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0028.jpg",
            "description": "Modern design with a touch of elegance. Engineered for the modern lifestyle.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 30,
            "category": "Sunglasses",
            "modelName": "Bold Sanctuary M78",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0029.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Made for the discerning individual.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 31,
            "category": "Sunglasses",
            "modelName": "Harmonious Peak Q09",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0030.jpg",
            "description": "Crafted with precision and care. Stylish yet durable.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 32,
            "category": "Sunglasses",
            "modelName": "Luminous Star Z86",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0031.jpg",
            "description": "Fashionable frames for every occasion. Stylish yet durable.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 33,
            "category": "Sunglasses",
            "modelName": "Glorious Willow L23",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0032.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. The ultimate fashion accessory.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 34,
            "category": "Sunglasses",
            "modelName": "Vibrant Light W94",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0033.jpg",
            "description": "Classic design that never goes out of style. A blend of tradition and innovation.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 35,
            "category": "Sunglasses",
            "modelName": "Dazzling Stream U00",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0034.jpg",
            "description": "Ideal for a chic and stylish look. Engineered for the modern lifestyle.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 36,
            "category": "Sunglasses",
            "modelName": "Mighty Pine C74",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0035.jpg",
            "description": "Enhance your style with these trendy frames. Designed to enhance your features.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 37,
            "category": "Sunglasses",
            "modelName": "Polished Harbor F84",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0036.jpg",
            "description": "Meticulously crafted for a flawless finish. Perfect for the modern professional.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 38,
            "category": "Sunglasses",
            "modelName": "Sparkling Summit H38",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0037.jpg",
            "description": "Unparalleled comfort with a stylish design. Unmatched style and comfort.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 39,
            "category": "Sunglasses",
            "modelName": "Delightful Valley Z08",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0038.jpg",
            "description": "Crafted with precision and care. Designed to enhance your features.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 40,
            "category": "Sunglasses",
            "modelName": "Dazzling Ocean F40",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0039.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect for any occasion.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 41,
            "category": "Sunglasses",
            "modelName": "Brilliant Sanctuary D57",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0040.jpg",
            "description": "Designed to provide optimal comfort and style. A symbol of sophistication.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 42,
            "category": "Sunglasses",
            "modelName": "Shiny Dream R35",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0041.jpg",
            "description": "High-quality materials for lasting durability. Perfect for those who appreciate quality.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 43,
            "category": "Sunglasses",
            "modelName": "Splendid Blossom L58",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0042.jpg",
            "description": "Classic style with a modern twist. Perfect for those who appreciate quality.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 44,
            "category": "Sunglasses",
            "modelName": "Cheerful Ocean E14",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0043.jpg",
            "description": "Distinctive design for a standout look. Perfect blend of style and comfort.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 45,
            "category": "Sunglasses",
            "modelName": "Fabulous Oasis R54",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0044.jpg",
            "description": "Crafted with precision and care. Designed to enhance your features.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 46,
            "category": "Sunglasses",
            "modelName": "Stunning Echo D84",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0045.jpg",
            "description": "Perfect balance of style and functionality. Designed with you in mind.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 47,
            "category": "Sunglasses",
            "modelName": "Opulent Heart U30",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0046.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect for making a statement.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 48,
            "category": "Sunglasses",
            "modelName": "Lively Haven S30",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0047.jpg",
            "description": "Bold and striking design. Sophisticated and timeless.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 49,
            "category": "Sunglasses",
            "modelName": "Striking Ocean S68",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0048.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for any fashion-forward individual.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 50,
            "category": "Sunglasses",
            "modelName": "Pinky Gorge R37",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0049.jpg",
            "description": "Meticulously crafted for a flawless finish. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 51,
            "category": "Sunglasses",
            "modelName": "Radiant Isle Z94",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0050.jpg",
            "description": "Ideal for a chic and stylish look. A new standard in eyewear.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 52,
            "category": "Sunglasses",
            "modelName": "Bold Sky V05",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0051.jpg",
            "description": "Classic style with a modern twist. Innovative design for a fresh look.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 53,
            "category": "Sunglasses",
            "modelName": "Resplendent Valley T24",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0052.jpg",
            "description": "Enhance your look with these elegant frames. Elegance in every detail.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 54,
            "category": "Sunglasses",
            "modelName": "Grand Pine O01",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0053.jpg",
            "description": "Premium craftsmanship for superior quality. Unmatched style and comfort.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 55,
            "category": "Sunglasses",
            "modelName": "Lively Brook F20",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0054.jpg",
            "description": "Timeless appeal with contemporary style. Perfect for the stylish individual.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 56,
            "category": "Sunglasses",
            "modelName": "Fabulous Grove M49",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0055.jpg",
            "description": "Elegant and sophisticated eyewear. Perfect blend of style and comfort.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 57,
            "category": "Sunglasses",
            "modelName": "Glorious Peak W13",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0056.jpg",
            "description": "Elegant and sophisticated eyewear. Designed with you in mind.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 58,
            "category": "Sunglasses",
            "modelName": "Stunning Oasis T47",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0057.jpg",
            "description": "Distinctive design for a standout look. Elegance in every detail.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 59,
            "category": "Sunglasses",
            "modelName": "Pinky Stream E46",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0058.jpg",
            "description": "Elegant and sophisticated eyewear. Style and functionality combined.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 60,
            "category": "Sunglasses",
            "modelName": "Lustrous Breeze R78",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0059.jpg",
            "description": "Modern design with a touch of elegance. Sophisticated and timeless.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 61,
            "category": "Sunglasses",
            "modelName": "Bold Whisper W86",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0060.jpg",
            "description": "Premium craftsmanship for superior quality. Style that transcends time.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 62,
            "category": "Sunglasses",
            "modelName": "Polished Harbor R68",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0061.jpg",
            "description": "Ideal for a chic and stylish look. A new standard in eyewear.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 63,
            "category": "Sunglasses",
            "modelName": "Sparkling Isle E05",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0062.jpg",
            "description": "Timeless design meets modern functionality. Sophistication at its finest.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 64,
            "category": "Sunglasses",
            "modelName": "Grand Light E68",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0063.jpg",
            "description": "Crafted for the fashion-conscious individual. Sophisticated and timeless.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 65,
            "category": "Sunglasses",
            "modelName": "Harmonious Field M09",
            "price": 270000,
            "imageUrl": "../../img/sunglasses/S0064.jpg",
            "description": "Fashionable frames for every occasion. Style that transcends time.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 66,
            "category": "Sunglasses",
            "modelName": "Cheerful Spirit K16",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0065.jpg",
            "description": "Premium craftsmanship for superior quality. A touch of luxury.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 67,
            "category": "Sunglasses",
            "modelName": "Splendid Forest B24",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0066.jpg",
            "description": "Lightweight frames for maximum comfort. Crafted with the finest materials.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 68,
            "category": "Sunglasses",
            "modelName": "Jubilant Field A90",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0067.jpg",
            "description": "Unmatched quality and attention to detail. Crafted for those who value elegance.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 69,
            "category": "Sunglasses",
            "modelName": "Shiny Glade W24",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0068.jpg",
            "description": "Perfect for making a fashion statement. Sophistication at its finest.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 70,
            "category": "Sunglasses",
            "modelName": "Plush Breeze P81",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0069.jpg",
            "description": "Lightweight and comfortable for all-day wear. Designed for the perfect look.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 71,
            "category": "Sunglasses",
            "modelName": "Stunning Summit Q53",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0070.jpg",
            "description": "Classic style with a modern twist. Engineered for the modern lifestyle.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 72,
            "category": "Sunglasses",
            "modelName": "Bold Breeze Y34",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0071.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Stylish yet durable.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 73,
            "category": "Sunglasses",
            "modelName": "Pinky Glacier T40",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0072.jpg",
            "description": "Ideal for a chic and stylish look. Style and functionality combined.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 74,
            "category": "Sunglasses",
            "modelName": "Dazzling Ridge D01",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0073.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Made for the discerning individual.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 75,
            "category": "Sunglasses",
            "modelName": "Exquisite Willow R96",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0074.jpg",
            "description": "Crafted for the fashion-conscious individual. Made to be noticed.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 76,
            "category": "Sunglasses",
            "modelName": "Mighty Dream X17",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0075.jpg",
            "description": "Designed to complement any outfit. A new standard in eyewear.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 77,
            "category": "Sunglasses",
            "modelName": "Harmonious Lagoon I90",
            "price": 270000,
            "imageUrl": "../../img/sunglasses/S0076.jpg",
            "description": "Classic design that never goes out of style. An icon of style and elegance.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 78,
            "category": "Sunglasses",
            "modelName": "Polished Dream C08",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0077.jpg",
            "description": "Perfect for both casual and formal settings. A new standard in eyewear.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 79,
            "category": "Sunglasses",
            "modelName": "Fabulous Lagoon U69",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0078.jpg",
            "description": "Perfect for a sleek, contemporary look. Perfect for any fashion-forward individual.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 80,
            "category": "Sunglasses",
            "modelName": "Brilliant Haven O43",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0079.jpg",
            "description": "Sophisticated style for the discerning individual. Designed with you in mind.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 81,
            "category": "Sunglasses",
            "modelName": "Brilliant Moon E50",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0080.jpg",
            "description": "Enhance your style with these trendy frames. Crafted with the finest materials.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 82,
            "category": "Sunglasses",
            "modelName": "Jubilant Prairie U82",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0081.jpg",
            "description": "Designed to complement any outfit. Perfect for making a statement.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 83,
            "category": "Sunglasses",
            "modelName": "Polished Heart I39",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0082.jpg",
            "description": "Ideal for a chic and stylish look. The epitome of luxury.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 84,
            "category": "Sunglasses",
            "modelName": "Bold Stream L32",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0083.jpg",
            "description": "Perfect for making a fashion statement. Perfect for the modern professional.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 85,
            "category": "Sunglasses",
            "modelName": "Grand Ridge V15",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0084.jpg",
            "description": "Unparalleled comfort with a stylish design. Perfect for the modern professional.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 86,
            "category": "Sunglasses",
            "modelName": "Bright Breeze A42",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0085.jpg",
            "description": "Sleek and minimalistic for a refined look. Crafted for those who value elegance.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 87,
            "category": "Sunglasses",
            "modelName": "Elegant Isle J62",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0086.jpg",
            "description": "Meticulously crafted for a flawless finish. Perfect for making a statement.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 88,
            "category": "Sunglasses",
            "modelName": "Mighty Glacier K14",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0087.jpg",
            "description": "Sophisticated style for the discerning individual. Designed for the perfect look.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 89,
            "category": "Sunglasses",
            "modelName": "Radiant Prairie F27",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0088.jpg",
            "description": "Classic elegance with a modern edge. Style that speaks volumes.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 90,
            "category": "Sunglasses",
            "modelName": "Bright Oasis E17",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0089.jpg",
            "description": "Fashionable frames for every occasion. A symbol of sophistication.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 91,
            "category": "Sunglasses",
            "modelName": "Shiny Glacier P71",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0090.jpg",
            "description": "Perfect for a sleek, contemporary look. Designed to enhance your features.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 92,
            "category": "Sunglasses",
            "modelName": "Vibrant Valley T51",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0091.jpg",
            "description": "Designed to provide optimal comfort and style. The epitome of luxury.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 93,
            "category": "Sunglasses",
            "modelName": "Fabulous Grove K88",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0092.jpg",
            "description": "Lightweight frames for maximum comfort. An icon of style and elegance.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 94,
            "category": "Sunglasses",
            "modelName": "Elegant Grove F99",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0093.jpg",
            "description": "Enhance your style with these trendy frames. Style that lasts.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 95,
            "category": "Sunglasses",
            "modelName": "Radiant Haven U33",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0094.jpg",
            "description": "Make a statement with these unique frames. Perfect for those who appreciate quality.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 96,
            "category": "Sunglasses",
            "modelName": "Elegant Dream B48",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0095.jpg",
            "description": "Enhance your look with these elegant frames. A new standard in eyewear.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 97,
            "category": "Sunglasses",
            "modelName": "Sunny Star C36",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0096.jpg",
            "description": "Sleek and minimalistic for a refined look. The perfect addition to any outfit.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 98,
            "category": "Sunglasses",
            "modelName": "Charming Whisper X80",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0097.jpg",
            "description": "Meticulously crafted for a flawless finish. Made for the discerning individual.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 99,
            "category": "Sunglasses",
            "modelName": "Delightful Ridge S52",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0098.jpg",
            "description": "Bold and striking design. Engineered for the modern lifestyle.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 100,
            "category": "Sunglasses",
            "modelName": "Harmonious Hill F54",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0099.jpg",
            "description": "Timeless appeal with contemporary style. Designed to stand out.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 101,
            "category": "Sunglasses",
            "modelName": "Vibrant Forest O00",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0100.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Inspired by the latest trends.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 102,
            "category": "Sunglasses",
            "modelName": "Graceful Peak Z10",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0101.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Designed for the perfect look.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 103,
            "category": "Sunglasses",
            "modelName": "Dazzling Gorge P31",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0102.jpg",
            "description": "Elegant and sophisticated eyewear. Perfect for the stylish individual.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 104,
            "category": "Sunglasses",
            "modelName": "Glorious Glen O37",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0103.jpg",
            "description": "Elegant and sophisticated eyewear. Crafted for those who value elegance.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 105,
            "category": "Sunglasses",
            "modelName": "Radiant Heart Q64",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0104.jpg",
            "description": "Perfect balance of style and functionality. Elegant design for a modern look.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 106,
            "category": "Sunglasses",
            "modelName": "Sunny Forest E00",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0105.jpg",
            "description": "Meticulously crafted for a flawless finish. Engineered for the modern lifestyle.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 107,
            "category": "Sunglasses",
            "modelName": "Stunning Sky P51",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0106.jpg",
            "description": "Fashionable frames for every occasion. A touch of luxury.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 108,
            "category": "Sunglasses",
            "modelName": "Elegant Ocean E16",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0107.jpg",
            "description": "Classic design that never goes out of style. A blend of tradition and innovation.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 109,
            "category": "Sunglasses",
            "modelName": "Dazzling Valley Z03",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0108.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style that speaks volumes.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 110,
            "category": "Sunglasses",
            "modelName": "Charming Isle R73",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0109.jpg",
            "description": "Crafted for the fashion-conscious individual. Made to be noticed.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 111,
            "category": "Sunglasses",
            "modelName": "Stunning Haven Q54",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0110.jpg",
            "description": "Perfect for both casual and formal settings. Made for the discerning individual.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 112,
            "category": "Sunglasses",
            "modelName": "Cheerful Ridge P47",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0111.jpg",
            "description": "Chic and contemporary design. A new standard in eyewear.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 113,
            "category": "Sunglasses",
            "modelName": "Exquisite Meadow C21",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0112.jpg",
            "description": "Classic design that never goes out of style. Designed with you in mind.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 114,
            "category": "Sunglasses",
            "modelName": "Splendid Meadow D72",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0113.jpg",
            "description": "Enhance your style with these trendy frames. Timeless design with a modern touch.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 115,
            "category": "Sunglasses",
            "modelName": "Splendid Rose U99",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0114.jpg",
            "description": "Crafted for the fashion-conscious individual. Innovative design for a fresh look.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 116,
            "category": "Sunglasses",
            "modelName": "Bold Dream H92",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0115.jpg",
            "description": "Fashionable frames for every occasion. Crafted for those who value elegance.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 117,
            "category": "Sunglasses",
            "modelName": "Gorgeous Peak J78",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0116.jpg",
            "description": "Ideal for a chic and stylish look. An icon of style and elegance.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 118,
            "category": "Sunglasses",
            "modelName": "Gorgeous Peak S47",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0117.jpg",
            "description": "Classic design that never goes out of style. The epitome of luxury.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 119,
            "category": "Sunglasses",
            "modelName": "Luminous Haven S27",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0118.jpg",
            "description": "Make a statement with these unique frames. Style that speaks volumes.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 120,
            "category": "Sunglasses",
            "modelName": "Striking Breeze W76",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0119.jpg",
            "description": "Lightweight frames for maximum comfort. Sophisticated and timeless.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 121,
            "category": "Sunglasses",
            "modelName": "Elegant Whisper T10",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0120.jpg",
            "description": "Designed to provide optimal comfort and style. Perfect blend of style and comfort.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 122,
            "category": "Sunglasses",
            "modelName": "Graceful Glade K03",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0121.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. A new standard in eyewear.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 123,
            "category": "Sunglasses",
            "modelName": "Majestic Glade C70",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0122.jpg",
            "description": "Chic and contemporary design. Perfect for the stylish individual.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 124,
            "category": "Sunglasses",
            "modelName": "Beaming Breeze D81",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0123.jpg",
            "description": "Perfect for a sleek, contemporary look. An icon of style and elegance.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 125,
            "category": "Sunglasses",
            "modelName": "Majestic Peak L11",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0124.jpg",
            "description": "Perfect for a sleek, contemporary look. Inspired by classic designs.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 126,
            "category": "Sunglasses",
            "modelName": "Brilliant Oasis G07",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0125.jpg",
            "description": "Sophisticated style for the discerning individual. The epitome of luxury.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 127,
            "category": "Sunglasses",
            "modelName": "Lustrous Echo V97",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0126.jpg",
            "description": "High-quality materials for lasting durability. Designed to enhance your features.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 128,
            "category": "Sunglasses",
            "modelName": "Attractive Whisper T99",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0127.jpg",
            "description": "Classic elegance with a modern edge. Style that lasts.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 129,
            "category": "Sunglasses",
            "modelName": "Sparkling Ocean B47",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0128.jpg",
            "description": "Perfect balance of style and functionality. Crafted for those who value elegance.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 130,
            "category": "Sunglasses",
            "modelName": "Jubilant Pine G03",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0129.jpg",
            "description": "Fashionable frames for every occasion. Perfect blend of style and comfort.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 131,
            "category": "Sunglasses",
            "modelName": "Delightful Rose E86",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0130.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Designed for everyday wear.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 132,
            "category": "Sunglasses",
            "modelName": "Mighty Whisper H86",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0131.jpg",
            "description": "Sleek and minimalistic for a refined look. Inspired by the latest trends.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 133,
            "category": "Sunglasses",
            "modelName": "Gorgeous Field T16",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0132.jpg",
            "description": "Classic elegance with a modern edge. Style that lasts.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 134,
            "category": "Sunglasses",
            "modelName": "Shiny Shore W22",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0133.jpg",
            "description": "Timeless design meets modern functionality. A new standard in eyewear.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 135,
            "category": "Sunglasses",
            "modelName": "Lustrous Prairie T71",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0134.jpg",
            "description": "Versatile design suitable for any face shape. Elegance in every detail.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 136,
            "category": "Sunglasses",
            "modelName": "Exquisite Heart R59",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0135.jpg",
            "description": "Bold and striking design. Designed with you in mind.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 137,
            "category": "Sunglasses",
            "modelName": "Vibrant Willow M62",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0136.jpg",
            "description": "Make a statement with these unique frames. Timeless design with a modern touch.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 138,
            "category": "Sunglasses",
            "modelName": "Vivid Stream H49",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0137.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style that lasts.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 139,
            "category": "Sunglasses",
            "modelName": "Attractive Echo O99",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0138.jpg",
            "description": "Fashion-forward design for the modern individual. Style that lasts.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 140,
            "category": "Sunglasses",
            "modelName": "Stunning Oasis P96",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0139.jpg",
            "description": "Distinctive design for a standout look. Made for the discerning individual.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 141,
            "category": "Sunglasses",
            "modelName": "Vivid Willow J62",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0140.jpg",
            "description": "Sophisticated style for the discerning individual. Unmatched style and comfort.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 142,
            "category": "Sunglasses",
            "modelName": "Striking Spirit M32",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0141.jpg",
            "description": "Timeless design meets modern functionality. Sophisticated and timeless.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 143,
            "category": "Sunglasses",
            "modelName": "Fabulous Dream Q27",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0142.jpg",
            "description": "Designed to complement any outfit. Perfect for the modern professional.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 144,
            "category": "Sunglasses",
            "modelName": "Lustrous Stream H25",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0143.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style that transcends time.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 145,
            "category": "Sunglasses",
            "modelName": "Bright Sanctuary R91",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0144.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect blend of style and comfort.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 146,
            "category": "Sunglasses",
            "modelName": "Grand Dream X58",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0145.jpg",
            "description": "Enhance your look with these elegant frames. Innovative design for a fresh look.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 147,
            "category": "Sunglasses",
            "modelName": "Exquisite Peak K68",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0146.jpg",
            "description": "Crafted with precision and care. Perfect for any fashion-forward individual.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 148,
            "category": "Sunglasses",
            "modelName": "Glorious Isle H66",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0147.jpg",
            "description": "Meticulously crafted for a flawless finish. Style that transcends time.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 149,
            "category": "Sunglasses",
            "modelName": "Elegant Valley S74",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0148.jpg",
            "description": "Versatile design suitable for any face shape. Designed for the perfect look.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 150,
            "category": "Sunglasses",
            "modelName": "Graceful Prairie M42",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0149.jpg",
            "description": "Enhance your style with these trendy frames. A symbol of sophistication.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 151,
            "category": "Sunglasses",
            "modelName": "Elegant Ocean U43",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0150.jpg",
            "description": "Perfect for both casual and formal settings. Innovative design for a fresh look.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 152,
            "category": "Sunglasses",
            "modelName": "Radiant Prairie W71",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0151.jpg",
            "description": "Classic style with a modern twist. Timeless design with a modern touch.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 153,
            "category": "Sunglasses",
            "modelName": "Stunning Rose D10",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0152.jpg",
            "description": "Perfect balance of style and functionality. Elegant design for a modern look.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 154,
            "category": "Sunglasses",
            "modelName": "Resplendent Valley W81",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0153.jpg",
            "description": "Perfect balance of style and functionality. An icon of style and elegance.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 155,
            "category": "Sunglasses",
            "modelName": "Bold Ocean J87",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0154.jpg",
            "description": "Lightweight and comfortable for all-day wear. Designed with you in mind.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 156,
            "category": "Sunglasses",
            "modelName": "Delightful Oasis N16",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0155.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for the stylish individual.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 157,
            "category": "Sunglasses",
            "modelName": "Vibrant Zephyr Y85",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0156.jpg",
            "description": "Designed to provide optimal comfort and style. An icon of style and elegance.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 158,
            "category": "Sunglasses",
            "modelName": "Harmonious Field L80",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0157.jpg",
            "description": "Designed to provide optimal comfort and style. Perfect for those who appreciate quality.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 159,
            "category": "Sunglasses",
            "modelName": "Fabulous Star Y82",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0158.jpg",
            "description": "Bold and striking design. Unmatched style and comfort.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 160,
            "category": "Sunglasses",
            "modelName": "Striking Glen Q29",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0159.jpg",
            "description": "A must-have accessory for fashion enthusiasts. A symbol of sophistication.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 161,
            "category": "Sunglasses",
            "modelName": "Elegant Forest C40",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0160.jpg",
            "description": "Unmatched quality and attention to detail. Sophisticated and timeless.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 162,
            "category": "Sunglasses",
            "modelName": "Bold Ocean Q33",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0161.jpg",
            "description": "Perfect for a sleek, contemporary look. The perfect addition to any outfit.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 163,
            "category": "Sunglasses",
            "modelName": "Exquisite Ocean I51",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0162.jpg",
            "description": "Modern design with a touch of elegance. The epitome of luxury.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 164,
            "category": "Sunglasses",
            "modelName": "Resplendent Forest J74",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0163.jpg",
            "description": "Fashionable frames for every occasion. Comfortable fit for all-day wear.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 165,
            "category": "Sunglasses",
            "modelName": "Vibrant Oasis Y91",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0164.jpg",
            "description": "Fashionable frames for every occasion. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 166,
            "category": "Sunglasses",
            "modelName": "Cheerful Ridge D28",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0165.jpg",
            "description": "Combines elegance and comfort effortlessly. A blend of tradition and innovation.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 167,
            "category": "Sunglasses",
            "modelName": "Attractive Peak A45",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0166.jpg",
            "description": "Designed to provide optimal comfort and style. Perfect for the stylish individual.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 168,
            "category": "Sunglasses",
            "modelName": "Delightful Glacier U80",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0167.jpg",
            "description": "Bold frames for a confident look. Timeless design with a modern touch.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 169,
            "category": "Sunglasses",
            "modelName": "Beaming Spirit P90",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0168.jpg",
            "description": "Enhance your look with these elegant frames. Style that transcends time.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 170,
            "category": "Sunglasses",
            "modelName": "Striking Heart F22",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0169.jpg",
            "description": "Crafted with precision and care. Innovative design for a fresh look.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 171,
            "category": "Sunglasses",
            "modelName": "Pinky Oasis U30",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0170.jpg",
            "description": "Elegant and sophisticated eyewear. Designed to stand out.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 172,
            "category": "Sunglasses",
            "modelName": "Polished Dream S96",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0171.jpg",
            "description": "Combines elegance and comfort effortlessly. An icon of style and elegance.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 173,
            "category": "Sunglasses",
            "modelName": "Shiny Sky K65",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0172.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style that lasts.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 174,
            "category": "Sunglasses",
            "modelName": "Gorgeous Rose H80",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0173.jpg",
            "description": "Sleek and minimalistic for a refined look. Crafted for those who value elegance.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 175,
            "category": "Sunglasses",
            "modelName": "Majestic Glacier X75",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0174.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style that transcends time.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 176,
            "category": "Sunglasses",
            "modelName": "Vibrant Brook Y04",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0175.jpg",
            "description": "Classic style with a modern twist. Crafted with the finest materials.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 177,
            "category": "Sunglasses",
            "modelName": "Bold Glacier Q80",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0176.jpg",
            "description": "Meticulously crafted for a flawless finish. The ultimate fashion accessory.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 178,
            "category": "Sunglasses",
            "modelName": "Lively Isle B50",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0177.jpg",
            "description": "Make a statement with these unique frames. Designed to stand out.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 179,
            "category": "Sunglasses",
            "modelName": "Majestic Ocean R81",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0178.jpg",
            "description": "Stylish and modern design for any occasion. Designed for everyday wear.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 180,
            "category": "Sunglasses",
            "modelName": "Plush Prairie W17",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0179.jpg",
            "description": "Bold and striking design. Made to be noticed.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 181,
            "category": "Sunglasses",
            "modelName": "Sparkling Lagoon J38",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0180.jpg",
            "description": "Classic style with a modern twist. Perfect for the stylish individual.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 182,
            "category": "Sunglasses",
            "modelName": "Stunning Gorge B46",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0181.jpg",
            "description": "Modern design with a touch of elegance. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 183,
            "category": "Sunglasses",
            "modelName": "Polished Valley Z77",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0182.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect for the modern professional.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 184,
            "category": "Sunglasses",
            "modelName": "Gorgeous Field L46",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0183.jpg",
            "description": "Elegant and sophisticated eyewear. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 185,
            "category": "Sunglasses",
            "modelName": "Luminous Ocean F44",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0184.jpg",
            "description": "Ideal for a chic and stylish look. Inspired by classic designs.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 186,
            "category": "Sunglasses",
            "modelName": "Mighty Whisper T27",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0185.jpg",
            "description": "Sophisticated style for the discerning individual. Style that transcends time.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 187,
            "category": "Sunglasses",
            "modelName": "Vibrant Peak N88",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0186.jpg",
            "description": "Classic design that never goes out of style. Perfect for the stylish individual.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 188,
            "category": "Sunglasses",
            "modelName": "Grand Stream E13",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0187.jpg",
            "description": "Ideal for a chic and stylish look. Inspired by the latest trends.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 189,
            "category": "Sunglasses",
            "modelName": "Elegant Heart K97",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0188.jpg",
            "description": "Lightweight and comfortable for all-day wear. Style that transcends time.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 190,
            "category": "Sunglasses",
            "modelName": "Exquisite Light D72",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0189.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for any fashion-forward individual.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 191,
            "category": "Sunglasses",
            "modelName": "Resplendent Star D87",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0190.jpg",
            "description": "Perfect for a sleek, contemporary look. Designed to enhance your features.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 192,
            "category": "Sunglasses",
            "modelName": "Polished Field I06",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0191.jpg",
            "description": "Modern design with a touch of elegance. Perfect blend of style and comfort.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 193,
            "category": "Sunglasses",
            "modelName": "Bold Hill B80",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0192.jpg",
            "description": "Perfect balance of style and functionality. Crafted with the finest materials.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 194,
            "category": "Sunglasses",
            "modelName": "Radiant Glacier X79",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0193.jpg",
            "description": "Fashionable frames for every occasion. Designed to stand out.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 195,
            "category": "Sunglasses",
            "modelName": "Harmonious Haven S47",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0194.jpg",
            "description": "Enhance your look with these elegant frames. Designed with you in mind.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 196,
            "category": "Sunglasses",
            "modelName": "Fabulous Lagoon P97",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0195.jpg",
            "description": "Perfect for making a fashion statement. Inspired by the latest trends.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 197,
            "category": "Sunglasses",
            "modelName": "Stunning Brook F41",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0196.jpg",
            "description": "Unparalleled comfort with a stylish design. Style and functionality combined.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 198,
            "category": "Sunglasses",
            "modelName": "Charming Gorge L59",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0197.jpg",
            "description": "Timeless appeal with contemporary style. Crafted with the finest materials.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 199,
            "category": "Sunglasses",
            "modelName": "Bright Ocean C94",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0198.jpg",
            "description": "Sleek and minimalistic for a refined look. Made to be noticed.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 200,
            "category": "Sunglasses",
            "modelName": "Striking Rose G43",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0199.jpg",
            "description": "Versatile design suitable for any face shape. Style and functionality combined.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 201,
            "category": "Sunglasses",
            "modelName": "Jubilant Pine C86",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0200.jpg",
            "description": "Classic style with a modern twist. Perfect for making a statement.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 202,
            "category": "Sunglasses",
            "modelName": "Luminous Forest D28",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0201.jpg",
            "description": "Sophisticated style for the discerning individual. Perfect for the stylish individual.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 203,
            "category": "Sunglasses",
            "modelName": "Brilliant Prairie D66",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0202.jpg",
            "description": "Premium craftsmanship for superior quality. An icon of style and elegance.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 204,
            "category": "Sunglasses",
            "modelName": "Delightful Glade L40",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0203.jpg",
            "description": "Unparalleled comfort with a stylish design. Crafted for those who value elegance.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 205,
            "category": "Sunglasses",
            "modelName": "Harmonious Peak Z57",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0204.jpg",
            "description": "Premium craftsmanship for superior quality. The perfect addition to any outfit.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 206,
            "category": "Sunglasses",
            "modelName": "Exquisite Willow V82",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0205.jpg",
            "description": "Modern design with a touch of elegance. Perfect for the modern professional.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 207,
            "category": "Sunglasses",
            "modelName": "Vivid Stream L20",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0206.jpg",
            "description": "Unparalleled comfort with a stylish design. The perfect addition to any outfit.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 208,
            "category": "Sunglasses",
            "modelName": "Dazzling Lagoon W64",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0207.jpg",
            "description": "Fashion-forward design for the modern individual. Designed to enhance your features.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 209,
            "category": "Sunglasses",
            "modelName": "Mighty Zephyr J11",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0208.jpg",
            "description": "Crafted with precision and care. Style that transcends time.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 210,
            "category": "Sunglasses",
            "modelName": "Majestic Haven O13",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0209.jpg",
            "description": "Bold and striking design. Perfect blend of style and comfort.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 211,
            "category": "Sunglasses",
            "modelName": "Bright Moon K06",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0210.jpg",
            "description": "Combines elegance and comfort effortlessly. Designed for everyday wear.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 212,
            "category": "Sunglasses",
            "modelName": "Shiny Star W15",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0211.jpg",
            "description": "Chic and contemporary design. The perfect addition to any outfit.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 213,
            "category": "Sunglasses",
            "modelName": "Gleaming Glade T71",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0212.jpg",
            "description": "Elegant and sophisticated eyewear. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 214,
            "category": "Sunglasses",
            "modelName": "Harmonious Light A55",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0213.jpg",
            "description": "Classic elegance with a modern edge. Elegant design for a modern look.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 215,
            "category": "Sunglasses",
            "modelName": "Fabulous Summit Z92",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0214.jpg",
            "description": "Lightweight frames for maximum comfort. Perfect for the stylish individual.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 216,
            "category": "Sunglasses",
            "modelName": "Grand Peak X38",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0215.jpg",
            "description": "Distinctive design for a standout look. Elegance in every detail.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 217,
            "category": "Sunglasses",
            "modelName": "Opulent Spirit U14",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0216.jpg",
            "description": "Elevate your style with these designer frames. Innovative design for a fresh look.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 218,
            "category": "Sunglasses",
            "modelName": "Graceful Glen B73",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0217.jpg",
            "description": "Bold frames for a confident look. Innovative design for a fresh look.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 219,
            "category": "Sunglasses",
            "modelName": "Fabulous Spirit I24",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0218.jpg",
            "description": "Chic and contemporary design. Made to be noticed.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 220,
            "category": "Sunglasses",
            "modelName": "Jubilant Rose J93",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0219.jpg",
            "description": "Crafted with precision and care. A touch of luxury.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 221,
            "category": "Sunglasses",
            "modelName": "Splendid Sanctuary R26",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0220.jpg",
            "description": "Designed to complement any outfit. Designed with you in mind.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 222,
            "category": "Sunglasses",
            "modelName": "Glorious Haven B76",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0221.jpg",
            "description": "Sophisticated style for the discerning individual. Style that lasts.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 223,
            "category": "Sunglasses",
            "modelName": "Magnificent Whisper E01",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0222.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. The perfect addition to any outfit.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 224,
            "category": "Sunglasses",
            "modelName": "Exquisite Sky H51",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0223.jpg",
            "description": "Sleek and minimalistic for a refined look. A symbol of sophistication.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 225,
            "category": "Sunglasses",
            "modelName": "Opulent Harbor P04",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0224.jpg",
            "description": "Lightweight frames for maximum comfort. A touch of luxury.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 226,
            "category": "Sunglasses",
            "modelName": "Beaming Willow K41",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0225.jpg",
            "description": "Bold and striking design. Perfect for the stylish individual.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 227,
            "category": "Sunglasses",
            "modelName": "Plush Sky A07",
            "price": 270000,
            "imageUrl": "../../img/sunglasses/S0226.jpg",
            "description": "High-quality materials for lasting durability. Style and functionality combined.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 228,
            "category": "Sunglasses",
            "modelName": "Bold Peak X04",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0227.jpg",
            "description": "Meticulously crafted for a flawless finish. Unmatched style and comfort.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 229,
            "category": "Sunglasses",
            "modelName": "Bright Stream H99",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0228.jpg",
            "description": "Sleek and minimalistic for a refined look. Designed with you in mind.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 230,
            "category": "Sunglasses",
            "modelName": "Bright Harbor B20",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0229.jpg",
            "description": "Lightweight and comfortable for all-day wear. An icon of style and elegance.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 231,
            "category": "Sunglasses",
            "modelName": "Resplendent Hill V52",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0230.jpg",
            "description": "Unparalleled comfort with a stylish design. Engineered for the modern lifestyle.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 232,
            "category": "Sunglasses",
            "modelName": "Elegant Dream K77",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0231.jpg",
            "description": "Versatile design suitable for any face shape. Perfect for the modern professional.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 233,
            "category": "Sunglasses",
            "modelName": "Grand Prairie N24",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0232.jpg",
            "description": "Fashionable frames for every occasion. Style that transcends time.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 234,
            "category": "Sunglasses",
            "modelName": "Resplendent Dream T74",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0233.jpg",
            "description": "Bold and striking design. Style and functionality combined.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 235,
            "category": "Sunglasses",
            "modelName": "Dazzling Harbor D73",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0234.jpg",
            "description": "Lightweight frames for maximum comfort. Designed for the perfect look.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 236,
            "category": "Sunglasses",
            "modelName": "Charming Glacier C19",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0235.jpg",
            "description": "Unmatched quality and attention to detail. Designed for everyday wear.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 237,
            "category": "Sunglasses",
            "modelName": "Lustrous Summit Q15",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0236.jpg",
            "description": "High-quality materials for lasting durability. Crafted for those who value elegance.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 238,
            "category": "Sunglasses",
            "modelName": "Sparkling Valley L34",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0237.jpg",
            "description": "Meticulously crafted for a flawless finish. Innovative design for a fresh look.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 239,
            "category": "Sunglasses",
            "modelName": "Gleaming Harbor E63",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0238.jpg",
            "description": "Unparalleled comfort with a stylish design. Made to be noticed.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 240,
            "category": "Sunglasses",
            "modelName": "Gleaming Summit X17",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0239.jpg",
            "description": "Bold frames for a confident look. Style that lasts.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 241,
            "category": "Sunglasses",
            "modelName": "Gorgeous Gorge A42",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0240.jpg",
            "description": "Chic and contemporary design. Perfect for making a statement.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 242,
            "category": "Sunglasses",
            "modelName": "Luminous Echo A57",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0241.jpg",
            "description": "Modern design with a touch of elegance. Crafted for those who value elegance.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 243,
            "category": "Sunglasses",
            "modelName": "Exquisite Sun J65",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0242.jpg",
            "description": "Enhance your look with these elegant frames. The ultimate fashion accessory.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 244,
            "category": "Sunglasses",
            "modelName": "Opulent Peak B15",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0243.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for making a statement.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 245,
            "category": "Sunglasses",
            "modelName": "Stunning Spirit P94",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0244.jpg",
            "description": "Perfect for making a fashion statement. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 246,
            "category": "Sunglasses",
            "modelName": "Sparkling Blossom Y54",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0245.jpg",
            "description": "Designed to complement any outfit. Style that transcends time.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 247,
            "category": "Sunglasses",
            "modelName": "Brilliant Peak V93",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0246.jpg",
            "description": "Sleek and minimalistic for a refined look. A blend of tradition and innovation.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 248,
            "category": "Sunglasses",
            "modelName": "Striking Spirit N40",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0247.jpg",
            "description": "Modern design with a touch of elegance. Timeless design with a modern touch.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 249,
            "category": "Sunglasses",
            "modelName": "Opulent Valley M31",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0248.jpg",
            "description": "Fashionable frames for every occasion. Designed to enhance your features.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 250,
            "category": "Sunglasses",
            "modelName": "Pinky Shore Z59",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0249.jpg",
            "description": "Modern design with a touch of elegance. Innovative design for a fresh look.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 251,
            "category": "Sunglasses",
            "modelName": "Magnificent Ocean S23",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0250.jpg",
            "description": "Designed to provide optimal comfort and style. Comfortable fit for all-day wear.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 252,
            "category": "Sunglasses",
            "modelName": "Sunny Glen P81",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0251.jpg",
            "description": "Modern design with a touch of elegance. Perfect for any fashion-forward individual.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 253,
            "category": "Sunglasses",
            "modelName": "Gleaming Sky V18",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0252.jpg",
            "description": "Chic and contemporary design. Elegance in every detail.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 254,
            "category": "Sunglasses",
            "modelName": "Majestic Oasis P46",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0253.jpg",
            "description": "Fashionable frames for every occasion. Made for the discerning individual.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 255,
            "category": "Sunglasses",
            "modelName": "Vibrant Oasis E01",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0254.jpg",
            "description": "Designed to complement any outfit. Made for the discerning individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 256,
            "category": "Sunglasses",
            "modelName": "Resplendent Valley K22",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0255.jpg",
            "description": "Ideal for a chic and stylish look. A blend of tradition and innovation.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 257,
            "category": "Sunglasses",
            "modelName": "Bright Brook B49",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0256.jpg",
            "description": "Classic style with a modern twist. Designed to enhance your features.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 258,
            "category": "Sunglasses",
            "modelName": "Brilliant Light U43",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0257.jpg",
            "description": "Lightweight frames for maximum comfort. Engineered for the modern lifestyle.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 259,
            "category": "Sunglasses",
            "modelName": "Graceful Harbor B24",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0258.jpg",
            "description": "Crafted for the fashion-conscious individual. Crafted for those who value elegance.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 260,
            "category": "Sunglasses",
            "modelName": "Luminous Spirit B04",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0259.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Style and functionality combined.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 261,
            "category": "Sunglasses",
            "modelName": "Refined Whisper D91",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0260.jpg",
            "description": "Classic design that never goes out of style. A touch of luxury.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 262,
            "category": "Sunglasses",
            "modelName": "Lively Ocean B89",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0261.jpg",
            "description": "Designed to provide optimal comfort and style. Stylish yet durable.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 263,
            "category": "Sunglasses",
            "modelName": "Vibrant Dream U09",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0262.jpg",
            "description": "Crafted for the fashion-conscious individual. Inspired by the latest trends.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 264,
            "category": "Sunglasses",
            "modelName": "Splendid Light G15",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0263.jpg",
            "description": "Versatile design suitable for any face shape. Perfect blend of style and comfort.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 265,
            "category": "Sunglasses",
            "modelName": "Vivid Ridge V67",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0264.jpg",
            "description": "Unmatched quality and attention to detail. Inspired by classic designs.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 266,
            "category": "Sunglasses",
            "modelName": "Sparkling Sanctuary D06",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0265.jpg",
            "description": "Designed to provide optimal comfort and style. Made to be noticed.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 267,
            "category": "Sunglasses",
            "modelName": "Mighty Oasis Z32",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0266.jpg",
            "description": "Fashionable frames for every occasion. Inspired by classic designs.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 268,
            "category": "Sunglasses",
            "modelName": "Luminous Ocean S78",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0267.jpg",
            "description": "Crafted for the fashion-conscious individual. Perfect for the stylish individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 269,
            "category": "Sunglasses",
            "modelName": "Gorgeous Prairie J40",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0268.jpg",
            "description": "High-quality materials for lasting durability. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 270,
            "category": "Sunglasses",
            "modelName": "Cheerful Lagoon K13",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0269.jpg",
            "description": "Distinctive design for a standout look. Engineered for the modern lifestyle.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 271,
            "category": "Sunglasses",
            "modelName": "Polished Dream H59",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0270.jpg",
            "description": "Elegant and sophisticated eyewear. A symbol of sophistication.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 272,
            "category": "Sunglasses",
            "modelName": "Plush Breeze E34",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0271.jpg",
            "description": "Classic design that never goes out of style. The perfect addition to any outfit.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 273,
            "category": "Sunglasses",
            "modelName": "Glorious Ridge N78",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0272.jpg",
            "description": "Sophisticated style for the discerning individual. Perfect for any occasion.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 274,
            "category": "Sunglasses",
            "modelName": "Refined Oasis S49",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0273.jpg",
            "description": "Perfect balance of style and functionality. Designed with you in mind.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 275,
            "category": "Sunglasses",
            "modelName": "Harmonious Gorge E04",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0274.jpg",
            "description": "Make a statement with these unique frames. Perfect for those who appreciate quality.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 276,
            "category": "Sunglasses",
            "modelName": "Plush Glade P46",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0275.jpg",
            "description": "Timeless appeal with contemporary style. A touch of luxury.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 277,
            "category": "Sunglasses",
            "modelName": "Bright Sky W28",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0276.jpg",
            "description": "Versatile design suitable for any face shape. Style that lasts.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 278,
            "category": "Sunglasses",
            "modelName": "Polished Stream I11",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0277.jpg",
            "description": "Sleek and minimalistic for a refined look. Elegance in every detail.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 279,
            "category": "Sunglasses",
            "modelName": "Sparkling Peak Y14",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0278.jpg",
            "description": "Designed to complement any outfit. Unmatched style and comfort.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 280,
            "category": "Sunglasses",
            "modelName": "Jubilant Brook J64",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0279.jpg",
            "description": "Bold frames for a confident look. Perfect for the modern professional.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 281,
            "category": "Sunglasses",
            "modelName": "Graceful Sky Y57",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0280.jpg",
            "description": "Unmatched quality and attention to detail. Elegance in every detail.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 282,
            "category": "Sunglasses",
            "modelName": "Vivid Zephyr H35",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0281.jpg",
            "description": "Perfect balance of style and functionality. Crafted for those who value elegance.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 283,
            "category": "Sunglasses",
            "modelName": "Luminous Haven M59",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0282.jpg",
            "description": "Bold frames for a confident look. Designed for everyday wear.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 284,
            "category": "Sunglasses",
            "modelName": "Jubilant Willow N53",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0283.jpg",
            "description": "Make a statement with these unique frames. Elegance in every detail.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 285,
            "category": "Sunglasses",
            "modelName": "Resplendent Blossom B03",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0284.jpg",
            "description": "Distinctive design for a standout look. Made for the discerning individual.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 286,
            "category": "Sunglasses",
            "modelName": "Lustrous Zephyr K20",
            "price": 220000,
            "imageUrl": "../../img/sunglasses/S0285.jpg",
            "description": "Perfect for making a fashion statement. Perfect for the stylish individual.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 287,
            "category": "Sunglasses",
            "modelName": "Dazzling Hill U51",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0286.jpg",
            "description": "Versatile design suitable for any face shape. Sophisticated and timeless.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 288,
            "category": "Sunglasses",
            "modelName": "Vibrant Glade J14",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0287.jpg",
            "description": "Lightweight and comfortable for all-day wear. Style that speaks volumes.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 289,
            "category": "Sunglasses",
            "modelName": "Refined Meadow W85",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0288.jpg",
            "description": "Sophisticated style for the discerning individual. Crafted with the finest materials.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 290,
            "category": "Sunglasses",
            "modelName": "Cheerful Glacier Q79",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0289.jpg",
            "description": "Bold frames for a confident look. Unmatched style and comfort.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 291,
            "category": "Sunglasses",
            "modelName": "Polished Forest O50",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0290.jpg",
            "description": "Stylish and modern design for any occasion. Inspired by classic designs.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 292,
            "category": "Sunglasses",
            "modelName": "Elegant Sky C09",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0291.jpg",
            "description": "Premium craftsmanship for superior quality. Designed for everyday wear.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 293,
            "category": "Sunglasses",
            "modelName": "Resplendent Meadow P43",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0292.jpg",
            "description": "Ideal for a chic and stylish look. Made for the discerning individual.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 294,
            "category": "Sunglasses",
            "modelName": "Dazzling Lagoon Y94",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0293.jpg",
            "description": "Enhance your style with these trendy frames. A touch of luxury.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 295,
            "category": "Sunglasses",
            "modelName": "Lustrous Lagoon Q75",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0294.jpg",
            "description": "Ideal for a chic and stylish look. Perfect for those who appreciate quality.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 296,
            "category": "Sunglasses",
            "modelName": "Grand Prairie S51",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0295.jpg",
            "description": "Classic style with a modern twist. Style that speaks volumes.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 297,
            "category": "Sunglasses",
            "modelName": "Harmonious Brook W64",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0296.jpg",
            "description": "Timeless design meets modern functionality. Perfect blend of style and comfort.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 298,
            "category": "Sunglasses",
            "modelName": "Magnificent Peak C69",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0297.jpg",
            "description": "Lightweight frames for maximum comfort. Elegance in every detail.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 299,
            "category": "Sunglasses",
            "modelName": "Gorgeous Ridge N04",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0298.jpg",
            "description": "Unmatched quality and attention to detail. Perfect blend of style and comfort.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 300,
            "category": "Sunglasses",
            "modelName": "Graceful Blossom I13",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0299.jpg",
            "description": "Timeless appeal with contemporary style. Style that lasts.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 301,
            "category": "Sunglasses",
            "modelName": "Stunning Light V07",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0300.jpg",
            "description": "Versatile design suitable for any face shape. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 302,
            "category": "Sunglasses",
            "modelName": "Exquisite Valley C61",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0301.jpg",
            "description": "Lightweight frames for maximum comfort. Stylish yet durable.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 303,
            "category": "Sunglasses",
            "modelName": "Brilliant Glen Z29",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0302.jpg",
            "description": "Bold frames for a confident look. Perfect for making a statement.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 304,
            "category": "Sunglasses",
            "modelName": "Splendid Glen Q94",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0303.jpg",
            "description": "Chic and contemporary design. Engineered for the modern lifestyle.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 305,
            "category": "Sunglasses",
            "modelName": "Exquisite Whisper G57",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0304.jpg",
            "description": "Versatile design suitable for any face shape. Sophisticated and timeless.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 306,
            "category": "Sunglasses",
            "modelName": "Fabulous Glade N52",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0305.jpg",
            "description": "Unmatched quality and attention to detail. Timeless design with a modern touch.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 307,
            "category": "Sunglasses",
            "modelName": "Graceful Sun L14",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0306.jpg",
            "description": "Meticulously crafted for a flawless finish. Crafted for those who value elegance.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 308,
            "category": "Sunglasses",
            "modelName": "Fabulous Light V14",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0307.jpg",
            "description": "Premium craftsmanship for superior quality. Designed for the perfect look.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 309,
            "category": "Sunglasses",
            "modelName": "Glorious Rose Z39",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0308.jpg",
            "description": "Lightweight and comfortable for all-day wear. A touch of luxury.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 310,
            "category": "Sunglasses",
            "modelName": "Cheerful Isle S72",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0309.jpg",
            "description": "Chic and contemporary design. Unmatched style and comfort.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 311,
            "category": "Sunglasses",
            "modelName": "Glorious Lagoon O01",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0310.jpg",
            "description": "Lightweight and comfortable for all-day wear. Perfect for the stylish individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 312,
            "category": "Sunglasses",
            "modelName": "Jubilant Stream T49",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0311.jpg",
            "description": "Timeless appeal with contemporary style. A symbol of sophistication.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 313,
            "category": "Sunglasses",
            "modelName": "Jubilant Stream T00",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0312.jpg",
            "description": "Perfect for both casual and formal settings. Perfect for making a statement.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 314,
            "category": "Sunglasses",
            "modelName": "Dazzling Dream X92",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0313.jpg",
            "description": "Designed to provide optimal comfort and style. Elegance in every detail.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 315,
            "category": "Sunglasses",
            "modelName": "Stunning Grove C16",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0314.jpg",
            "description": "Meticulously crafted for a flawless finish. Inspired by the latest trends.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 316,
            "category": "Sunglasses",
            "modelName": "Beaming Forest T33",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0315.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for those who appreciate quality.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 317,
            "category": "Sunglasses",
            "modelName": "Jubilant Harbor S98",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0316.jpg",
            "description": "Classic design that never goes out of style. Inspired by the latest trends.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 318,
            "category": "Sunglasses",
            "modelName": "Brilliant Haven D32",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0317.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for any fashion-forward individual.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 319,
            "category": "Sunglasses",
            "modelName": "Striking Meadow M74",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0318.jpg",
            "description": "Perfect for a sleek, contemporary look. Perfect blend of style and comfort.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 320,
            "category": "Sunglasses",
            "modelName": "Bright Brook O48",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0319.jpg",
            "description": "Enhance your style with these trendy frames. The epitome of luxury.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 321,
            "category": "Sunglasses",
            "modelName": "Lustrous Prairie S66",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0320.jpg",
            "description": "Enhance your style with these trendy frames. Made for the discerning individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 322,
            "category": "Sunglasses",
            "modelName": "Vivid Star G17",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0321.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect for the stylish individual.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 323,
            "category": "Sunglasses",
            "modelName": "Jubilant Pine H89",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0322.jpg",
            "description": "Perfect balance of style and functionality. Designed for the perfect look.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 324,
            "category": "Sunglasses",
            "modelName": "Grand Stream C80",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0323.jpg",
            "description": "Elevate your style with these designer frames. Elegant design for a modern look.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 325,
            "category": "Sunglasses",
            "modelName": "Stunning Hill H10",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0324.jpg",
            "description": "Enhance your style with these trendy frames. Designed for everyday wear.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 326,
            "category": "Sunglasses",
            "modelName": "Stunning Peak R66",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0325.jpg",
            "description": "Designed to complement any outfit. Engineered for the modern lifestyle.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 327,
            "category": "Sunglasses",
            "modelName": "Stunning Forest Y43",
            "price": 260000,
            "imageUrl": "../../img/sunglasses/S0326.jpg",
            "description": "Chic and contemporary design. Style that lasts.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 328,
            "category": "Sunglasses",
            "modelName": "Refined Lagoon Y29",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0327.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 329,
            "category": "Sunglasses",
            "modelName": "Polished Sky T46",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0328.jpg",
            "description": "Crafted with precision and care. Style and functionality combined.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 330,
            "category": "Sunglasses",
            "modelName": "Gleaming Star J47",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0329.jpg",
            "description": "Classic elegance with a modern edge. A new standard in eyewear.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 331,
            "category": "Sunglasses",
            "modelName": "Radiant Lagoon O41",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0330.jpg",
            "description": "Classic elegance with a modern edge. Sophistication at its finest.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 332,
            "category": "Sunglasses",
            "modelName": "Majestic Star A12",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0331.jpg",
            "description": "Modern design with a touch of elegance. Perfect for any occasion.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 333,
            "category": "Sunglasses",
            "modelName": "Sunny Stream G35",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0332.jpg",
            "description": "Modern design with a touch of elegance. Engineered for the modern lifestyle.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 334,
            "category": "Sunglasses",
            "modelName": "Pinky Stream C63",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0333.jpg",
            "description": "Enhance your style with these trendy frames. Crafted for those who value elegance.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 335,
            "category": "Sunglasses",
            "modelName": "Harmonious Gorge H97",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0334.jpg",
            "description": "Unmatched quality and attention to detail. Stylish yet durable.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 336,
            "category": "Sunglasses",
            "modelName": "Plush Valley O48",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0335.jpg",
            "description": "Perfect for both casual and formal settings. Timeless design with a modern touch.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 337,
            "category": "Sunglasses",
            "modelName": "Delightful Pine B01",
            "price": 480000,
            "imageUrl": "../../img/sunglasses/S0336.jpg",
            "description": "High-quality materials for lasting durability. Perfect blend of style and comfort.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 338,
            "category": "Sunglasses",
            "modelName": "Mighty Grove H60",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0337.jpg",
            "description": "Designed to provide optimal comfort and style. An icon of style and elegance.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 339,
            "category": "Sunglasses",
            "modelName": "Jubilant Brook B37",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0338.jpg",
            "description": "Lightweight and comfortable for all-day wear. Unmatched style and comfort.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 340,
            "category": "Sunglasses",
            "modelName": "Lustrous Blossom E88",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0339.jpg",
            "description": "Meticulously crafted for a flawless finish. Sophisticated and timeless.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 341,
            "category": "Sunglasses",
            "modelName": "Lustrous Glade N42",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0340.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect for any occasion.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 342,
            "category": "Sunglasses",
            "modelName": "Brilliant Summit T75",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0341.jpg",
            "description": "Elegant and sophisticated eyewear. Designed to enhance your features.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 343,
            "category": "Sunglasses",
            "modelName": "Opulent Field Y38",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0342.jpg",
            "description": "Chic and contemporary design. Perfect blend of style and comfort.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 344,
            "category": "Sunglasses",
            "modelName": "Delightful Field K88",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0343.jpg",
            "description": "Timeless design meets modern functionality. Style and functionality combined.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 345,
            "category": "Sunglasses",
            "modelName": "Elegant Whisper O64",
            "price": 380000,
            "imageUrl": "../../img/sunglasses/S0344.jpg",
            "description": "Sophisticated style for the discerning individual. Unmatched style and comfort.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 346,
            "category": "Sunglasses",
            "modelName": "Glorious Oasis Y64",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0345.jpg",
            "description": "Chic and contemporary design. Style that speaks volumes.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 347,
            "category": "Sunglasses",
            "modelName": "Vivid Hill X16",
            "price": 280000,
            "imageUrl": "../../img/sunglasses/S0346.jpg",
            "description": "Stylish and modern design for any occasion. Designed to stand out.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 348,
            "category": "Sunglasses",
            "modelName": "Stunning Sky B38",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0347.jpg",
            "description": "Combines elegance and comfort effortlessly. Inspired by the latest trends.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 349,
            "category": "Sunglasses",
            "modelName": "Beaming Dream O65",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0348.jpg",
            "description": "Bold and striking design. Style that speaks volumes.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 350,
            "category": "Sunglasses",
            "modelName": "Striking Glacier O96",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0349.jpg",
            "description": "Timeless design meets modern functionality. Perfect for any occasion.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 351,
            "category": "Sunglasses",
            "modelName": "Cheerful Sky S46",
            "price": 450000,
            "imageUrl": "../../img/sunglasses/S0350.jpg",
            "description": "Make a statement with these unique frames. Designed to stand out.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 352,
            "category": "Sunglasses",
            "modelName": "Delightful Sun B15",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0351.jpg",
            "description": "Make a statement with these unique frames. Perfect blend of style and comfort.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 353,
            "category": "Sunglasses",
            "modelName": "Magnificent Spirit Q34",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0352.jpg",
            "description": "Distinctive design for a standout look. Perfect for the modern professional.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 354,
            "category": "Sunglasses",
            "modelName": "Lively Shore R10",
            "price": 350000,
            "imageUrl": "../../img/sunglasses/S0353.jpg",
            "description": "Enhance your look with these elegant frames. Innovative design for a fresh look.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 355,
            "category": "Sunglasses",
            "modelName": "Beaming Echo N44",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0354.jpg",
            "description": "Ideal for a chic and stylish look. Style and functionality combined.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 356,
            "category": "Sunglasses",
            "modelName": "Gleaming Echo I25",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0355.jpg",
            "description": "Unparalleled comfort with a stylish design. Crafted with the finest materials.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 357,
            "category": "Sunglasses",
            "modelName": "Harmonious Breeze U62",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0356.jpg",
            "description": "Classic style with a modern twist. Sophisticated and timeless.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 358,
            "category": "Sunglasses",
            "modelName": "Charming Sanctuary B75",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0357.jpg",
            "description": "Classic design that never goes out of style. Made to be noticed.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 359,
            "category": "Sunglasses",
            "modelName": "Gleaming Gorge K12",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0358.jpg",
            "description": "Elevate your style with these designer frames. Perfect for the modern professional.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 360,
            "category": "Sunglasses",
            "modelName": "Lustrous Haven B33",
            "price": 360000,
            "imageUrl": "../../img/sunglasses/S0359.jpg",
            "description": "Make a statement with these unique frames. Perfect blend of style and comfort.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 361,
            "category": "Sunglasses",
            "modelName": "Cheerful Grove L48",
            "price": 420000,
            "imageUrl": "../../img/sunglasses/S0360.jpg",
            "description": "Timeless appeal with contemporary style. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 362,
            "category": "Sunglasses",
            "modelName": "Jubilant Brook C22",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0361.jpg",
            "description": "Designed to provide optimal comfort and style. Perfect for any fashion-forward individual.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 363,
            "category": "Sunglasses",
            "modelName": "Beaming Glade X13",
            "price": 440000,
            "imageUrl": "../../img/sunglasses/S0362.jpg",
            "description": "Combines elegance and comfort effortlessly. Perfect for any occasion.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 364,
            "category": "Sunglasses",
            "modelName": "Opulent Haven I95",
            "price": 400000,
            "imageUrl": "../../img/sunglasses/S0363.jpg",
            "description": "Combines elegance and comfort effortlessly. Style and functionality combined.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 365,
            "category": "Sunglasses",
            "modelName": "Grand Grove W18",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0364.jpg",
            "description": "High-quality materials for lasting durability. Perfect for any fashion-forward individual.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 366,
            "category": "Sunglasses",
            "modelName": "Resplendent Isle K10",
            "price": 180000,
            "imageUrl": "../../img/sunglasses/S0365.jpg",
            "description": "Bold frames for a confident look. Comfortable fit for all-day wear.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 367,
            "category": "Sunglasses",
            "modelName": "Fabulous Valley T24",
            "price": 250000,
            "imageUrl": "../../img/sunglasses/S0366.jpg",
            "description": "Timeless design meets modern functionality. Stylish yet durable.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 368,
            "category": "Sunglasses",
            "modelName": "Stunning Shore X86",
            "price": 340000,
            "imageUrl": "../../img/sunglasses/S0367.jpg",
            "description": "Perfect for making a fashion statement. Made to be noticed.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 369,
            "category": "Sunglasses",
            "modelName": "Sunny Dream F40",
            "price": 370000,
            "imageUrl": "../../img/sunglasses/S0368.jpg",
            "description": "Sleek and minimalistic for a refined look. The epitome of luxury.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 370,
            "category": "Sunglasses",
            "modelName": "Charming Star M37",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0369.jpg",
            "description": "Distinctive design for a standout look. Designed for the perfect look.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 371,
            "category": "Sunglasses",
            "modelName": "Jubilant Shore N83",
            "price": 330000,
            "imageUrl": "../../img/sunglasses/S0370.jpg",
            "description": "Sophisticated style for the discerning individual. Perfect blend of style and comfort.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 372,
            "category": "Sunglasses",
            "modelName": "Polished Meadow O62",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0371.jpg",
            "description": "Perfect for both casual and formal settings. Stylish yet durable.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 373,
            "category": "Sunglasses",
            "modelName": "Opulent Peak Q71",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0372.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for any occasion.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 374,
            "category": "Sunglasses",
            "modelName": "Stunning Light V68",
            "price": 270000,
            "imageUrl": "../../img/sunglasses/S0373.jpg",
            "description": "Meticulously crafted for a flawless finish. Stylish yet durable.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 375,
            "category": "Sunglasses",
            "modelName": "Luminous Sun J20",
            "price": 470000,
            "imageUrl": "../../img/sunglasses/S0374.jpg",
            "description": "Unmatched quality and attention to detail. Made to be noticed.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 376,
            "category": "Sunglasses",
            "modelName": "Delightful Prairie T60",
            "price": 460000,
            "imageUrl": "../../img/sunglasses/S0375.jpg",
            "description": "Elevate your style with these designer frames. A touch of luxury.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 377,
            "category": "Sunglasses",
            "modelName": "Vibrant Glen A96",
            "price": 390000,
            "imageUrl": "../../img/sunglasses/S0376.jpg",
            "description": "Crafted for the fashion-conscious individual. A symbol of sophistication.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 378,
            "category": "Sunglasses",
            "modelName": "Sunny Dream T77",
            "price": 270000,
            "imageUrl": "../../img/sunglasses/S0377.jpg",
            "description": "Perfect for making a fashion statement. Designed for everyday wear.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 379,
            "category": "Sunglasses",
            "modelName": "Vibrant Meadow H54",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0378.jpg",
            "description": "Ideal for a chic and stylish look. A blend of tradition and innovation.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 380,
            "category": "Sunglasses",
            "modelName": "Bright Ocean W11",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0379.jpg",
            "description": "High-quality materials for lasting durability. Perfect for those who appreciate quality.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 381,
            "category": "Sunglasses",
            "modelName": "Gleaming Glacier W34",
            "price": 150000,
            "imageUrl": "../../img/sunglasses/S0380.jpg",
            "description": "Designed to complement any outfit. Sophistication at its finest.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 382,
            "category": "Sunglasses",
            "modelName": "Charming Ridge Z54",
            "price": 160000,
            "imageUrl": "../../img/sunglasses/S0381.jpg",
            "description": "Make a statement with these unique frames. Style that transcends time.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 383,
            "category": "Sunglasses",
            "modelName": "Brilliant Sun S92",
            "price": 290000,
            "imageUrl": "../../img/sunglasses/S0382.jpg",
            "description": "Fashion-forward design for the modern individual. A symbol of sophistication.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 384,
            "category": "Sunglasses",
            "modelName": "Delightful Sanctuary D74",
            "price": 410000,
            "imageUrl": "../../img/sunglasses/S0383.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Style that speaks volumes.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 385,
            "category": "Sunglasses",
            "modelName": "Beaming Echo I23",
            "price": 300000,
            "imageUrl": "../../img/sunglasses/S0384.jpg",
            "description": "Distinctive design for a standout look. A blend of tradition and innovation.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 386,
            "category": "Sunglasses",
            "modelName": "Splendid Hill U69",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0385.jpg",
            "description": "Bold and striking design. Perfect for the modern professional.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 387,
            "category": "Sunglasses",
            "modelName": "Graceful Blossom H05",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0386.jpg",
            "description": "Enhance your look with these elegant frames. Comfortable fit for all-day wear.",
            "frameColor": "Black",
            "material": "Acetate"
        },
        {
            "productId": 388,
            "category": "Sunglasses",
            "modelName": "Elegant Star B95",
            "price": 230000,
            "imageUrl": "../../img/sunglasses/S0387.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for making a statement.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 389,
            "category": "Sunglasses",
            "modelName": "Luminous Spirit U15",
            "price": 320000,
            "imageUrl": "../../img/sunglasses/S0388.jpg",
            "description": "Timeless design meets modern functionality. Inspired by the latest trends.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 390,
            "category": "Sunglasses",
            "modelName": "Attractive Light W35",
            "price": 170000,
            "imageUrl": "../../img/sunglasses/S0389.jpg",
            "description": "Perfect for making a fashion statement. Comfortable fit for all-day wear.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 391,
            "category": "Sunglasses",
            "modelName": "Radiant Glen D55",
            "price": 190000,
            "imageUrl": "../../img/sunglasses/S0390.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Comfortable fit for all-day wear.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 392,
            "category": "Sunglasses",
            "modelName": "Sunny Peak Q89",
            "price": 310000,
            "imageUrl": "../../img/sunglasses/S0391.jpg",
            "description": "Distinctive design for a standout look. Sophisticated and timeless.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 393,
            "category": "Sunglasses",
            "modelName": "Majestic Prairie E23",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0392.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for any fashion-forward individual.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 394,
            "category": "Sunglasses",
            "modelName": "Grand Pine F76",
            "price": 200000,
            "imageUrl": "../../img/sunglasses/S0393.jpg",
            "description": "Crafted for the fashion-conscious individual. Comfortable fit for all-day wear.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 395,
            "category": "Sunglasses",
            "modelName": "Delightful Oasis P34",
            "price": 240000,
            "imageUrl": "../../img/sunglasses/S0394.jpg",
            "description": "Lightweight and comfortable for all-day wear. Designed to stand out.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 396,
            "category": "Sunglasses",
            "modelName": "Magnificent Field R51",
            "price": 430000,
            "imageUrl": "../../img/sunglasses/S0395.jpg",
            "description": "Designed to provide optimal comfort and style. Made to be noticed.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 397,
            "category": "Sunglasses",
            "modelName": "Sparkling Shore Q64",
            "price": 210000,
            "imageUrl": "../../img/sunglasses/S0396.jpg",
            "description": "Combines elegance and comfort effortlessly. The ultimate fashion accessory.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 398,
            "category": "Glasses",
            "modelName": "Mighty Dream I42",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0000.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Timeless design with a modern touch.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 399,
            "category": "Glasses",
            "modelName": "Fabulous Glade T09",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0001.jpg",
            "description": "Distinctive design for a standout look. Designed for everyday wear.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 400,
            "category": "Glasses",
            "modelName": "Brilliant Heart O76",
            "price": 400000,
            "imageUrl": "../../img/glasses/G0002.jpg",
            "description": "Fashion-forward design for the modern individual. Timeless design with a modern touch.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 401,
            "category": "Glasses",
            "modelName": "Radiant Glade V21",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0003.jpg",
            "description": "Crafted for the fashion-conscious individual. Designed to enhance your features.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 402,
            "category": "Glasses",
            "modelName": "Harmonious Grove F28",
            "price": 240000,
            "imageUrl": "../../img/glasses/G0004.jpg",
            "description": "Bold frames for a confident look. Stylish yet durable.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 403,
            "category": "Glasses",
            "modelName": "Refined Gorge X12",
            "price": 280000,
            "imageUrl": "../../img/glasses/G0005.jpg",
            "description": "Versatile design suitable for any face shape. Stylish yet durable.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 404,
            "category": "Glasses",
            "modelName": "Vibrant Meadow R07",
            "price": 470000,
            "imageUrl": "../../img/glasses/G0006.jpg",
            "description": "Timeless design meets modern functionality. Perfect for any occasion.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 405,
            "category": "Glasses",
            "modelName": "Delightful Heart R40",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0007.jpg",
            "description": "Elegant and sophisticated eyewear. Designed with you in mind.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 406,
            "category": "Glasses",
            "modelName": "Polished Sky D15",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0008.jpg",
            "description": "Ideal for a chic and stylish look. Innovative design for a fresh look.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 407,
            "category": "Glasses",
            "modelName": "Lustrous Lagoon Y30",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0009.jpg",
            "description": "Timeless design meets modern functionality. The perfect addition to any outfit.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 408,
            "category": "Glasses",
            "modelName": "Jubilant Breeze A72",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0010.jpg",
            "description": "Elevate your style with these designer frames. Style that transcends time.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 409,
            "category": "Glasses",
            "modelName": "Harmonious Haven S16",
            "price": 320000,
            "imageUrl": "../../img/glasses/G0011.jpg",
            "description": "Enhance your style with these trendy frames. Elegance in every detail.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 410,
            "category": "Glasses",
            "modelName": "Grand Peak X09",
            "price": 200000,
            "imageUrl": "../../img/glasses/G0012.jpg",
            "description": "Enhance your style with these trendy frames. Crafted for those who value elegance.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 411,
            "category": "Glasses",
            "modelName": "Bright Breeze H05",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0013.jpg",
            "description": "Bold and striking design. Designed for the perfect look.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 412,
            "category": "Glasses",
            "modelName": "Luminous Valley F04",
            "price": 180000,
            "imageUrl": "../../img/glasses/G0014.jpg",
            "description": "Chic and contemporary design. A symbol of sophistication.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 413,
            "category": "Glasses",
            "modelName": "Mighty Ocean Z12",
            "price": 290000,
            "imageUrl": "../../img/glasses/G0015.jpg",
            "description": "Ideal for a chic and stylish look. Unmatched style and comfort.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 414,
            "category": "Glasses",
            "modelName": "Glorious Prairie J51",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0016.jpg",
            "description": "High-quality materials for lasting durability. Sophisticated and timeless.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 415,
            "category": "Glasses",
            "modelName": "Bright Spirit W90",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0017.jpg",
            "description": "Lightweight frames for maximum comfort. Timeless design with a modern touch.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 416,
            "category": "Glasses",
            "modelName": "Elegant Shore T38",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0018.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for the modern professional.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 417,
            "category": "Glasses",
            "modelName": "Lustrous Moon B82",
            "price": 290000,
            "imageUrl": "../../img/glasses/G0019.jpg",
            "description": "Bold frames for a confident look. A new standard in eyewear.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 418,
            "category": "Glasses",
            "modelName": "Brilliant Sky O90",
            "price": 280000,
            "imageUrl": "../../img/glasses/G0020.jpg",
            "description": "Versatile design suitable for any face shape. Crafted for those who value elegance.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 419,
            "category": "Glasses",
            "modelName": "Magnificent Moon Q49",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0021.jpg",
            "description": "Timeless appeal with contemporary style. Perfect for the modern professional.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 420,
            "category": "Glasses",
            "modelName": "Mighty Brook M08",
            "price": 220000,
            "imageUrl": "../../img/glasses/G0022.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect blend of style and comfort.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 421,
            "category": "Glasses",
            "modelName": "Brilliant Sky W89",
            "price": 450000,
            "imageUrl": "../../img/glasses/G0023.jpg",
            "description": "Classic design that never goes out of style. Designed with you in mind.",
            "frameColor": "Silver",
            "material": "Combination"
        },
        {
            "productId": 422,
            "category": "Glasses",
            "modelName": "Plush Echo U02",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0024.jpg",
            "description": "Meticulously crafted for a flawless finish. Unmatched style and comfort.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 423,
            "category": "Glasses",
            "modelName": "Glorious Zephyr L09",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0025.jpg",
            "description": "Bold frames for a confident look. The ultimate fashion accessory.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 424,
            "category": "Glasses",
            "modelName": "Glorious Field N44",
            "price": 480000,
            "imageUrl": "../../img/glasses/G0026.jpg",
            "description": "Crafted with precision and care. Perfect for the stylish individual.",
            "frameColor": "Brown",
            "material": "Combination"
        },
        {
            "productId": 425,
            "category": "Glasses",
            "modelName": "Stunning Peak N33",
            "price": 450000,
            "imageUrl": "../../img/glasses/G0027.jpg",
            "description": "Elegant and sophisticated eyewear. Elegance in every detail.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 426,
            "category": "Glasses",
            "modelName": "Vibrant Light N41",
            "price": 440000,
            "imageUrl": "../../img/glasses/G0028.jpg",
            "description": "Enhance your style with these trendy frames. Perfect blend of style and comfort.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 427,
            "category": "Glasses",
            "modelName": "Cheerful Breeze F68",
            "price": 330000,
            "imageUrl": "../../img/glasses/G0029.jpg",
            "description": "Meticulously crafted for a flawless finish. Sophistication at its finest.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 428,
            "category": "Glasses",
            "modelName": "Cheerful Spirit L07",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0030.jpg",
            "description": "Perfect for making a fashion statement. Designed to stand out.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 429,
            "category": "Glasses",
            "modelName": "Harmonious Oasis D94",
            "price": 460000,
            "imageUrl": "../../img/glasses/G0031.jpg",
            "description": "Unmatched quality and attention to detail. Elegant design for a modern look.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 430,
            "category": "Glasses",
            "modelName": "Brilliant Peak V35",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0032.jpg",
            "description": "Distinctive design for a standout look. Engineered for the modern lifestyle.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 431,
            "category": "Glasses",
            "modelName": "Sparkling Grove Z37",
            "price": 460000,
            "imageUrl": "../../img/glasses/G0033.jpg",
            "description": "High-quality materials for lasting durability. The perfect addition to any outfit.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 432,
            "category": "Glasses",
            "modelName": "Glorious Glade I88",
            "price": 180000,
            "imageUrl": "../../img/glasses/G0034.jpg",
            "description": "Classic style with a modern twist. Engineered for the modern lifestyle.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 433,
            "category": "Glasses",
            "modelName": "Lustrous Willow M21",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0035.jpg",
            "description": "Lightweight and comfortable for all-day wear. Designed to stand out.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 434,
            "category": "Glasses",
            "modelName": "Stunning Heart D88",
            "price": 230000,
            "imageUrl": "../../img/glasses/G0036.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect blend of style and comfort.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 435,
            "category": "Glasses",
            "modelName": "Delightful Harbor Y05",
            "price": 210000,
            "imageUrl": "../../img/glasses/G0037.jpg",
            "description": "Perfect for making a fashion statement. Sophisticated and timeless.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 436,
            "category": "Glasses",
            "modelName": "Cheerful Brook I27",
            "price": 230000,
            "imageUrl": "../../img/glasses/G0038.jpg",
            "description": "Bold and striking design. Innovative design for a fresh look.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 437,
            "category": "Glasses",
            "modelName": "Opulent Glacier H65",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0039.jpg",
            "description": "Designed to complement any outfit. Designed to stand out.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 438,
            "category": "Glasses",
            "modelName": "Resplendent Sky T66",
            "price": 180000,
            "imageUrl": "../../img/glasses/G0040.jpg",
            "description": "Classic style with a modern twist. Perfect blend of style and comfort.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 439,
            "category": "Glasses",
            "modelName": "Elegant Glade J32",
            "price": 200000,
            "imageUrl": "../../img/glasses/G0041.jpg",
            "description": "Classic design that never goes out of style. Unmatched style and comfort.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 440,
            "category": "Glasses",
            "modelName": "Stunning Glen F35",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0042.jpg",
            "description": "Perfect for a sleek, contemporary look. Inspired by classic designs.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 441,
            "category": "Glasses",
            "modelName": "Bold Isle U33",
            "price": 450000,
            "imageUrl": "../../img/glasses/G0043.jpg",
            "description": "Perfect for a sleek, contemporary look. Inspired by classic designs.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 442,
            "category": "Glasses",
            "modelName": "Harmonious Summit G64",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0044.jpg",
            "description": "Classic design that never goes out of style. Designed for everyday wear.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 443,
            "category": "Glasses",
            "modelName": "Resplendent Sky H02",
            "price": 200000,
            "imageUrl": "../../img/glasses/G0045.jpg",
            "description": "Unmatched quality and attention to detail. The ultimate fashion accessory.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 444,
            "category": "Glasses",
            "modelName": "Polished Zephyr G23",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0046.jpg",
            "description": "Lightweight frames for maximum comfort. Inspired by classic designs.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 445,
            "category": "Glasses",
            "modelName": "Fabulous Star F34",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0047.jpg",
            "description": "Perfect for making a fashion statement. Perfect for any occasion.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 446,
            "category": "Glasses",
            "modelName": "Splendid Prairie Y01",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0048.jpg",
            "description": "Make a statement with these unique frames. Style and functionality combined.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 447,
            "category": "Glasses",
            "modelName": "Brilliant Stream Y30",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0049.jpg",
            "description": "Unmatched quality and attention to detail. Inspired by the latest trends.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 448,
            "category": "Glasses",
            "modelName": "Elegant Star A99",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0050.jpg",
            "description": "Fashion-forward design for the modern individual. Sophisticated and timeless.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 449,
            "category": "Glasses",
            "modelName": "Charming Forest Y65",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0051.jpg",
            "description": "Fashion-forward design for the modern individual. Perfect for the modern professional.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 450,
            "category": "Glasses",
            "modelName": "Glorious Heart R14",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0052.jpg",
            "description": "Enhance your style with these trendy frames. Style and functionality combined.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 451,
            "category": "Glasses",
            "modelName": "Majestic Field F99",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0053.jpg",
            "description": "Crafted with precision and care. Innovative design for a fresh look.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 452,
            "category": "Glasses",
            "modelName": "Opulent Breeze G07",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0054.jpg",
            "description": "Sophisticated style for the discerning individual. The perfect addition to any outfit.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 453,
            "category": "Glasses",
            "modelName": "Elegant Star N93",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0055.jpg",
            "description": "Classic style with a modern twist. Elegance in every detail.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 454,
            "category": "Glasses",
            "modelName": "Mighty Forest O63",
            "price": 240000,
            "imageUrl": "../../img/glasses/G0056.jpg",
            "description": "Make a statement with these unique frames. Perfect for the stylish individual.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 455,
            "category": "Glasses",
            "modelName": "Charming Field T68",
            "price": 150000,
            "imageUrl": "../../img/glasses/G0057.jpg",
            "description": "Enhance your style with these trendy frames. Perfect for the modern professional.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 456,
            "category": "Glasses",
            "modelName": "Dazzling Spirit H67",
            "price": 290000,
            "imageUrl": "../../img/glasses/G0058.jpg",
            "description": "Enhance your style with these trendy frames. Stylish yet durable.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 457,
            "category": "Glasses",
            "modelName": "Vivid Moon F65",
            "price": 320000,
            "imageUrl": "../../img/glasses/G0059.jpg",
            "description": "Perfect balance of style and functionality. An icon of style and elegance.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 458,
            "category": "Glasses",
            "modelName": "Lustrous Heart G76",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0060.jpg",
            "description": "Designed to provide optimal comfort and style. Style and functionality combined.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 459,
            "category": "Glasses",
            "modelName": "Mighty Dream J52",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0061.jpg",
            "description": "Perfect for both casual and formal settings. Style that transcends time.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 460,
            "category": "Glasses",
            "modelName": "Luminous Glacier Z12",
            "price": 280000,
            "imageUrl": "../../img/glasses/G0062.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Designed for the perfect look.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 461,
            "category": "Glasses",
            "modelName": "Polished Rose C99",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0063.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for the stylish individual.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 462,
            "category": "Glasses",
            "modelName": "Delightful Stream A99",
            "price": 330000,
            "imageUrl": "../../img/glasses/G0064.jpg",
            "description": "Ideal for a chic and stylish look. Perfect for those who appreciate quality.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 463,
            "category": "Glasses",
            "modelName": "Stunning Oasis S33",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0065.jpg",
            "description": "Enhance your look with these elegant frames. Engineered for the modern lifestyle.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 464,
            "category": "Glasses",
            "modelName": "Sunny Sanctuary H57",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0066.jpg",
            "description": "Combines elegance and comfort effortlessly. Style and functionality combined.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 465,
            "category": "Glasses",
            "modelName": "Vivid Breeze Y62",
            "price": 410000,
            "imageUrl": "../../img/glasses/G0067.jpg",
            "description": "Modern design with a touch of elegance. Style and functionality combined.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 466,
            "category": "Glasses",
            "modelName": "Magnificent Star U95",
            "price": 450000,
            "imageUrl": "../../img/glasses/G0068.jpg",
            "description": "Chic and contemporary design. Designed with you in mind.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 467,
            "category": "Glasses",
            "modelName": "Sunny Sanctuary E02",
            "price": 200000,
            "imageUrl": "../../img/glasses/G0069.jpg",
            "description": "Crafted for the fashion-conscious individual. Designed for the perfect look.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 468,
            "category": "Glasses",
            "modelName": "Exquisite Heart Q81",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0070.jpg",
            "description": "Sleek and minimalistic for a refined look. Elegance in every detail.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 469,
            "category": "Glasses",
            "modelName": "Shiny Blossom O62",
            "price": 280000,
            "imageUrl": "../../img/glasses/G0071.jpg",
            "description": "Classic design that never goes out of style. Crafted with the finest materials.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 470,
            "category": "Glasses",
            "modelName": "Exquisite Heart B72",
            "price": 220000,
            "imageUrl": "../../img/glasses/G0072.jpg",
            "description": "Designed to provide optimal comfort and style. Made for the discerning individual.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 471,
            "category": "Glasses",
            "modelName": "Dazzling Ocean W91",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0073.jpg",
            "description": "Chic and contemporary design. Designed to stand out.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 472,
            "category": "Glasses",
            "modelName": "Opulent Ocean Q01",
            "price": 470000,
            "imageUrl": "../../img/glasses/G0074.jpg",
            "description": "Unmatched quality and attention to detail. Innovative design for a fresh look.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 473,
            "category": "Glasses",
            "modelName": "Vivid Zephyr S96",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0075.jpg",
            "description": "Combines elegance and comfort effortlessly. Sophisticated and timeless.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 474,
            "category": "Glasses",
            "modelName": "Dazzling Peak L22",
            "price": 180000,
            "imageUrl": "../../img/glasses/G0076.jpg",
            "description": "Lightweight and comfortable for all-day wear. Stylish yet durable.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 475,
            "category": "Glasses",
            "modelName": "Shiny Valley N28",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0077.jpg",
            "description": "Designed to complement any outfit. Perfect for making a statement.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 476,
            "category": "Glasses",
            "modelName": "Bright Breeze L94",
            "price": 410000,
            "imageUrl": "../../img/glasses/G0078.jpg",
            "description": "Timeless appeal with contemporary style. Comfortable fit for all-day wear.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 477,
            "category": "Glasses",
            "modelName": "Striking Rose S16",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0079.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Perfect for making a statement.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 478,
            "category": "Glasses",
            "modelName": "Polished Breeze Y36",
            "price": 480000,
            "imageUrl": "../../img/glasses/G0080.jpg",
            "description": "Versatile design suitable for any face shape. Comfortable fit for all-day wear.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 479,
            "category": "Glasses",
            "modelName": "Magnificent Blossom W70",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0081.jpg",
            "description": "High-quality materials for lasting durability. Made for the discerning individual.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 480,
            "category": "Glasses",
            "modelName": "Graceful Brook N77",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0082.jpg",
            "description": "Fashionable frames for every occasion. Inspired by classic designs.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 481,
            "category": "Glasses",
            "modelName": "Stunning Zephyr G78",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0083.jpg",
            "description": "Classic style with a modern twist. Inspired by the latest trends.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 482,
            "category": "Glasses",
            "modelName": "Charming Lagoon X92",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0084.jpg",
            "description": "Perfect balance of style and functionality. The ultimate fashion accessory.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 483,
            "category": "Glasses",
            "modelName": "Harmonious Prairie N37",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0085.jpg",
            "description": "Unparalleled comfort with a stylish design. Made for the discerning individual.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 484,
            "category": "Glasses",
            "modelName": "Resplendent Valley F92",
            "price": 470000,
            "imageUrl": "../../img/glasses/G0086.jpg",
            "description": "Chic and contemporary design. Style that lasts.",
            "frameColor": "Silver",
            "material": "Metal"
        },
        {
            "productId": 485,
            "category": "Glasses",
            "modelName": "Splendid Spirit Z92",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0087.jpg",
            "description": "Classic style with a modern twist. Perfect for those who appreciate quality.",
            "frameColor": "Green",
            "material": "Acetate"
        },
        {
            "productId": 486,
            "category": "Glasses",
            "modelName": "Cheerful Glade O34",
            "price": 260000,
            "imageUrl": "../../img/glasses/G0088.jpg",
            "description": "Perfect for making a fashion statement. Elegance in every detail.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 487,
            "category": "Glasses",
            "modelName": "Harmonious Spirit I07",
            "price": 250000,
            "imageUrl": "../../img/glasses/G0089.jpg",
            "description": "A must-have accessory for fashion enthusiasts. A blend of tradition and innovation.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 488,
            "category": "Glasses",
            "modelName": "Resplendent Stream G91",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0090.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Elegant design for a modern look.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 489,
            "category": "Glasses",
            "modelName": "Lively Forest D87",
            "price": 410000,
            "imageUrl": "../../img/glasses/G0091.jpg",
            "description": "Designed to complement any outfit. Perfect for the stylish individual.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 490,
            "category": "Glasses",
            "modelName": "Jubilant Meadow H24",
            "price": 360000,
            "imageUrl": "../../img/glasses/G0092.jpg",
            "description": "High-quality materials for lasting durability. Designed for the perfect look.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 491,
            "category": "Glasses",
            "modelName": "Mighty Field K72",
            "price": 440000,
            "imageUrl": "../../img/glasses/G0093.jpg",
            "description": "Bold frames for a confident look. Perfect for any fashion-forward individual.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 492,
            "category": "Glasses",
            "modelName": "Pinky Heart R37",
            "price": 450000,
            "imageUrl": "../../img/glasses/G0094.jpg",
            "description": "Chic and contemporary design. Made to be noticed.",
            "frameColor": "Silver",
            "material": "Acetate"
        },
        {
            "productId": 493,
            "category": "Glasses",
            "modelName": "Exquisite Sky X95",
            "price": 400000,
            "imageUrl": "../../img/glasses/G0095.jpg",
            "description": "Unparalleled comfort with a stylish design. Stylish yet durable.",
            "frameColor": "Other",
            "material": "Metal"
        },
        {
            "productId": 494,
            "category": "Glasses",
            "modelName": "Magnificent Sanctuary I44",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0096.jpg",
            "description": "Premium craftsmanship for superior quality. Timeless design with a modern touch.",
            "frameColor": "Grey",
            "material": "Combination"
        },
        {
            "productId": 495,
            "category": "Glasses",
            "modelName": "Charming Oasis U22",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0097.jpg",
            "description": "Modern design with a touch of elegance. Designed for everyday wear.",
            "frameColor": "Clear",
            "material": "Combination"
        },
        {
            "productId": 496,
            "category": "Glasses",
            "modelName": "Radiant Whisper T12",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0098.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Crafted with the finest materials.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 497,
            "category": "Glasses",
            "modelName": "Stunning Sanctuary A70",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0099.jpg",
            "description": "Distinctive design for a standout look. Style that speaks volumes.",
            "frameColor": "Pink",
            "material": "Combination"
        },
        {
            "productId": 498,
            "category": "Glasses",
            "modelName": "Striking Hill L40",
            "price": 150000,
            "imageUrl": "../../img/glasses/G0100.jpg",
            "description": "Unmatched quality and attention to detail. Perfect for the modern professional.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 499,
            "category": "Glasses",
            "modelName": "Jubilant Field O83",
            "price": 360000,
            "imageUrl": "../../img/glasses/G0101.jpg",
            "description": "Bold frames for a confident look. Elegant design for a modern look.",
            "frameColor": "Yellow",
            "material": "Acetate"
        },
        {
            "productId": 500,
            "category": "Glasses",
            "modelName": "Majestic Summit L14",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0102.jpg",
            "description": "Designed to complement any outfit. Designed for everyday wear.",
            "frameColor": "Black",
            "material": "Metal"
        },
        {
            "productId": 501,
            "category": "Glasses",
            "modelName": "Bold Gorge D23",
            "price": 230000,
            "imageUrl": "../../img/glasses/G0103.jpg",
            "description": "Lightweight and comfortable for all-day wear. Inspired by the latest trends.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 502,
            "category": "Glasses",
            "modelName": "Gleaming Blossom S47",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0104.jpg",
            "description": "Perfect for making a fashion statement. Designed for everyday wear.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 503,
            "category": "Glasses",
            "modelName": "Shiny Sanctuary P27",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0105.jpg",
            "description": "Designed to complement any outfit. Elegance in every detail.",
            "frameColor": "Red",
            "material": "Acetate"
        },
        {
            "productId": 504,
            "category": "Glasses",
            "modelName": "Beaming Moon I80",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0106.jpg",
            "description": "Classic design that never goes out of style. Elegant design for a modern look.",
            "frameColor": "Blue",
            "material": "Combination"
        },
        {
            "productId": 505,
            "category": "Glasses",
            "modelName": "Attractive Lagoon M03",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0107.jpg",
            "description": "Crafted for the fashion-conscious individual. Designed with you in mind.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 506,
            "category": "Glasses",
            "modelName": "Dazzling Zephyr T88",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0108.jpg",
            "description": "Crafted with precision and care. Perfect for the stylish individual.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 507,
            "category": "Glasses",
            "modelName": "Elegant Glen D55",
            "price": 160000,
            "imageUrl": "../../img/glasses/G0109.jpg",
            "description": "Lightweight and comfortable for all-day wear. Designed for everyday wear.",
            "frameColor": "Gold",
            "material": "Combination"
        },
        {
            "productId": 508,
            "category": "Glasses",
            "modelName": "Luminous Field J39",
            "price": 220000,
            "imageUrl": "../../img/glasses/G0110.jpg",
            "description": "Ideal for a chic and stylish look. Designed to stand out.",
            "frameColor": "Pink",
            "material": "Metal"
        },
        {
            "productId": 509,
            "category": "Glasses",
            "modelName": "Sparkling Haven Q06",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0111.jpg",
            "description": "Combines elegance and comfort effortlessly. Perfect for any fashion-forward individual.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 510,
            "category": "Glasses",
            "modelName": "Luminous Prairie A78",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0112.jpg",
            "description": "Bold frames for a confident look. Crafted for those who value elegance.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 511,
            "category": "Glasses",
            "modelName": "Refined Ocean D78",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0113.jpg",
            "description": "Classic style with a modern twist. Unmatched style and comfort.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 512,
            "category": "Glasses",
            "modelName": "Gorgeous Gorge N66",
            "price": 170000,
            "imageUrl": "../../img/glasses/G0114.jpg",
            "description": "Elegant and sophisticated eyewear. Style that lasts.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 513,
            "category": "Glasses",
            "modelName": "Shiny Lagoon I41",
            "price": 320000,
            "imageUrl": "../../img/glasses/G0115.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Comfortable fit for all-day wear.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 514,
            "category": "Glasses",
            "modelName": "Vivid Isle Y64",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0116.jpg",
            "description": "Distinctive design for a standout look. Perfect for any fashion-forward individual.",
            "frameColor": "Clear",
            "material": "Acetate"
        },
        {
            "productId": 515,
            "category": "Glasses",
            "modelName": "Beaming Rose J06",
            "price": 370000,
            "imageUrl": "../../img/glasses/G0117.jpg",
            "description": "Crafted with precision and care. Style that transcends time.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 516,
            "category": "Glasses",
            "modelName": "Elegant Dream B87",
            "price": 210000,
            "imageUrl": "../../img/glasses/G0118.jpg",
            "description": "A must-have accessory for fashion enthusiasts. A blend of tradition and innovation.",
            "frameColor": "Blue",
            "material": "Acetate"
        },
        {
            "productId": 517,
            "category": "Glasses",
            "modelName": "Graceful Star M76",
            "price": 310000,
            "imageUrl": "../../img/glasses/G0119.jpg",
            "description": "Versatile design suitable for any face shape. Made for the discerning individual.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 518,
            "category": "Glasses",
            "modelName": "Stunning Sun L58",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0120.jpg",
            "description": "Lightweight frames for maximum comfort. Style that speaks volumes.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 519,
            "category": "Glasses",
            "modelName": "Mighty Glade W23",
            "price": 320000,
            "imageUrl": "../../img/glasses/G0121.jpg",
            "description": "Elegant and sophisticated eyewear. A blend of tradition and innovation.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 520,
            "category": "Glasses",
            "modelName": "Magnificent Echo Z33",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0122.jpg",
            "description": "Enhance your style with these trendy frames. Designed for everyday wear.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 521,
            "category": "Glasses",
            "modelName": "Pinky Grove V64",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0123.jpg",
            "description": "Stylish and modern design for any occasion. A blend of tradition and innovation.",
            "frameColor": "White",
            "material": "Combination"
        },
        {
            "productId": 522,
            "category": "Glasses",
            "modelName": "Lustrous Dream I26",
            "price": 150000,
            "imageUrl": "../../img/glasses/G0124.jpg",
            "description": "Make a statement with these unique frames. Designed to enhance your features.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 523,
            "category": "Glasses",
            "modelName": "Glorious Lagoon Y17",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0125.jpg",
            "description": "Unmatched quality and attention to detail. Made for the discerning individual.",
            "frameColor": "Brown",
            "material": "Acetate"
        },
        {
            "productId": 524,
            "category": "Glasses",
            "modelName": "Striking Glade L19",
            "price": 290000,
            "imageUrl": "../../img/glasses/G0126.jpg",
            "description": "Sleek and minimalistic for a refined look. A symbol of sophistication.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 525,
            "category": "Glasses",
            "modelName": "Graceful Moon N55",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0127.jpg",
            "description": "Versatile design suitable for any face shape. Engineered for the modern lifestyle.",
            "frameColor": "Pink",
            "material": "Acetate"
        },
        {
            "productId": 526,
            "category": "Glasses",
            "modelName": "Cheerful Shore A69",
            "price": 180000,
            "imageUrl": "../../img/glasses/G0128.jpg",
            "description": "Lightweight frames for maximum comfort. An icon of style and elegance.",
            "frameColor": "Gold",
            "material": "Metal"
        },
        {
            "productId": 527,
            "category": "Glasses",
            "modelName": "Pinky Rose M62",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0129.jpg",
            "description": "Premium craftsmanship for superior quality. Designed for the perfect look.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 528,
            "category": "Glasses",
            "modelName": "Magnificent Peak I11",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0130.jpg",
            "description": "Perfect for both casual and formal settings. A touch of luxury.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 529,
            "category": "Glasses",
            "modelName": "Beaming Meadow S72",
            "price": 340000,
            "imageUrl": "../../img/glasses/G0131.jpg",
            "description": "Premium craftsmanship for superior quality. Perfect for any occasion.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 530,
            "category": "Glasses",
            "modelName": "Vivid Brook L62",
            "price": 390000,
            "imageUrl": "../../img/glasses/G0132.jpg",
            "description": "Fashion-forward design for the modern individual. A touch of luxury.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 531,
            "category": "Glasses",
            "modelName": "Grand Moon T49",
            "price": 190000,
            "imageUrl": "../../img/glasses/G0133.jpg",
            "description": "Distinctive design for a standout look. Perfect for those who appreciate quality.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 532,
            "category": "Glasses",
            "modelName": "Plush Forest Z91",
            "price": 310000,
            "imageUrl": "../../img/glasses/G0134.jpg",
            "description": "Timeless design meets modern functionality. Designed for everyday wear.",
            "frameColor": "White",
            "material": "Acetate"
        },
        {
            "productId": 533,
            "category": "Glasses",
            "modelName": "Elegant Blossom D08",
            "price": 460000,
            "imageUrl": "../../img/glasses/G0135.jpg",
            "description": "A must-have accessory for fashion enthusiasts. Inspired by the latest trends.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 534,
            "category": "Glasses",
            "modelName": "Glorious Sun L84",
            "price": 360000,
            "imageUrl": "../../img/glasses/G0136.jpg",
            "description": "Distinctive design for a standout look. An icon of style and elegance.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 535,
            "category": "Glasses",
            "modelName": "Grand Hill D09",
            "price": 320000,
            "imageUrl": "../../img/glasses/G0137.jpg",
            "description": "Lightweight frames for maximum comfort. Perfect for making a statement.",
            "frameColor": "Red",
            "material": "Combination"
        },
        {
            "productId": 536,
            "category": "Glasses",
            "modelName": "Resplendent Stream U39",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0138.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect for any occasion.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 537,
            "category": "Glasses",
            "modelName": "Charming Grove B34",
            "price": 410000,
            "imageUrl": "../../img/glasses/G0139.jpg",
            "description": "Designed to complement any outfit. Made for the discerning individual.",
            "frameColor": "Yellow",
            "material": "Combination"
        },
        {
            "productId": 538,
            "category": "Glasses",
            "modelName": "Gorgeous Blossom M16",
            "price": 350000,
            "imageUrl": "../../img/glasses/G0140.jpg",
            "description": "Elegant and sophisticated eyewear. Perfect for the stylish individual.",
            "frameColor": "White",
            "material": "Metal"
        },
        {
            "productId": 539,
            "category": "Glasses",
            "modelName": "Striking Glen R65",
            "price": 240000,
            "imageUrl": "../../img/glasses/G0141.jpg",
            "description": "Unmatched quality and attention to detail. Style that lasts.",
            "frameColor": "Black",
            "material": "Combination"
        },
        {
            "productId": 540,
            "category": "Glasses",
            "modelName": "Cheerful Spirit J83",
            "price": 220000,
            "imageUrl": "../../img/glasses/G0142.jpg",
            "description": "Perfect for making a fashion statement. Inspired by classic designs.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 541,
            "category": "Glasses",
            "modelName": "Cheerful Pine H90",
            "price": 350000,
            "imageUrl": "../../img/glasses/G0143.jpg",
            "description": "Bold frames for a confident look. Style that transcends time.",
            "frameColor": "Brown",
            "material": "Metal"
        },
        {
            "productId": 542,
            "category": "Glasses",
            "modelName": "Majestic Pine T79",
            "price": 380000,
            "imageUrl": "../../img/glasses/G0144.jpg",
            "description": "Bold frames for a confident look. Timeless design with a modern touch.",
            "frameColor": "Other",
            "material": "Acetate"
        },
        {
            "productId": 543,
            "category": "Glasses",
            "modelName": "Shiny Lagoon F20",
            "price": 440000,
            "imageUrl": "../../img/glasses/G0145.jpg",
            "description": "Stylish and modern design for any occasion. Style that transcends time.",
            "frameColor": "Grey",
            "material": "Metal"
        },
        {
            "productId": 544,
            "category": "Glasses",
            "modelName": "Harmonious Hill Y76",
            "price": 470000,
            "imageUrl": "../../img/glasses/G0146.jpg",
            "description": "Enhance your look with these elegant frames. Perfect for any fashion-forward individual.",
            "frameColor": "Grey",
            "material": "Acetate"
        },
        {
            "productId": 545,
            "category": "Glasses",
            "modelName": "Sparkling Prairie M93",
            "price": 420000,
            "imageUrl": "../../img/glasses/G0147.jpg",
            "description": "Unmatched quality and attention to detail. Timeless design with a modern touch.",
            "frameColor": "Gold",
            "material": "Acetate"
        },
        {
            "productId": 546,
            "category": "Glasses",
            "modelName": "Splendid Dream K45",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0148.jpg",
            "description": "Versatile design suitable for any face shape. Perfect for the stylish individual.",
            "frameColor": "Red",
            "material": "Metal"
        },
        {
            "productId": 547,
            "category": "Glasses",
            "modelName": "Gorgeous Pine F29",
            "price": 200000,
            "imageUrl": "../../img/glasses/G0149.jpg",
            "description": "Bold and striking design. Made for the discerning individual.",
            "frameColor": "Clear",
            "material": "Metal"
        },
        {
            "productId": 548,
            "category": "Glasses",
            "modelName": "Beaming Whisper B91",
            "price": 240000,
            "imageUrl": "../../img/glasses/G0150.jpg",
            "description": "Fashion-forward design for the modern individual. Elegance in every detail.",
            "frameColor": "Green",
            "material": "Metal"
        },
        {
            "productId": 549,
            "category": "Glasses",
            "modelName": "Vivid Brook K17",
            "price": 280000,
            "imageUrl": "../../img/glasses/G0151.jpg",
            "description": "Designed for a perfect fit and ultimate comfort. Perfect for those who appreciate quality.",
            "frameColor": "Other",
            "material": "Combination"
        },
        {
            "productId": 550,
            "category": "Glasses",
            "modelName": "Majestic Field E25",
            "price": 300000,
            "imageUrl": "../../img/glasses/G0152.jpg",
            "description": "Perfect for a sleek, contemporary look. A blend of tradition and innovation.",
            "frameColor": "Green",
            "material": "Combination"
        },
        {
            "productId": 551,
            "category": "Glasses",
            "modelName": "Polished Forest Q48",
            "price": 290000,
            "imageUrl": "../../img/glasses/G0153.jpg",
            "description": "Sophisticated style for the discerning individual. Perfect for the modern professional.",
            "frameColor": "Yellow",
            "material": "Metal"
        },
        {
            "productId": 552,
            "category": "Glasses",
            "modelName": "Bright Echo J04",
            "price": 270000,
            "imageUrl": "../../img/glasses/G0154.jpg",
            "description": "Timeless design meets modern functionality. Stylish yet durable.",
            "frameColor": "Blue",
            "material": "Metal"
        },
        {
            "productId": 553,
            "category": "Glasses",
            "modelName": "Fabulous Spirit T12",
            "price": 430000,
            "imageUrl": "../../img/glasses/G0155.jpg",
            "description": "Timeless design meets modern functionality. Perfect for the stylish individual.",
            "frameColor": "Black",
            "material": "Combination"
        }
    ];
    console.log('saveProductListToLocalStorage() 함수 종료');
    return productList;
}