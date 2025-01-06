import Link from "next/link";
import React from "react";

interface props {
    type: "submit" | "reset" | "button" | undefined;
    text: string;
    className?: string;
    href: string;
}

export default function Botao({type, text, className = "", href}: props){
    return (
        <Link href={href} className={`flex ${className}`}>
            <button
            type={type}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex w-[100%] justify-center"
            >
            {text}
            </button>
        </Link>
);
}
