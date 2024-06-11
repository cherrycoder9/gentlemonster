// 프레임 색상과 소재 리스트
const frameColors = ["White", "Black", "Pink", "Grey", "Red", "Brown", "Clear", "Green", "Gold", "Blue", "Silver", "Yellow", "Other"];
const materials = ["Acetate", "Metal", "Combination"];
// 프레임 색상 글자 아래쪽으로 정렬
for (let i = 0; i < frameColors.length; i++) {
    if (i % 8 == 7) {
        document.querySelector('#frameColorFilter').innerHTML += `
        <h3>&nbsp;</h3>
        `;
    }
    document.querySelector('#frameColorFilter').innerHTML += `
        <label>
            <input type="checkbox" id="show${frameColors[i]}" name="frameColorFilter" value="${frameColors[i]}">
            ${frameColors[i]}
        </label>
    `;
}

// 검색을 빠르게 하기 위해 미리 일정한 방법으로 분류를 해놓고 변수에 담아놓음
let sunglassesList = [];
let glassesList = [];
let acetateList = [];
let metalList = [];
let combinationList = [];
let whiteList = [];
let blackList = [];
let pinkList = [];
let greyList = [];
let redList = [];
let brownList = [];
let clearList = [];
let greenList = [];
let goldList = [];
let blueList = [];
let silverList = [];
let yellowList = [];
let otherList = [];
let cartList = [];

preloadProducts();
function preloadProducts() {
    for (let i = 0; i < productList.length; i++) {
        // 카테고리 분류 
        if (productList[i].category == "Sunglasses") {
            sunglassesList.push(i);
        } else if (productList[i].category == "Glasses") {
            glassesList.push(i);
        }

        // 안경테색상 분류
        if (productList[i].frameColor == "White") {
            whiteList.push(i);
        } else if (productList[i].frameColor == "Black") {
            blackList.push(i);
        } else if (productList[i].frameColor == "Pink") {
            pinkList.push(i);
        } else if (productList[i].frameColor == "Grey") {
            greyList.push(i);
        } else if (productList[i].frameColor == "Red") {
            redList.push(i);
        } else if (productList[i].frameColor == "Brown") {
            brownList.push(i);
        } else if (productList[i].frameColor == "Clear") {
            clearList.push(i);
        } else if (productList[i].frameColor == "Green") {
            greenList.push(i);
        } else if (productList[i].frameColor == "Gold") {
            goldList.push(i);
        } else if (productList[i].frameColor == "Blue") {
            blueList.push(i);
        } else if (productList[i].frameColor == "Silver") {
            silverList.push(i);
        } else if (productList[i].frameColor == "Yellow") {
            yellowList.push(i);
        } else if (productList[i].frameColor == "Other") {
            otherList.push(i);
        }

        // 재질 분류
        // "Acetate", "Metal", "Combination"
        if (productList[i].material == "Acetate") {
            acetateList.push(i);
        } else if (productList[i].material == "Metal") {
            metalList.push(i);
        } else if (productList[i].material == "Combination") {
            combinationList.push(i);
        }
    }
}

