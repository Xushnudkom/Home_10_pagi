import { Clients } from "@modal";
import { ClientTable} from "../../components/ui";
import { useEffect, useState } from "react";
import { clients } from "@service";
import Pagination from '@mui/material/Pagination';
const Index = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
  const [params, setParams] = useState({
    limit:5,
    page:2
  })

  const getData = async () => {
    try {
      const response = await clients.get(params);
      console.log(response);
      if (response.status === 200 && response?.data?.clients_list) {
        setData(response?.data?.clients_list);
        setCount(response?.data?.total)
        let total = Math.ceil(response.data.total / params.limit)
        setCount(total)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = (event, value) => {
    setParams({
      ...params, 
      page: value
    })
  };
  return (
    <>
      <Clients open={open} handleClose={() => setOpen(false)} />
      <div className=" flex flex-col gap-3">
        <ClientTable data={data} />
        <Pagination count={count} page={params.page} onChange={handleChange}   sx={{marginLeft: '530px', marginTop: '20px'}}/>
      </div>
    </>
  );
};

export default Index;
