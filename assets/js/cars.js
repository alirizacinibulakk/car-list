let cars = [
    { 
        brand: "Ford", 
        model: "Mustang", 
        color: "Mavi" 
    },
    { 
        brand: "BMW", 
        model: "3 Serisi", 
        color: "Siyah" 
    },
    { 
        brand: "Mercedes-Benz", 
        model: "E Serisi", 
        color: "Kırmızı" 
    },
    { 
        brand: "Toyota", 
        model: "Corolla", 
        color: "Beyaz" 
    },
    { 
        brand: "Honda", 
        model: "Civic", 
        color: "Gri" 
    },
    { 
        brand: "Volkswagen", 
        model: "Golf", 
        color: "Yeşil" 
    },
    { 
        brand: "Audi", 
        model: "A4", 
        color: "Turuncu" 
    },
    { 
        brand: "Porsche", 
        model: "911", 
        color: "Sarı" 
    },
    { 
        brand: "Ferrari", 
        model: "488 GTB", 
        color: "Lacivert" 
    },
    { 
        brand: "Lamborghini", 
        model: "Aventador", 
        color: "Altın" 
    },
    { 
        brand: "Tesla", 
        model: "Model S", 
        color: "Gümüş" 
    },
    { 
        brand: "Subaru", 
        model: "Impreza", 
        color: "Mor" 
    },
    { 
        brand: "Chevrolet", 
        model: "Camaro", 
        color: "Turkuaz" 
    },
    { 
        brand: "Hyundai", 
        model: "Tucson", 
        color: "Kahverengi" 
    },
    { 
        brand: "Kia", 
        model: "Sportage", 
        color: "Pembe" 
    },
    { 
        brand: "Nissan", 
        model: "Altima", 
        color: "Beyaz" 
    },
    { 
        brand: "Jaguar", 
        model: "F-Type", 
        color: "Siyah" 
    },
    { 
        brand: "Land Rover", 
        model: "Range Rover", 
        color: "Gri" 
    },
    { 
        brand: "Volvo", 
        model: "XC90", 
        color: "Yeşil" 
    },
    { 
        brand: "Mazda", 
        model: "MX-5", 
        color: "Kırmızı" 
    }
  ];

const brandList = document.querySelector(".brand-list");
const modelList = document.querySelector(".model-list");
const colorList = document.querySelector(".color-list");

for (const car of cars) {
    brandList.innerHTML += `<h4>${car.brand}</h4> <hr>`;
    modelList.innerHTML += `<p">${car.model}</p> <hr>`;
    colorList.innerHTML += `<p>${car.color}</p> <hr>`;
}