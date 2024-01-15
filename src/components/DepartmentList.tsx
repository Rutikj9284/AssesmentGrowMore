import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Hardcoded JSON data
const departmentData = [
  {
    "id": 1,
    "name": "customer_service",
    "sub_departments": [
      { "id": 11, "name": "support" },
      { "id": 12, "name": "customer_success" }
    ]
  },
  {
    "id": 2,
    "name": "design",
    "sub_departments": [
      { "id": 21, "name": "graphic_design" },
      { "id": 22, "name": "product_design" },
      { "id": 23, "name": "web_design" }
    ]
  }
];

interface Department {
  id: number;
  name: string;
  sub_departments?: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
}

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const handleClick = (departmentId: number) => {
    setOpen((prevOpen) => {
      const index = prevOpen.indexOf(departmentId);
      if (index === -1) {
        return [...prevOpen, departmentId];
      }
      return [...prevOpen.slice(0, index), ...prevOpen.slice(index + 1)];
    });
  };

  const handleToggle = (departmentId: number) => {
    setSelected((prevSelected) => {
      const index = prevSelected.indexOf(departmentId);
      if (index === -1) {
        return [...prevSelected, departmentId];
      }
      return [...prevSelected.slice(0, index), ...prevSelected.slice(index + 1)];
    });
  };

  const renderDepartment = (department: Department) => (
    <React.Fragment key={department.id}>
      <ListItem
        component="div"
        onClick={() => handleClick(department.id)}
        sx={{ color: 'black' }} // Add styling here
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={selected.includes(department.id)}
            tabIndex={-1}
            disableRipple
            onChange={() => handleToggle(department.id)}
          />
        </ListItemIcon>
        <ListItemText primary={department.name} />
        {department.sub_departments &&
          (open.includes(department.id) ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {department.sub_departments && (
        <Collapse in={open.includes(department.id)} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ color: 'black' }}>
            {department.sub_departments.map((subDepartment) => (
              <ListItem key={subDepartment.id} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selected.includes(subDepartment.id)}
                    tabIndex={-1}
                    disableRipple
                    onChange={() => handleToggle(subDepartment.id)}
                  />
                </ListItemIcon>
                <ListItemText primary={subDepartment.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <h2 style={{ color: 'black' }}>Department List</h2>
      <List sx={{ color: 'black' }}>
        {departmentData.map((department) => renderDepartment(department))}
      </List>
    </div>
  );
};

export default DepartmentList;