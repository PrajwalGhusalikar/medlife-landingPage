import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      let response = await axios.post(
        "https://api.cyberbriefs.org/bot_api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Assuming the response contains data

      if (response) {
        setLoading(false);
        getData();
        toast({
          title: "File uploaded successfully",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "There is something wrong.",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const getData = async () => {
    try {
      let files = await axios.get("https://api.cyberbriefs.org/bot_api/view/");
      setData(files.data.pdf_files);
      console.log(files.data.pdf_files);
    } catch (error) {
      toast({
        title: "There is something wrong.",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleDelete = async (filename) => {
    try {
      setLoading(true);
      let files = await axios.delete(
        `https://api.cyberbriefs.org/bot_api/delete/${filename}`
      );
      // setData(files);
      if (files) {
        getData();
        setLoading(false);
        toast({
          title: "Successfully Deleted.",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "There is something wrong.",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Heading mb={10}>Dashboard</Heading>
      <Flex
        border={"0px solid red"}
        w={"100%"}
        m={"auto"}
        justifyContent={"center"}
        columnGap={10}
      >
        <Flex flexDir={"column"} rowGap={4}>
          <Input type="file" onChange={handleFileChange} />
          <Button isDisabled={loading} onClick={handleUpload}>
            {loading ? "Loading" : "Upload File"}
          </Button>
        </Flex>
        <Flex flexDir={"column"} rowGap={4}>
          <Link to={"/chat"}>
            <Button>Goto the Bot</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </Flex>
      </Flex>
      <Box>
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el}</td>
                    <td onClick={() => handleDelete(el)}>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default Dashboard;
