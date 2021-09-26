import React, { ComponentProps, ComponentType } from "react";

interface Prop {
  icon: ComponentType<ComponentProps<"svg">>;
  title: string;
}

export const NavIcon = ({ icon: Icon, title }: Prop) => {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-pointer w-12 sm:w-20 text-onNeutralBg hover:text-white">
      <Icon className="h-8 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};
