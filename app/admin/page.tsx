import { getIsAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false }) //ssr : server side rendering

const AdminPage = () => {
    
    if(!getIsAdmin())
    {
        redirect("/")
    }

    return ( 
        <App />
     );
}
 
export default AdminPage;