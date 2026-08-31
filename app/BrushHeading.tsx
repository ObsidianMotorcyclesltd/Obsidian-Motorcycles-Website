import React from "react";
import BrandText from "./BrandText";

type Props={src:string;text:string;level?:1|2|3;className?:string};

export default function BrushHeading({src,text,level=2,className=""}:Props){
  void src;
  return React.createElement(`h${level}`,{className:`brush-heading brush-heading-${level} ${className}`.trim(),"data-brandified":"true","aria-label":text},
    <BrandText text={text}/>
  );
}
