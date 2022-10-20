import style from './Title.css';
import {React} from  'react';
import { useState } from 'react';

export const Title = ({ name, children }) => {
    const [title, SetTitle] = useState('My chat')

    const handleTitle = () => {
        SetTitle(title + '!')
    }

    if (children) {
        return <h2 className ="TitleContainer" onClick={handleTitle}>{children}</h2>
    }

    return <h2 className ="TitleContainer" onClick={handleTitle}>{name} {title}</h2>

}