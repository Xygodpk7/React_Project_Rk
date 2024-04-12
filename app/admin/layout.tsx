import React from "react";
import AdminNav from "../components/admin/AdminNav";


export const metadata ={
    title : 'J-Shop Admin',
    description: 'J-Shop Admin DashBoard'
}


const AdminLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <AdminNav/>
            {children}
        </div>);
}

export default AdminLayout;