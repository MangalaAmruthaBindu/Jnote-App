import {create} from "zustand";
type CoverImageStore={
    url?:string;
    isopen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
    onReplace:(url:string)=>void;
};

export const useCoverImage=create<CoverImageStore>((set)=>({
    url:undefined,
    isopen:false,
    onOpen:()=>set({isopen:true,url:undefined}),
    onClose:()=>set({isopen:false,url:undefined}),
    onReplace:(url:string)=>set({isopen:true,url})
}));