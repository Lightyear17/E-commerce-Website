 import {Group,FormInputLabels,Input} from './form-input.style.jsx'
 const FormInput = ({label,...otherProps})=>{

    return(
        <Group>
            <Input {...otherProps}  />
            {label &&(

                <FormInputLabels shrink={otherProps.value.length}>{label}</FormInputLabels>
            )}
        
        </Group>
    )
 }

 export default FormInput