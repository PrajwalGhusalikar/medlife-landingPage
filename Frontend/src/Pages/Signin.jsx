import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signin = () => {
  const [username, setUsername] = useState("");
  const [key, setkey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();

    //'username' and 'key' are obtained from the form input fields
    let data = {
      username,
      key,
    };
    console.log(data);

    try {
      if (!username || !key) {
        toast({
          title: "Field is empty",
          description:
            "Please ensure that you have provided both the username and key.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
          colorScheme: "red",
        });
      } else {
        setLoading(true);
        const response = await axios.post(
          `https://api.cyberbriefs.org/bot_api/authenticate/?name=${username}&key=${key}`
        );
        console.log(response.data.message);
        // Check the response status and handle the data accordingly
        if (response.status === 200) {
          console.log("Login successful");
          setLoading(false);
          toast({
            title: response.data.message,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });

          localStorage.setItem("token", JSON.stringify("tokengranted"));
          navigate("/");
        } else {
          setLoading(false);
          console.log("Login failed");
          console.log(response.data); // Display error messages or handle accordingly
        }
      }
    } catch (error) {
      // Handle Axios errors and display appropriate messages
      console.error("Error:", error);
      setLoading(false);
      if (error) {
        console.log("User not found. Please sign up.");
        toast({
          title: "User not found",
          description: "Please sign up.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } else if (error) {
        console.error("Wrong key");
        setLoading(false);
        toast({
          title: "Wrong key.",
          description: "Please check that you have entered the correct key.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  const [showkey, setShowkey] = useState(false);

  const handleShowClick = () => setShowkey(!showkey);

  return (
    <div className="flex justify-center items-center w-screen">
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          bg="white"
          p={8}
          rounded="md"
          boxShadow="lg"
        >
          <Avatar bg="teal.500" mb={4} />
          <Heading color="teal.400" mb={2}>
            Welcome
          </Heading>
          <Text color="gray.500" fontWeight="600" mb={4}>
            Sign in to continue.
          </Text>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack spacing={4} p="1rem">
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      variant="outline"
                      borderColor="teal.400"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showkey ? "text" : "password"}
                      placeholder="key"
                      value={key}
                      onChange={(e) => setkey(e.target.value)}
                      variant="outline"
                      borderColor="teal.400"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showkey ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={loginHandler}
                  isDisabled={loading}
                  _hover={{ bg: "teal.600" }}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
    
      </Flex>
    </div>
  );
};

export default Signin;
