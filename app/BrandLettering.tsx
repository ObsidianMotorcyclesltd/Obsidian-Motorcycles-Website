"use client";

import {useLayoutEffect} from "react";

const namedGlyphs:Record<string,string>={
  "&":"ampersand","£":"pound","+":"plus","@":"at","?":"question","!":"exclamation"
};

const punctuationClasses:Record<string,string>={
  "-":"brand-dash","–":"brand-dash","—":"brand-dash",".":"brand-dot",",":"brand-comma",
  "'":"brand-apostrophe","’":"brand-apostrophe",":":"brand-colon","/":"brand-slash","→":"brand-arrow"
};

function makeCharacter(character:string){
  const upper=character.toUpperCase();
  const asset=/^[A-Z0-9]$/.test(upper)?upper:namedGlyphs[character];
  if(asset){
    const image=document.createElement("img");
    image.className="brand-glyph";
    image.dataset.glyph=asset;
    image.src=asset==="ampersand"?"/brand-glyphs/ampersand.png":`/brand-glyphs-clean/${asset}.png`;
    image.alt="";
    image.setAttribute("aria-hidden","true");
    return image;
  }
  const punctuation=document.createElement("span");
  punctuation.className=`brand-punctuation ${punctuationClasses[character]||"brand-mark"}`;
  punctuation.setAttribute("aria-hidden","true");
  return punctuation;
}

function makeLettering(text:string){
  const lettering=document.createElement("span");
  lettering.className="brand-lettering";
  text.split(" ").forEach((word,index)=>{
    if(index){
      const space=document.createElement("span");
      space.className="brand-space";
      space.setAttribute("aria-hidden","true");
      lettering.append(space);
    }
    const wordElement=document.createElement("span");
    wordElement.className="brand-word";
    wordElement.setAttribute("aria-hidden","true");
    Array.from(word).forEach(character=>wordElement.append(makeCharacter(character)));
    lettering.append(wordElement);
  });
  return lettering;
}

/** Assemble every ordinary branded heading from the original painted glyph artwork. */
export default function BrandLettering(){
  useLayoutEffect(()=>{
    const selector=[
      "h1:not(.brush-heading)",
      "h2:not(.brush-heading)",
      "h3:not(.brush-heading)",
      "h4:not(.brush-heading)",
      "h5:not(.brush-heading)",
      "h6:not(.brush-heading)",
      ".eyebrow",
      ".form-intro>span"
    ].join(",");
    const applyArtwork=()=>{
      document.querySelectorAll<HTMLElement>(selector).forEach(element=>{
        if(element.dataset.brandified||element.querySelector("img"))return;
        const original=(element.textContent||"").replace(/\s+/g," ").trim();
        if(!original)return;
        element.setAttribute("aria-label",original);
        element.replaceChildren(makeLettering(original));
        element.dataset.brandified="true";
      });
    };
    applyArtwork();
    const observer=new MutationObserver(applyArtwork);
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
    const retryTimers=[50,250,1000].map(delay=>window.setTimeout(applyArtwork,delay));
    return()=>{observer.disconnect();retryTimers.forEach(window.clearTimeout)};
  },[]);
  return null;
}
