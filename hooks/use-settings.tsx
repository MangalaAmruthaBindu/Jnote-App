import {create} from "zustand"

type SettingsStore={
    isopen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

export const useSettings=create<SettingsStore>((set)=>({
    isopen:false,
    onOpen:()=>set({isopen:true}),
    onClose:()=>set({isopen:false}),
}));