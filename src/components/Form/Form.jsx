import style from './Form.css'

export const Form = ({ onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input className='inputText mr-8' type="text" name="author" placeholder = 'Имя' />
        <input className='inputText mr-8' type="text" name="message" placeholder = 'Текст'/>
        <button className='mainButton'>Отправить</button>
    </form>
)

