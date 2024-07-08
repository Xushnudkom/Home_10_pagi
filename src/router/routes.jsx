import AddchartIcon from '@mui/icons-material/Addchart';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleIcon from '@mui/icons-material/People';
const routes = [
  {
    path: "/",
    content: "Home",
    icon: <AddchartIcon />,
  },
  {
    path: "/orders",
    content: "Orders",
    icon: <DryCleaningIcon />,
  },
  {
    path: "/service",
    content: "Service",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    path: "/clients",
    content: "Clients",
    icon: <PeopleIcon />,
  },
];

export default routes;
