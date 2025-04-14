import styles from "./styles.module.css";

type TextTypes = "text" | "number" | "email" | "password" | "search" | "tel" | "url";

export default function TextInput({
    type = "text",
    placeholder = "",
    className = "",
    ...attributes
}: {
    type?: TextTypes;
    placeholder?: string;
    className?: string;
    [attribute: string]: any;
}) {
    return (
        <input className={`${styles.input} ${className ?? ""}`} type={type} placeholder={placeholder} {...attributes} />
    );
}
