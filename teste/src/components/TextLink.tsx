import React from 'react';
import Link from 'next/link';

export default function TextLink({ text, href, className = "" }: any) {
  return (
    <Link href={href}  className={`text-purple-500 hover:underline flex ${className}`}>
        {text}
    </Link>
  );
}