// OBjects/// Defines an entities properties, values and abilities.. 

const input = document.getElementById('our_number')
const opr = document.getElementById('operator')

const switchOperators = (prevVolume, volume, operator) => {
    let output = 0;
    switch(operator) {
        case 'add' : 
            output = volume ? prevVolume + parseInt(volume) : prevVolume + 1
            break;
        case 'sub' : 
            output = volume ? prevVolume - parseInt(volume) : prevVolume - 1
            // smartPhone.volume = smartPhone.volume - parseInt(volume);
            // console.log('adjusted volume: ', smartPhone.volume);
        break;
        case 'mul' : 
            output = volume ? prevVolume * parseInt(volume) : prevVolume * 2;
        break;
        case 'div' : 
            output = volume ? prevVolume / parseInt(volume) : prevVolume / 2
        break;
        default: 
            output = volume ? prevVolume + parseInt(volume) : prevVolume + 1
    }

    return output;
}

let smartPhone = {
    material: 'plastic',
    display: 'snap dragon',
    height: '20inches',
    width: '20cm',
    volume: 5,

    call:() => {},
    text:() => {''},
    snap:() => {''},
    record:() => {''},


    adjustVolume: (operator, volume) => {
        if(operator && volume ){
            smartPhone.volume = switchOperators(smartPhone.volume, volume, operator)
            console.log(smartPhone.volume)
        }else if(operator && !volume) {
            smartPhone.volume = switchOperators(smartPhone.volume, 0, operator)
            console.log(smartPhone.volume)
        }else{
            console.log('invalid request')
            return
        }
    },

}

let bottle = {
    material: 'glass',
    opening: '6.5 meter radius',
    length: '150cm',
    thickness: '2cm',

    holdLiquid:() => {''},
}

let calculator = {
    material: 'plastic',
    height: '150 cm',
    width: '50 cm',
    screenDisplay: '30 x 15 cm',

    add:() => {''},
    subtract:() => {''},
    divide: () => {''},
    multiply: () => {''}
}



function increaseVolume() {
    smartPhone.adjustVolume(opr.value, input.value)
    // smartPhone.adjustVolume('add', 4)
    

    // console.log('new value: ', switchOperators(10, 0,'add'))
}