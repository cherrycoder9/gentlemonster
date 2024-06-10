// 프레임 색상과 소재 리스트
const frameColors = ["White", "Black", "Pink", "Grey", "Red", "Brown", "Clear", "Green", "Gold", "Blue", "Silver", "Yellow", "Other"];
const materials = ["Acetate", "Metal", "Combination"];


for (let i = 0; i < frameColors.length; i++) {
    if (i % 8 == 7) {
        document.querySelector('#frameColorFilter').innerHTML += `
        <h3>&nbsp;</h3>
        `;
    }
    document.querySelector('#frameColorFilter').innerHTML += `
        <label>
            <input type="checkbox" name="frameColorFilter" value="${frameColors[i]}">
            ${frameColors[i]}
        </label>
    `;
}

initProductList();
function initProductList() {
    let initProductList = '';
    for (let i = 0; i < productList.length; i++) {
        initProductList += `
            <div class="productInfo" data-pruduct-category="${productList[i].category}" data-product-framecolor="${productList[i].frameColor}" data-product-material="${productList[i].material}">
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

const showSunglasses = document.querySelector('#showSunglasses');
const showGlasses = document.querySelector('#showGlasses');
const showAcetate = document.querySelector('#showAcetate');
const showMetal = document.querySelector('#showMetal');
const showCombination = document.querySelector('#showCombination');


showSunglasses.addEventListener('change', function () {
    const products = document.querySelectorAll('[data-pruduct-category="Sunglasses"]');
    if (showSunglasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'none';
        });
    }
});

showGlasses.addEventListener('change', function () {
    const products = document.querySelectorAll('[data-pruduct-category="Glasses"]');
    if (showGlasses.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'none';
        });
    }
});

showAcetate.addEventListener('change', function () {
    const products = document.querySelectorAll('[data-pruduct-material="Acetate"]');
    if (showAcetate.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'none';
        });
    }
});

showMetal.addEventListener('change', function () {
    const products = document.querySelectorAll('[data-pruduct-material="Metal"]');
    if (showMetal.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'none';
        });
    }
});

showCombination.addEventListener('change', function () {
    const products = document.querySelectorAll('[data-pruduct-material="Combination"]');
    if (showCombination.checked) {
        // 체크박스가 체크되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        // 체크박스가 체크 해제되었을 때 실행할 코드
        products.forEach(product => {
            product.style.display = 'none';
        });
    }
});
