import {
    ColorLens,
    GridViewOutlined,
    Group,
    Inventory,
    PostAdd,
    Settings,
    SignalCellularAlt,
    Store,
  } from "@mui/icons-material";
  
  export const menuItems = [
    {
      href: "/admin/dashboard",
      icon: <GridViewOutlined />,
      label: "Dashboard",
    },
    {
      href: "/admin/store",
      icon: <Store />,
      label: "Store",
      subItems: [
        { href: "/admin/store", label: "Home",},
        { href: "/admin/store/orders", label: "Orders",},
        { href: "/admin/store/customers", label: "Customers",},
        { href: "/admin/store/reports", label: "Reports"},
        { href: "/admin/store/setting", label: "Settings"},
        { href: "/admin/store/status", label: "Status"},
      ],
    },
    {
      href: "/admin/products",
      icon: <Inventory />,
      label: "Products",
      subItems: [
        { href: "/admin/products", label: "All Products",},
        { href: "/admin/create-product", label: "Create Product",},
        { href: "/admin/product/categories", label: "Categories",},
        { href: "/admin/product/tags", label: "Tags"},
        { href: "/admin/product/tags", label: "Brands"},
        { href: "/admin/product/brands", label: "Brands"},
        { href: "/admin/product/attributes", label: "Attributes"},
        { href: "/admin/product/reviews", label: "Reviews"},
      ],
    },
    {
      href: "/admin/analytics",
      icon: <SignalCellularAlt style={{color: "#ddd"}}/>,
      label: "Analytics",
      subItems: [
        { href: "/admin/analytics", label: "Overview"},
        { href: "/admin/analytics/products", label: "Products",},
        { href: "/admin/analytics/revenue", label: "Revenue",},
        { href: "/admin/analytics/orders", label: "Orders",},
        { href: "/admin/analytics/variations", label: "Variations",},
        { href: "/admin/analytics/categories", label: "Categories",},
        { href: "/admin/analytics/coupons", label: "Coupons",},
        { href: "/admin/analytics/stacks", label: "Stocks",},
      ],
    },
    {
      href: "/admin/posts",
      icon: <PostAdd style={{color: "#ddd"}}/>,
      label: "Posts",
      subItems: [
        { href: "/admin/posts", label: "All Posts",},
        { href: "/admin/post/create", label: "Create Post",},
        { href: "/admin/post/categories", label: "Categories",},
        { href: "/admin/post/tags", label: "Tags"},
      ],
    },
    {
      href: "#",
      icon: <ColorLens style={{color: "#ddd"}}/>,
      label: "Customization",
    },
    {
      href: "#",
      icon: <Group style={{color: "#ddd"}}/>,
      label: "Users",
      subItems: [
        { href: "/admin/users", label: "All Users",},
        { href: "/admin/add-user", label: "Add User",},
        { href: "/admin/profile", label: "Profile",},
      ],
    },
    {
      href: "/admin/settings",
      icon: <Settings style={{color: "#ddd"}}/>,
      label: "Settings",
    }
  ];