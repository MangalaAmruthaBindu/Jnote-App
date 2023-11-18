import {create} from "zustand";
type SearchStore={
    isopen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
    toggle:()=>void;
};
export const useSearch=create<SearchStore>((set,get)=>({
    isopen:false,
    onOpen:()=>set({isopen:true}),
    onClose:()=>set({isopen:false}),
    toggle:()=>set({isopen:!get().isopen}),
}));