import { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    variant: 'normal' | 'styled' | 'dark';
    sz: 'sm' | 'md' | 'lg',
}>;

const Button = ({children ,onClick, variant, sz}: ButtonProps) => {

    const ButtonVariant: Record<ButtonProps['variant'], CSSProperties> = {
        normal: {
            backgroundColor: 'transparent',
            transition: '.1s ease-in-out',
        },
        styled: {
            backgroundColor: 'transparent',
            border: '2px solid #2D3134',
            color: '#2D3134',
            transition: '.1s ease-in-out',
        },
        dark: {
            // background: '#2D3134',
            // color: '#FAF8ED',
            boxShadow: '0px 12px 48px #C4BFAE',
            transition: '.1s ease-in-out',
        }
    }

    const buttonSize: Record<ButtonProps['sz'], CSSProperties> = {
        sm: {
            fontSize: '0.875rem',
            width: '6rem',
            height: '2.5rem',
        },
        md: {
            fontSize: '1rem',
            width: '8rem',
            height: '3rem',
        },
        lg: {
            fontSize: '1.125rem',
            width: '10rem',
            height: '3.5rem',
        }
    }

    console.log(variant);

    return (
        <button style={{...ButtonVariant[variant], ...buttonSize[sz]}}
            className={variant === 'normal' ? "hover:border-b-orange hover:border-b-2" : variant === 'styled' ? "shadow-add hover:shadow-takeoff" : "bg-dark text-background hover:bg-background hover:text-dark hover:border-dark hover:border-2 hover:shadow-takeoff"}
        >
            { children }
        </button>
    )
}

export default Button;