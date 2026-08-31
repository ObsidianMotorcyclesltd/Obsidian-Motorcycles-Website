import React from "react";

const namedGlyphs:Record<string,string>={
  "&":"ampersand","£":"pound","+":"plus","@":"at","?":"question","!":"exclamation"
};

const punctuationClasses:Record<string,string>={
  "-":"brand-dash","–":"brand-dash","—":"brand-dash",".":"brand-dot",",":"brand-comma",
  "'":"brand-apostrophe","’":"brand-apostrophe",":":"brand-colon","/":"brand-slash","→":"brand-arrow","·":"brand-dot"
};

function Character({character}:{character:string}){
  const upper=character.toUpperCase();
  const asset=/^[A-Z0-9]$/.test(upper)?upper:namedGlyphs[character];
  if(asset){
    const src=asset==="ampersand"?"/brand-glyphs/ampersand.png":`/brand-glyphs-clean/${asset}.png`;
    return <img className="brand-glyph" data-glyph={asset} src={src} alt="" aria-hidden="true"/>;
  }
  return <span className={`brand-punctuation ${punctuationClasses[character]||"brand-mark"}`} aria-hidden="true"/>;
}

export default function BrandText({text}:{text:string}){
  const words=text.trim().split(/\s+/);
  return <span className="brand-lettering" aria-hidden="true">{words.map((word,index)=><React.Fragment key={`${word}-${index}`}>
    {index>0&&<span className="brand-space"/>}
    <span className="brand-word">{Array.from(word).map((character,characterIndex)=><Character key={`${character}-${characterIndex}`} character={character}/>)}</span>
  </React.Fragment>)}</span>;
}
