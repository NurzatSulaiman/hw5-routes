import React from "react";
import {Button, FormControl, FormHelperText, FormLabel, Input} from "@mui/material";

const UsersPage = () => {
  return (
   <div>
     <FormControl>
       <FormLabel>Registration form</FormLabel>
       <Input placeholder="Enter your login" />
       <Input placeholder="Enter your password" />
       <Button variant="outlined">Send</Button>
     </FormControl>
   </div>
  )
}

export default UsersPage