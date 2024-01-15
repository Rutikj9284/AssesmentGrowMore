import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../styling/secondPage.css";
import DepartmentList from "./DepartmentList";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", flex: 1 },
  ];

  return (
    <div className="align-center">
      <div className="DataGrid-container">
        <h2 style={{color:'black'}}>Second Page</h2>
        <h3 style={{color:'black'}}>Posts Data</h3>
        <DataGrid rows={posts} columns={columns} />
        <DepartmentList />
      </div>
    </div>
  );
};

export default SecondPage;
