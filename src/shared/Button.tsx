import classNames from "classnames";

interface props{
    children: string,
    onClick?(): void,
    className?: string
}

const Button = ({children, onClick, className}: props) => {

    return <button
        className={classNames(className, 'text-white border-4 border-white text-xl px-4 py-2 sm:hover:bg-white sm:hover:text-black duration-300')}
        onClick={onClick}>
        {children}
    </button>
}

export default Button