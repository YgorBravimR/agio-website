'use client';

import { HTMLInputTypeAttribute, ReactNode, useState } from "react";

interface ISidePersonalInfoProps {
  title: string;
  information: string;
  icon: ReactNode;
}

export function SidePersonalInfo({ title, information, icon }: ISidePersonalInfoProps) {
  return (
    <div className="flex items-center gap-4 justify-center whitespace-nowrap">
      <i>{icon}</i>
      <div className="md:w-full text-start w-32">
        <span className="text-lg text-textColor">{title}</span>
        <p className="text-sm text-darkGrayColor">{information}</p>
      </div>
    </div>
  )
}
