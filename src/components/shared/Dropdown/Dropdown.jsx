import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown({ children, trigger }) {
    const [show, setShow] = useState(false);
    const dropRef = useClickOutside(() => setShow(false))

    return (
        <div className="w-fit relative" ref={dropRef} onClick={() => setShow(curr => !curr)}>
            <div>{trigger}</div>
            {show && <ul className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-hidden">{children}</ul>}
        </div>
    )
}

export function DropdownItem({ children }) {
    return (
        <li className="bg-[#6a97ea9a] flex gap-3 items-center px-4 py-2 text-[#415781] hover:text-[#C9A267] shadow-xl bg-gradient-to-l from-[#6a97ea9a] to-slate-200 cursor-pointer">{children}</li>
    )
}