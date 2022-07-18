import {
  Button,
  Container,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { contactUsValidator, notify } from "../../utils/extrafunctions";

export const ContactUs = () => {
  const init = {
    name: "",
    mobile: "",
    email: "",
    city: "",
    comments: "",
    sizeOfLand: "",
  };
  const [contact, setContact] = useState(init);
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = () => {
    if (contactUsValidator(contact, toast)) {
      setContact({
        ...{
          name: "",
          mobile: "",
          email: "",
          city: "",
          comments: "",
          sizeOfLand: "",
        },
      });
      notify(toast, "our customers contact you as soon as possible", "success");
    }
  };

  return (
    <Container
      border={"1px solid #edf2f7"}
      mt={["60px", "20px"]}
      mb={["60px", "20px"]}
      borderRadius={"2%"}
      p={["10px", "20px", "30px"]}
      maxW={"400px"}
    >
      <VStack gap={"10px"}>
        <Heading>ContactUs</Heading>
        <Input
          onChange={handleChange}
          name="name"
          value={contact.name}
          type={"text"}
          placeholder="Name"
          focusBorderColor="#81D742"
        />
        <Input
          onChange={handleChange}
          name="mobile"
          value={contact.mobile}
          type={"tel"}
          placeholder="Mobile"
          focusBorderColor="#81D742"
        />
        <Input
          onChange={handleChange}
          name="email"
          value={contact.email}
          type={"email"}
          placeholder="Email"
          focusBorderColor="#81D742"
        />

        <Input
          onChange={handleChange}
          name="city"
          value={contact.city}
          type={"text"}
          placeholder="You Current City"
          focusBorderColor="#81D742"
        />
        <Input
          onChange={handleChange}
          name="sizeOfLand"
          value={contact.sizeOfLand}
          type={"text"}
          placeholder="Size Of Land Owned or Rented (eg:- acres)"
          focusBorderColor="#81D742"
        />
        <Textarea
          onChange={handleChange}
          name="comments"
          value={contact.comments}
          type={"text"}
          placeholder="Your Comments or Questions"
          focusBorderColor="#81D742"
        ></Textarea>
        <Button onClick={handleSubmit} w={"100%"}>
          Send
        </Button>
      </VStack>
    </Container>
  );
};
