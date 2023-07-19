const res = document.querySelector('#res');
const forms = document.querySelector('.forms');
const idNormal = document.querySelector('#idNormal');
const idTruck = document.querySelector('#idTruck');
const idMilitary = document.querySelector('#idMilitary');
const btnAdd = document.querySelector('#btnAdd');
const resBtnRemove = document.querySelector('.resBtnRemove');

const idName = document.querySelector('#idName');
const idDoor = document.querySelector('#idDoor');
const idSeat = document.querySelector('#idSeat');
const idWheels = document.querySelector('#idWheels');
const idCargo = document.querySelector('#idCargo');
const idArmor = document.querySelector('#idArmor');
const idAmmunition = document.querySelector('#idAmmun');
const blockInputs = () => {
    idCargo.readOnly = true;
    idWheels.readOnly = true;
    idArmor.readOnly = true;
    idAmmunition.readOnly = true;
    idSeat.readOnly = true;
    idName.readOnly = true;
    idDoor.readOnly = true;
    idCargo.style.background = '#b19a9a'
    idWheels.style.background = '#b19a9a'
    idArmor.style.background = '#b19a9a'
    idAmmunition.style.background = '#b19a9a'
    idName.style.background = '#b19a9a'
    idDoor.style.background = '#b19a9a'
    idSeat.style.background = '#b19a9a'
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnAdd.click();
    }
});

class Car{
    constructor(name, door, avSpeed) {
        this.name = name;
        this.door = door;
        this.avSpeed = avSpeed;
    }
}

class NormalCar extends Car{
    constructor(name, door, seat) {
        super(name, door, '100Km/h');
        this.seat = seat;
    }

    info() {
        return `
        Type: Normal<br/>
        Name: ${this.name}<br/>
        Door: ${this.door}<br/>
        Seat: ${this.seat}<br/>
        Average Speed: ${this.avSpeed}`;
    }
}

class TruckCar extends Car{
    constructor(name, door, cargo, seat, wheels) {
        super(name, door, '90Km/h');
        this.cargo = cargo;
        this.seat = seat;
        this.wheels = wheels;
    }
    
    info() {
        return `
        Type: Truck<br/>
        Name: ${this.name}<br/>
        Door: ${this.door}<br/>
        Ton Cargo: ${this.cargo}<br/>
        Seat: ${this.seat}<br/>
        Wheels: ${this.wheels}<br/>
        Average Speed: ${this.avSpeed}`;
    }
}

class MilitaryCar extends Car{
    constructor(name, door, seat, armor, ammunition) {
        super(name, door, '160Km/h');
        this.armor = armor;
        this.ammunition = ammunition;
        this.seat = seat;
    }

    info() {
        return `
        Type: Military<br/>
        Name: ${this.name}<br/>
        Door: ${this.door}<br/>
        Seat: ${this.seat}<br/>
        Armor: ${this.armor}<br/>
        Ammunition: ${this.ammunition}<br/>
        Average Speed: ${this.avSpeed}`
    }
}

blockInputs()

idNormal.addEventListener('change', () => {
    blockInputs()
    idDoor.readOnly = false;
    idSeat.readOnly = false;
    idName.readOnly = false;
    idCargo.style.background = '#b19a9a'
    idWheels.style.background = '#b19a9a'
    idArmor.style.background = '#b19a9a'
    idAmmunition.style.background = '#b19a9a'
    idName.style.background = '#fff'
    idDoor.style.background = '#fff'
    idSeat.style.background = '#fff'
});

idTruck.addEventListener('change', () => {
    blockInputs()
    idName.readOnly = false;
    idDoor.readOnly = false;
    idSeat.readOnly = false;
    idCargo.readOnly = false;
    idWheels.readOnly = false;
    idArmor.style.background = '#b19a9a'
    idAmmunition.style.background = '#b19a9a'
    idName.style.background = '#fff'
    idDoor.style.background = '#fff'
    idSeat.style.background = '#fff'
    idWheels.style.background = '#fff'
    idCargo.style.background = '#fff'
});

idMilitary.addEventListener('change', () => {
    blockInputs()

    idName.readOnly = false;
    idDoor.readOnly = false;
    idSeat.readOnly = false;
    idArmor.readOnly = false;
    idAmmunition.readOnly = false;
    idCargo.style.background = '#b19a9a'
    idWheels.style.background = '#b19a9a'
    idName.style.background = '#fff'
    idDoor.style.background = '#fff'
    idSeat.style.background = '#fff'
    idArmor.style.background = '#fff'
    idAmmunition.style.background = '#fff'
});

const addCar = () => {
    if (idNormal.checked) {

        console.log('NormalChecking');
        const name = idName.value;
        const door = idDoor.value;
        const seat = idSeat.value;
        
        const normal = new NormalCar(name, door, seat);
        idName.value = '';
        idDoor.value = '';
        idSeat.value = '';
        
        console.log(normal.info());
        
        const div = document.createElement("div");
        const resBtnRemove = document.createElement('div');
        resBtnRemove.setAttribute('class','resBtnRemove');
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "remove");
        btn.innerHTML = "X";
        resBtnRemove.appendChild(btn);
        div.setAttribute("class", 'carros');
        div.innerHTML = normal.info();
        res.appendChild(div);
        div.appendChild(resBtnRemove);
        btn.addEventListener('click', () => {
            div.remove();
            console.log('Normal Removed');
        });

    }else if (idTruck.checked) {
        console.log('Truck Checking');
        const name = idName.value;
        const door = idDoor.value;
        const cargo = idCargo.value;
        const seat = idSeat.value;
        const wheels = idWheels.value;

        const truck = new TruckCar(name, door, cargo, seat, wheels);
        idName.value = '';
        idDoor.value = '';
        idCargo.value = '';
        idSeat.value = '';
        idWheels.value = '';
        console.log(truck.info());
        
        const div = document.createElement("div");
        const resBtnRemove = document.createElement('div');
        resBtnRemove.setAttribute('class','resBtnRemove');
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "remove");
        btn.innerHTML = "X";
        resBtnRemove.appendChild(btn);
        div.setAttribute("class", 'carros');
        div.innerHTML = truck.info();
        res.appendChild(div);
        div.appendChild(resBtnRemove);
        btn.addEventListener('click', () => {
            div.remove();
            console.log('Truck Removed');
        });
        
    }else if (idMilitary.checked) {
        console.log('Military Checking');
        const name = idName.value;
        const door = idDoor.value;
        const armor = idArmor.value;
        const ammunition = idAmmunition.value;
        const seat = idSeat.value;

        const military = new MilitaryCar(name, door, seat, armor, ammunition);
        idName.value = '';
        idDoor.value = '';
        idArmor.value = '';
        idAmmunition.value = '';
        idSeat.value = ''
        console.log(military.info());

        const div = document.createElement("div");
        const resBtnRemove = document.createElement('div');
        resBtnRemove.setAttribute('class','resBtnRemove');
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "remove");
        btn.innerHTML = "X";
        resBtnRemove.appendChild(btn);
        div.setAttribute("class", 'carros');
        div.innerHTML = military.info();
        res.appendChild(div);
        div.appendChild(resBtnRemove);
        btn.addEventListener('click', () => {
            div.remove();
            console.log('Military Removed');
        });
    }
}

btnAdd.addEventListener("click", addCar);
