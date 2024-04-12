"use client";

import { categories } from "@/utils/categories";
import Container from "../Container";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () =>{

    const params = useSearchParams();
    const category = params?.get('category')

    const pathname = usePathname();
    const IsMainPage = pathname === '/';

    if(!IsMainPage) return null;

    return (
        <div className="bg-white">
            <Container>
                <div className="pt-4 flex flex-row items-center
                justify-between overflow-x-auto">
                    {categories.map((item) =>(
                        <Category
                            key={item.label}
                            label={item.label}
                            Icon={item.icon}
                            selected={category === item.label || (category === null && item.label === 'All')}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Categories;