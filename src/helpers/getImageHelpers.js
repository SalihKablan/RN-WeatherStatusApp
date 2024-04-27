export const getImage=(status)=>{
    switch(status){
        case 'Rain':
            return require("../../assets/images/rain.png")
        case 'Clouds':
            return require("../../assets/images/cloud.png")
        case 'Sun':
            return require("../../assets/images/sun.png")
        case 'SunCloud':
            return require("../../assets/images/suncloud.png")
        default: return require("../../assets/images/suncloud.png") 
    }
 }