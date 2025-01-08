type Props = {
    type?: 'primary' | 'secondary'
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export default function Button({ type = 'primary', className = '', onClick, children }: Props) {

    const bgColor = type === 'primary' ? 'bg-peach' : 'bg-forest'
    const borderColor = type === 'primary' ? 'border-forest' : 'border-peach'
    const textColor = type === 'primary' ? 'text-forest' : 'text-peach'

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <button
            className={`${bgColor} ${textColor} ${className} ${borderColor} flex px-6 py-2 rounded-md gap-3 items-center justify-between h-fit w-fit border`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}