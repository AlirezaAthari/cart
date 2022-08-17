import { rest } from 'lodash';
import Select from 'react-select';
import styles from './selectComponent.module.css';

const selectStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        display : 'flex' ,
        outline: 'none',
        borderRadius: '5px' ,
        fontSize: '15px' ,
        border : isFocused ? '2px solid #6d28d9' : '2px solid rgb(208, 208, 208)' , 
        transition: isFocused ? 'all .2s' : 'none',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = chroma(data.color);
      return {
        cursor : 'pointer' ,
        padding : '8px',
        backgroundColor : isFocused ? '#ede9fe' : '#FFF',
        color : isSelected ? '#6d28d9' : '#000',
        // border : isFocused ? '1.5px solid #6d28d9' : '1.5px solid #FFF' , 
        // color: '#FFF',
        // cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

function SelectComponent({title , ...rest}) {
    return ( 
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select
            {...rest}
            styles = {selectStyles}/>
        </div>
     );
}

export default SelectComponent;