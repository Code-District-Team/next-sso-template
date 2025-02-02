import {
  DashboardOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import K from "~/utilities/constants";

// Template a navigation item
// {
//     name: 'User',
//     path: '/user/list',
//     icon: <ProjectOutlined />,
//     permission: [],
//     children: [], // If item has children, then the path field will be ignored.
// }

const defaultChildren = (basePath) => [
  { path: `${basePath}`, name: "List" },
  {
    path: `${basePath}/store/create`,
    name: "Create",
    roles: [K.Permissions.Admin],
  },
];

const navigations = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardOutlined />,
  },
  {
    name: "Projects",
    // path: "/projects",
    icon: <ProjectOutlined />,
    permission: [],
    children: defaultChildren("/projects"),
  },
  {
    name: "Users",
    // path: "/users",
    icon: <UserOutlined />,
    children: defaultChildren("/users"),
  },
];

export default navigations;