function renderProductList() {
    console.log(`renderProductList() 함수 진입`);

    let selectedCategoryProduct = [];
    let selectedMaterialProduct = [];
    let selectedFrameColorProduct = [];

    console.log(`selectedCategoryProduct`, selectedCategoryProduct);

    // 카테고리 
    if (checkStatus[0]) {
        selectedCategoryProduct = Array.from(new Set(
            [...selectedCategoryProduct, ...sunglassesList]));
    }
    if (checkStatus[1]) {
        selectedCategoryProduct = Array.from(new Set(
            [...selectedCategoryProduct, ...glassesList]));
    }

    // 재질
    if (checkStatus[2]) {
        selectedMaterialProduct = Array.from(new Set(
            [...selectedMaterialProduct, ...acetateList]));
    }
    if (checkStatus[3]) {
        selectedMaterialProduct = Array.from(new Set(
            [...selectedMaterialProduct, ...metalList]));
    }
    if (checkStatus[4]) {
        selectedMaterialProduct = Array.from(new Set(
            [...selectedMaterialProduct, ...combinationList]));
    }

    // 프레임칼라
    if (checkStatus[5]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...whiteList]));
    }
    if (checkStatus[6]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...blackList]));
    }
    if (checkStatus[7]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...pinkList]));
    }
    if (checkStatus[8]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...greyList]));
    }
    if (checkStatus[9]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...redList]));
    }
    if (checkStatus[10]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...brownList]));
    }
    if (checkStatus[11]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...clearList]));
    }
    if (checkStatus[12]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...greenList]));
    }
    if (checkStatus[13]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...goldList]));
    }
    if (checkStatus[14]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...blueList]));
    }
    if (checkStatus[15]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...silverList]));
    }
    if (checkStatus[16]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...yellowList]));
    }
    if (checkStatus[17]) {
        selectedFrameColorProduct = Array.from(new Set(
            [...selectedFrameColorProduct, ...otherList]));
    }

    let showSelectedProductList;

    if (selectedFrameColorProduct.length == 0 && selectedMaterialProduct.length == 0 && selectedCategoryProduct.length == 0) {
        // 모든 배열이 비어 있는 경우 빈 배열 반환
        showSelectedProductList = [];
    } else if (selectedFrameColorProduct.length == 0 && selectedMaterialProduct.length == 0) {
        // frameColor와 material이 비어 있는 경우 category만 사용
        showSelectedProductList = selectedCategoryProduct;
    } else if (selectedFrameColorProduct.length == 0 && selectedCategoryProduct.length == 0) {
        // frameColor와 category가 비어 있는 경우 material만 사용
        showSelectedProductList = selectedMaterialProduct;
    } else if (selectedMaterialProduct.length == 0 && selectedCategoryProduct.length == 0) {
        // material과 category가 비어 있는 경우 frameColor만 사용
        showSelectedProductList = selectedFrameColorProduct;
    } else if (selectedFrameColorProduct.length == 0) {
        // frameColor가 비어 있는 경우 material과 category의 교집합 사용
        showSelectedProductList = selectedMaterialProduct.filter(item =>
            selectedCategoryProduct.includes(item)
        );
    } else if (selectedMaterialProduct.length == 0) {
        // material이 비어 있는 경우 frameColor와 category의 교집합 사용
        showSelectedProductList = selectedFrameColorProduct.filter(item =>
            selectedCategoryProduct.includes(item)
        );
    } else if (selectedCategoryProduct.length == 0) {
        // category가 비어 있는 경우 frameColor와 material의 교집합 사용
        showSelectedProductList = selectedFrameColorProduct.filter(item =>
            selectedMaterialProduct.includes(item)
        );
    } else {
        // 모든 배열이 비어 있지 않은 경우 세 배열의 교집합 사용
        showSelectedProductList = selectedFrameColorProduct.filter(item =>
            selectedMaterialProduct.includes(item) && selectedCategoryProduct.includes(item)
        );
    }

    let showProductList = '';
    for (let i = 0; i < showSelectedProductList.length; i++) {
        let realIndex = showSelectedProductList[i];
        showProductList += `
            <div class="productInfo">
                <img src="${productList[realIndex].imageUrl}" />
                <div>
                    <h2>${productList[realIndex].modelName}</h2>
                    <img id="addCart" onclick="addCart(${realIndex})" src="../../img/icon/add-icon.svg" />
                    <h3>&#8361;${productList[realIndex].price.toLocaleString()}</h3>
                    <p>${productList[realIndex].description}</p>
                </div>
            </div>
        `;
    }
    document.querySelector('#filteredProductList').innerHTML = showProductList;
    document.querySelector('#countProduct').innerHTML = `${showSelectedProductList.length}개의 상품을 찾았습니다.`;
    console.log(`renderProductList() 함수 종료`);
}

