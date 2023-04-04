declare function Button$1({ children, type, }: {
    children: string;
    type: "primary" | "secondary";
}): JSX.Element;

declare function Button({ children }: {
    children: string;
}): JSX.Element;

export { Button$1 as Button, Button as Tag };
