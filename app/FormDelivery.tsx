"use client";

import {useEffect} from "react";

const EMAIL="info@obsidianmotorcycles.com";
const PAYMENT_LINKS:Record<string,string>={
  Bronze:"https://pay.gocardless.com/BRT01M0YXJ5CG7S47PF1DV25MXRRG",
  Silver:"https://pay.gocardless.com/BRT01M0YY23KZ9KH48C7HEAQXD0FV",
  Gold:"https://pay.gocardless.com/BRT01M0YY45PZ00CW3ZHC6RJW4Z9Q",
  Platinum:"https://pay.gocardless.com/BRT01M0YY6BP9YY2F7V51D91JCXHX"
};

function formIdentity(form:HTMLFormElement){
  if(form.name)return form.name;
  if(form.classList.contains("booking-form"))return "service-interest";
  return "";
}

function emailCopy(name:string,data:FormData){
  const labels:Record<string,string>={contact:"Website enquiry","service-interest":"Service interest","membership-application":"Membership application","membership-cancellation":"Membership cancellation request"};
  const ignored=new Set(["form-name","bot-field"]);
  const lines=[...data.entries()].filter(([key])=>!ignored.has(key)).map(([key,value])=>`${key.replaceAll("-"," ").replaceAll("_"," ")}: ${String(value)}`);
  return {subject:`${labels[name]} — Obsidian Motorcycles Ltd`,body:lines.join("\n")};
}

export default function FormDelivery(){
  useEffect(()=>{
    const submit=async(event:SubmitEvent)=>{
      const form=event.target as HTMLFormElement;
      if(!(form instanceof HTMLFormElement))return;
      const name=formIdentity(form);
      if(!["contact","service-interest","membership-application","membership-cancellation"].includes(name))return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const data=new FormData(form);
      data.set("form-name",name);
      const plan=String(data.get("plan")||"");
      if(name==="membership-application"&&PAYMENT_LINKS[plan])window.open(PAYMENT_LINKS[plan],"_blank","noopener,noreferrer");
      const isNetlify=!window.location.hostname.endsWith("chatgpt.site")&&!window.location.hostname.includes("terminal.local");
      if(isNetlify){
        try{
          const encoded=new URLSearchParams();
          data.forEach((value,key)=>encoded.append(key,String(value)));
          const response=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:encoded});
          if(!response.ok)throw new Error("Form delivery failed");
          window.location.href=name==="membership-cancellation"?"/cancellation-received":"/thank-you";
          return;
        }catch{/* Continue to the email fallback below. */}
      }
      const copy=emailCopy(name,data);
      window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(copy.body)}`;
    };
    document.addEventListener("submit",submit,true);
    return()=>document.removeEventListener("submit",submit,true);
  },[]);
  return null;
}
