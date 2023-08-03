import { useState } from "react";

function useFormHook(initial) {
    const [formvalue, setFormValue] = useState(initial);
    return [formvalue, function (event) {
        setFormValue({
            ...formvalue,
            [event.target.id]: event.target.value,
        });
    },];
}

export default useFormHook;