function addCart(i) {
    let count = sessionStorage.getItem('myCart');
    if (!sessionStorage.getItem('myCart')) {
        count = 0;
        sessionStorage.setItem('myCart', count);
    }
    count++;
    console.log(count);
    sessionStorage.setItem('myCart', count);
    loadHeader();
}

let checkStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const showSunglasses = document.querySelector('#showSunglasses');
const showGlasses = document.querySelector('#showGlasses');
// 카테고리
showSunglasses.addEventListener('change', function () {
    if (showSunglasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[0] = 1;
        renderProductList();
    } else {
        renderProductList();
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[0] = 0;
        renderProductList();
    }
});
// 카테고리
showGlasses.addEventListener('change', function () {
    if (showGlasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[1] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[1] = 0;
        renderProductList();
    }
});

const showAcetate = document.querySelector('#showAcetate');
const showMetal = document.querySelector('#showMetal');
const showCombination = document.querySelector('#showCombination');
// 재질 
showAcetate.addEventListener('change', function () {
    if (showAcetate.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[2] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[2] = 0;
        renderProductList();
    }
});
// 재질 
showMetal.addEventListener('change', function () {
    if (showMetal.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[3] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[3] = 0;
        renderProductList();
    }
});
// 재질 
showCombination.addEventListener('change', function () {
    if (showCombination.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[4] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[4] = 0;
        renderProductList();
    }
});

const showWhite = document.querySelector('#showWhite');
// 프레임 색상  
showWhite.addEventListener('change', function () {
    if (showWhite.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[5] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[5] = 0;
        renderProductList();
    }
});

const showBlack = document.querySelector('#showBlack');
// 프레임 색상  
showBlack.addEventListener('change', function () {
    if (showBlack.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
        renderProductList();
    }
});

const showPink = document.querySelector('#showPink');
// 프레임 색상  
showPink.addEventListener('change', function () {
    if (showPink.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[7] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[7] = 0;
        renderProductList();
    }
});

const showGrey = document.querySelector('#showGrey');
// 프레임 색상  
showGrey.addEventListener('change', function () {
    if (showGrey.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[8] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[8] = 0;
        renderProductList();
    }
});

const showRed = document.querySelector('#showRed');
// 프레임 색상  
showRed.addEventListener('change', function () {
    if (showRed.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[9] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[9] = 0;
        renderProductList();
    }
});

const showBrown = document.querySelector('#showBrown');
// 프레임 색상  
showBrown.addEventListener('change', function () {
    if (showBrown.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[10] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[10] = 0;
        renderProductList();
    }
});

const showClear = document.querySelector('#showClear');
// 프레임 색상  
showClear.addEventListener('change', function () {
    if (showClear.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[11] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[11] = 0;
        renderProductList();
    }
});

const showGreen = document.querySelector('#showGreen');
// 프레임 색상  
showGreen.addEventListener('change', function () {
    if (showGreen.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[12] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[12] = 0;
        renderProductList();
    }
});

const showGold = document.querySelector('#showGold');
// 프레임 색상  
showGold.addEventListener('change', function () {
    if (showGold.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[13] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[13] = 0;
        renderProductList();
    }
});

const showBlue = document.querySelector('#showBlue');
// 프레임 색상  
showBlue.addEventListener('change', function () {
    if (showBlue.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[14] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[14] = 0;
        renderProductList();
    }
});

const showSilver = document.querySelector('#showSilver');
// 프레임 색상  
showSilver.addEventListener('change', function () {
    if (showSilver.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[15] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[15] = 0;
        renderProductList();
    }
});

const showYellow = document.querySelector('#showYellow');
// 프레임 색상  
showYellow.addEventListener('change', function () {
    if (showYellow.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[16] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[16] = 0;
        renderProductList();
    }
});

const showOther = document.querySelector('#showOther');
// 프레임 색상  
showOther.addEventListener('change', function () {
    if (showOther.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[17] = 1;
        renderProductList();
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[17] = 0;
        renderProductList();
    }
});
