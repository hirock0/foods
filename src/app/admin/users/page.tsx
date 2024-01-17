
import TableData from "@/components/admin/userTableData/TableData";
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
ConnectionStr()
  export default async function UsersPage(props:any){
      let q= props.searchParams?.q || "" ;
      const regex = RegExp(q,"i")
      const data = await SignupSchemaData.find({username:{$regex:regex}});
  
    return(
        <div className=" w-full">
             
                    <TableData da={data}/>
            
        </div>
    )
}
