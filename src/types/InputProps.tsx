
// For Input component's prop
export type InputProps = {
    label: string;
    input: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void
}
