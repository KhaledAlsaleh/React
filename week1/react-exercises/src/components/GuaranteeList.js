// import React from 'react';
import Guarantee from './Guarantee';
import uuid from 'react-uuid';
import freeShipping from '../images/f-delivery.png';
import coin from '../images/coin.png';
import chat from '../images/chat.png';

const guaranteeItems= [
    {
        id: uuid(),
        image: freeShipping,
        title: 'Free Shipping',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,Lorem ipsum dolor sit amet, percipit repudiande dolor sit amet lerm curd vom repudiande...'
    },
    {
        id: uuid(),
        image: coin,
        title: '100% Money Back',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,Lorem ipsum dolor sit amet, percipit repudiande dolor sit amet lerm curd vom repudiande...'
    },
    {
        id: uuid(),
        image: chat,
        title: 'Online Support 24/7',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,Lorem ipsum dolor sit amet, percipit repudiande dolor sit amet lerm curd vom repudiande...'
    }
];


const GuaranteeList = () => {
    
    return (
        <div className='exerciseBlock'>
            <h2>Exercise 2</h2>
            <div className='guaranteeItem'>
                {guaranteeItems.map(guaranteeItem => <Guarantee key={guaranteeItem.id} 
                                                            guaranteeImg={guaranteeItem.image} 
                                                            guaranteeTitle={guaranteeItem.title} 
                                                            guaranteeDescription={guaranteeItem.description}/>)}
            </div>
            
        </div>
    )
}

export default GuaranteeList
