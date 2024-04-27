export const firstChUp=(value)=>{
 if(value===' ' || !value || value===undefined){
            return ''
        }

        return value.charAt(0).toUpperCase()+value.slice(1)
}

