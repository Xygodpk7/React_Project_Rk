"use client";


import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string"

interface CategoryProps{
    label:string;
    Icon: IconType;
    selected?: boolean;
}

const Category : React.FC<CategoryProps> = ({
    label,
    Icon,
    selected
}) =>{


    const router = useRouter();
    const params = useSearchParams();

    const handleCLick = useCallback(
        () => {
            if(label === "All"){
                router.push('/');
            }else{
                let currentQuery = {};

                if(params){
                    currentQuery = queryString.parse(params.toString())
                }

                const upadatedQuery :any = {
                    ...currentQuery,
                    category : label,
                }

                const url = queryString.stringifyUrl(
                    {
                        url: '/',
                        query : upadatedQuery
                    },
                    {
                        skipNull:true
                    }
                )

                router.push(url)
            }
        },[label, params,router],
    )

    return (
        <div onClick={handleCLick}
        className={`flex items-center justify-center text-center 
        gap-2 p-2 border-b-2 hover:text-slate-800 transition
        cursor-pointer
        ${selected ? 'border-b-slate-800 text-slate-800' : 'border-transparent text-slate-500'}
        `}>
            <Icon size={20}/>
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
}

export default Category;