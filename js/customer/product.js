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

preloadProducts();
function preloadProducts() {
    for (let i = 0; i < productList.length; i++) {
        // 카테고리 분류 
        if (productList[i].category == "Sunglasses") {
            sunglassesList.push(i);
        } else if (productList[i].category == "Glasses") {
            glassesList.push(i);
        }

        // 프레임 칼라 분류 
        // "White", "Black", "Pink", "Grey", "Red", "Brown", 
        // "Clear", "Green", "Gold", "Blue", "Silver", "Yellow", "Other"
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

renderProductList();
function renderProductList() {
    let initProductList = '';
    for (let i = 0; i < productList.length; i++) {
        initProductList += `
            <div class="productInfo">
                <img src="${productList[i].imageUrl}" />
                <div>
                    <h2>${productList[i].modelName}</h2>
                    <img id="addCart" src="../../img/icon/add-icon.svg" />
                    <h3>&#8361;${productList[i].price.toLocaleString()}</h3>
                    <p>${productList[i].description}</p>
                </div>
            </div>
        `;
    }
    document.querySelector('#filteredProductList').innerHTML = initProductList;
    const products = document.querySelectorAll('.productInfo');
    products.forEach(product => {
        product.style.display = 'none';
    });
}

let checkStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const showSunglasses = document.querySelector('#showSunglasses');
const showGlasses = document.querySelector('#showGlasses');
// 카테고리
showSunglasses.addEventListener('change', function () {
    if (showSunglasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[0] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[0] = 0;
    }
});
// 카테고리
showGlasses.addEventListener('change', function () {
    if (showGlasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[1] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[1] = 0;
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
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[2] = 0;
    }
});
// 재질 
showMetal.addEventListener('change', function () {
    if (showMetal.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[3] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[3] = 0;
    }
});
// 재질 
showCombination.addEventListener('change', function () {
    if (showCombination.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[4] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[4] = 0;
    }
});

const showWhite = document.querySelector('#showWhite');
// 프레임 색상  
showWhite.addEventListener('change', function () {
    if (showWhite.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[5] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[5] = 0;
    }
});

const showBlack = document.querySelector('#showBlack');
// 프레임 색상  
showBlack.addEventListener('change', function () {
    if (showBlack.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showPink = document.querySelector('#showPink');
// 프레임 색상  
showPink.addEventListener('change', function () {
    if (showPink.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showGrey = document.querySelector('#showGrey');
// 프레임 색상  
showGrey.addEventListener('change', function () {
    if (showGrey.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showRed = document.querySelector('#showRed');
// 프레임 색상  
showRed.addEventListener('change', function () {
    if (showRed.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showBrown = document.querySelector('#showBrown');
// 프레임 색상  
showBrown.addEventListener('change', function () {
    if (showBrown.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showClear = document.querySelector('#showClear');
// 프레임 색상  
showClear.addEventListener('change', function () {
    if (showClear.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showGreen = document.querySelector('#showGreen');
// 프레임 색상  
showGreen.addEventListener('change', function () {
    if (showGreen.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showGold = document.querySelector('#showGold');
// 프레임 색상  
showGold.addEventListener('change', function () {
    if (showGold.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showBlue = document.querySelector('#showBlue');
// 프레임 색상  
showBlue.addEventListener('change', function () {
    if (showBlue.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showSilver = document.querySelector('#showSilver');
// 프레임 색상  
showSilver.addEventListener('change', function () {
    if (showSilver.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showYellow = document.querySelector('#showYellow');
// 프레임 색상  
showYellow.addEventListener('change', function () {
    if (showYellow.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});

const showOther = document.querySelector('#showOther');
// 프레임 색상  
showOther.addEventListener('change', function () {
    if (showOther.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        checkStatus[6] = 1;
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        checkStatus[6] = 0;
    }
});
